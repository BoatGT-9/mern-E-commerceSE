import React, { useEffect, useState } from "react";
import Card from "../../components/card";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOptions, setSortOption] = useState("default");
  const [currentPage, setCurrenPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(8);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const data = await response.json();
        setProducts(data);
        setFilterItems(data);
        setCategories(["all", ...new Set(data.map((item) => item.category))]);
      } catch (error) {
        console.error("error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filterItem = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilterItems(filtered);
    setSelectedCategory(category);
    setCurrenPage(1);
  };

  const handleSortChange = (option, products) => {
    setSortOption(option);
    let sortedItems = [...products];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilterItems(sortedItems);
    setCurrenPage(1);
  };
  
  const indexOfLastItem = itemPerPage * currentPage;
  
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  const currentItems = filterItems.slice(indexOfFirstItem, indexOfLastItem);
  
  const paginate = (pageNumber) => setCurrenPage(pageNumber);
  return (
    <div>
      {/* Product list Banner */}
      <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%">
        <div className="py-48 flex flex-col justify-center items-center">
          <div className="text-center space-y-7 px-4">
            <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug">
              Unleash Your Inner
              <span className="text-red-700">Geek</span>: <br />
              shop our Exclusive Tech-themed Merchandise!
            </h2>
            <p className="text-xl text-[#4a4a4a]">
              Our mission: To merge fashion with functionality in the world of
              Software Engineering
            </p>
            <button className="btn bg-red-700 px-8 py-3 font-semibold text-white rounded-full ">
              Order Now
            </button>
          </div>
        </div>
      </div>
      {/* Product list Card */}
      <div className="section-container">
        {/* filter */}
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                onClick={() => filterItem(category)}
                className={`${
                  selectedCategory === category ? "active" : ""
                } px-4 py-2 rounded-full`}
              >
                <p className="capitalize">{category}</p>
              </button>
            );
          })}
        </div>
        {/* sort Option */}
        <div className="flex justify-end mb-4 rounded-sm">
          <div className="bg-black p-2">
            <select
              id="sort"
              className="bg-black text-white px-2 rounded-sm"
              onChange={(e) => handleSortChange(e.target.value, filterItems)}
              value={sortOptions}
            >
              <option value={"A-Z"}>A-Z</option>
              <option value={"Z-A"}>Z-A</option>
              <option value={"low-to-high"}>Low to High</option>
              <option value={"high-to-low"}>High to Low</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-warp md:justify-between items-center space-y-3 mb-8">
          {/* Product card */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {currentItems.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
        {/* paginate */}
        <div className=" flex  justify-center my-8 flex-wrap ">
          {Array.from({
            length: Math.ceil(filterItems.length / itemPerPage),
          }).map((_, index) => {
            return (
              <button
                key={index}
                className={`my-1 px-3 py-1 rounded-full${
                  currentPage === index + 1
                    ? "bg-red-700 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  paginate(index + 1);
                }}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
    </div>
  );
};

export default ProductList;
