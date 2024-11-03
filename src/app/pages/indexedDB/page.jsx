// src/app/components/DataForm.jsx

"use client";

import { useEffect, useState } from "react";
import db from "../../components/db"; // Import your Dexie database

const DataForm = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await db.myStore.toArray(); // Fetch all items
      setItems(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      // Update existing item
      await db.myStore.update(editId, { value: inputValue });
    } else {
      // Add new item
      await db.myStore.add({ value: inputValue });
    }
    setInputValue("");
    setEditId(null);
    const data = await db.myStore.toArray(); // Refresh items
    setItems(data);
  };

  const handleEdit = (item) => {
    setInputValue(item.value);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await db.myStore.delete(id);
    const data = await db.myStore.toArray(); // Refresh items
    setItems(data);
  };

  return (
    <div className="data-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataForm;
