// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setSearchTerm } from "./Actions";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    // Fetch data from the provided URL when the component mounts
    async function fetchData() {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        dispatch(setData(jsonData.Reggae));
      } catch (error) {
        console.error("There was a problem with the fetch operation", error);
      }
    }

    fetchData();
  }, [dispatch]);

  // Function to handle input change
  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  // Filter the data based on the search term
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Real Time</h1>
      <div>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <ul className="data-list">
          {filteredData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
