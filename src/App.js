import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  };
  return (
    <div className="App">
      <SearchBar callback={updateData}/>
      <p>Name: {"name" in data ? data["name"] : "No Data to display"}</p>
      <p>Max Price: {"price" in data ? data["price"] : "No Data to display"}</p>
      <p>Type: {"type" in data ? data["type"] : "No Data to display"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No Data to display"}</p>
    </div>
  );
}

export default App;
