import { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:3000/items";
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        console.log(listItems);

        setItems(listItems);
      } catch (err) {
        console.log(err.stack);
      } finally {
      }
    };

    (async () => await fetchItems())();
  }, []);

  const addItem = item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const getNewItem = { id, checked: false, item };
    const listItems = [...items, getNewItem];
    setItems(listItems);
  };

  const handleCheckInput = id => {
    //   const names = ["Kevin", "Neeraj", "Balraj", "Vikas", "Nihal"];
    //   const idx = Math.floor(Math.random() * 5);

    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;
    // console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      <Header title="Lists" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter(item =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheckInput={handleCheckInput}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
