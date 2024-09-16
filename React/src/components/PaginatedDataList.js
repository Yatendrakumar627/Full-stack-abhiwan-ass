import React, { useState, useEffect, useCallback } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const PaginatedDataList = ({ apiUrl }) => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page
  const [totalItems, setTotalItems] = useState(0);
  
  // Function to fetch data from the API
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError('');
    
    try {
      const res = await axios.get(apiUrl);
      setData(res.data);
      setTotalItems(res.data.length); // Set total items based on the full dataset length
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  }, [apiUrl]);

  // Effect to fetch data on component 
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // handle pagination and slicing of data
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayData(data.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to the first page when items per page changes
  };

  return (
    <div className="data-list">
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="controls">
            <label htmlFor="itemsPerPage">Items per page: </label>
            <select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <ul>
            {displayData.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong>: {item.body}
              </li>
            ))}
          </ul>
          <Pagination
            totalPages={Math.ceil(totalItems / itemsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default PaginatedDataList;
