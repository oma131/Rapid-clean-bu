import React, { useState, useEffect } from 'react';
// import { products } from '../../utils/products'; // Importing product data
import Dresses from '../../assets/categories/Dresses.png'
import { CiSearch } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight, } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Axios from 'axios'; // Import Axios library

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState({});
  const [quantity, setQuantity] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');
  const [searchItem, setSearchItem] = useState('');

  const maxPageNumbersToShow = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get('https://rapidclean-laundry.onrender.com/api/product/setPriceList'); // Replace '/api/products' with your actual API endpoint
        setProducts(response.data); // Assuming the response contains an array of products
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    let filteredProducts = products;

    if (selectedCategory !== 'Select Category') {
      filteredProducts = products.filter(product => product.category === selectedCategory);
    }

    if (searchItem.trim() !== '') {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchItem.toLowerCase())
      );
    }

    const slicedProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    setPaginatedProducts(slicedProducts);
  }, [currentPage, productsPerPage, selectedCategory, searchItem, products]);

  useEffect(() => {
    const initialQuantities = {};
    products.forEach(product => {
      initialQuantities[product.id] = 1;
    });
    setQuantity(initialQuantities);
  }, [products]);

  // const handlePriceChange = (productId, price) => {
  //   setSelectedPrice({ ...selectedPrice, [productId]: price });
  // };

  const handlePriceChange = (productId, priceOption) => {
    setSelectedPrice({ ...selectedPrice, [productId]: priceOption });
  };

  const handleIncrement = (productId) => {
    setQuantity({ ...quantity, [productId]: (quantity[productId] || 0) + 1 });
  };

  const handleDecrement = (productId) => {
    if (quantity[productId] > 1) {
      setQuantity({ ...quantity, [productId]: quantity[productId] - 1 });
    }
  };

  const calculateTotal = (productId) => {
    const priceOption = selectedPrice[productId] || {};
    const price = priceOption.price || 0;
    const quantity = quantity[productId] || 1;
    return price * quantity;
  };

  

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    setCurrentPage(1);
  }

  const pageNumbers = [];
  const filteredProductsCount = selectedCategory === 'Select Category' ? products.length : products.filter(product => product.category === selectedCategory).length;
  for (let i = 1; i <= Math.ceil(filteredProductsCount / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const totalPages = Math.ceil(filteredProductsCount / productsPerPage);
  
  let pageRangeStart = Math.max(1, currentPage - 2); // Start of the page range
  let pageRangeEnd = Math.min(totalPages, pageRangeStart + maxPageNumbersToShow - 1); // End of the page range

  if (currentPage > 3) {
    // When currentPage is greater than 3, adjust the page range to show the next three pages
    pageRangeStart = currentPage - 2;
    pageRangeEnd = Math.min(totalPages, currentPage + 2);
  }

  const handleSubmit = async () => {
    try {
      // Filter selected products
      const selectedProducts = products.filter(product => selectedPrice.hasOwnProperty(product.id));
      // Send selectedProducts to the backend
      await Axios.post('/api/selected-items', selectedProducts); // Replace '/api/selected-items' with your actual API endpoint for sending selected items
      // Redirect to ItemsReview page after successful submission
      navigate('/items-review');
    } catch (error) {
      console.error('Error sending selected items:', error);
      // Handle error here
    }
  };


  return (
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <h1 className="text-xl md:text-2xl font-bold">
          {selectedCategory === 'Select Category' ? 'Select Items' : `${selectedCategory}`}
        </h1>
        <div className='flex items-center gap-4'>
          <div className="my-4 flex items-center">
            <label htmlFor="category" className="hidden md:block mr-2 text-xs md:text-base">Filter by category</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="px-2 md:px-7  py-1 text-xs md:text-base bg-faded text-white font-semibold border border-faded rounded"
            >
              <option value="Select Category">All</option>
              <option value="Tops">Tops</option>
              <option value="Bottoms">Bottoms</option>
              <option value="Dresses">Dresses</option>
              <option value="Underwear">Underwear</option>
            </select>
          </div>
          <div className="relative mr-4">
            <CiSearch className="text-darkgrey pointer-events-none w-5 h-5  absolute top-1/2 transform -translate-y-1/2 left-3" />
            <input
              type="text"
              id="search"
              value={searchItem}
              onChange={handleSearch}
              placeholder="Search..."
              className="px-3 py-1 pl-9 h-7 w-32 md:w-full border border-darkgrey rounded"
            />
          </div>
        </div>
      </div>
  
      <div className='bg-white rounded-lg shadow-xl '>
        {paginatedProducts.map((product, index) => (
          <div key={product.id} className={`flex justify-between  items-center my-4 p-4 border-darkgrey ${index !== paginatedProducts.length - 1 ? 'border-b' : ''}`}>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
              <div className="flex items-center">
                <img src={Dresses} alt="Product Icon" className="w-4 md:w-8 h-4 md:h-8 mr-2" />
                <span className="font-bold text-xs md:text-lg">{product.name}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4">
                {product.prices.map((priceOption, index) => (
                  <div key={index} className="flex items-center my-2">
                    <div className="flex items-center mr-1 md:mr-4 ">
                      <input
                        type="radio"
                        id={`${product.id}-${index}`}
                        name={`price-${product.id}`}
                        value={priceOption.price}
                        onChange={() => handlePriceChange(product.id, priceOption)}
                        className="mr-2"
                      />
                      <label htmlFor={`${product.id}-${index}`} className="mr-2 text-xs md:text-base">{priceOption.type}: &#8358;{priceOption.price}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex lg:flex-row flex-col gap-4 justify-between items-center'>
              <div className="flex items-center border border-grey rounded-lg">
                <button onClick={() => handleDecrement(product.id)} className="bg-green text-white px-3  rounded-l-lg">-</button>
                <span className="mx-2">{quantity[product.id] || 1}</span>
                <button onClick={() => handleIncrement(product.id)} className="bg-purple text-white px-3  rounded-r-lg">+</button>
              </div>
              <div className="text-center "> &#8358;{calculateTotal(product.id)}</div>
            </div>
          </div>
        ))}
      </div>
      <ul className="flex items-center justify-center gap-2 mt-4">
        <li className="mx-1">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            <FaAngleLeft  className='text-midnight flex mt-2'/>
          </button>
        </li>
        <div className='flex '>
          {pageRangeStart > 1 && (
            <li className="mx-1 text-midight">...</li>
          )}
          {pageNumbers.slice(pageRangeStart - 1, pageRangeEnd).map(number => (
            <li key={number} className="mx-1">
              <button onClick={() => paginate(number)} className={`px-3 py-1 rounded ${
                currentPage === number ? 'bg-midnight text-white' : 'bg-grey text-midnight'
                }`}>{number}</button>
            </li>
          ))}
          {pageRangeEnd < totalPages && (
            <li className="mx-1 text-midnight">...</li>
          )}
        </div>
        <li className="mx-1">
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
            <FaAngleRight className='text-midnight mt-2'/>
          </button>
        </li>
        
      </ul>
      <div className="mx-1 bg-midnight text-white">
        <button onClick={() => {
          handleSubmit();
        }}>
          Next
        </button>
      </div>

    </div>
  );
};

export default Services;
