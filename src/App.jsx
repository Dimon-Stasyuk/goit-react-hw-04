import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { getPhotos } from "./search-api";

function App() {
  const [items, setItems] = useState([]);

  const getItems = async (query) => {
    try {
      const data = await getPhotos(query);
      setItems(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={getItems} />
    </div>
  );
}

export default App;
