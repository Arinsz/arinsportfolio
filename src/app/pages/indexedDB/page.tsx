"use client";

import { useEffect, useState } from "react";
import db, { MyStoreItem } from "../../components/db"; // Import Dexie database and types

const DataForm = () => {
  const [items, setItems] = useState<MyStoreItem[]>([]); // Use TypeScript types
  const [inputValue, setInputValue] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await db.myStore.toArray(); // Fetch all items from the store
      setItems(data);
    };
    fetchData();
  }, []);

  // Handle form submission (create or update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        // Update existing item
        await db.myStore.update(editId, { value: inputValue });
      } else {
        // Add new item
        await db.myStore.add({ value: inputValue });
      }
      setInputValue(""); // Clear input field
      setEditId(null); // Reset edit ID
      const data = await db.myStore.toArray(); // Refresh items
      setItems(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle editing an item
  const handleEdit = (item: MyStoreItem) => {
    setInputValue(item.value);
    setEditId(item.id || null); // Use `null` if no id is available
  };

  // Handle deleting an item
  const handleDelete = async (id: number) => {
    await db.myStore.delete(id);
    const data = await db.myStore.toArray(); // Refresh items
    setItems(data);
  };

  return (
    <div className="data-form-container">
      <h1 className="title">CRUD Operations with IndexedDB</h1>
      <form className="indexdb-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
          placeholder="Enter a value"
        />
        <button className="submit-button" type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>
      <h2 className="items-title">Items</h2>
      <ul className="items-list">
        {items.map((item) => (
          <li key={item.id} className="item">
            {item.value}
            <div className="button-group">
              <button className="edit-button" onClick={() => handleEdit(item)}>
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id!)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {items.length === 0 && (
        <p className="no-items-message">No items available.</p>
      )}{" "}
      {/* Show message if no items */}
    </div>
  );
};

export default DataForm;
