import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from 'react';
import './App.css'

const App = () => {
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(false);
  const [price, setPrice] = useState("");

  const [record, setRecord] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId === null) {
      const newProduct = {
        id: record.length + 1,
        productName,
        sku,
        category,
        price,
        inStock,
      }
    } else {
      const updated = record.map(item => {
        if (item.id === editId) {
          return {
            ...item,
            productName,
            sku,
            category,
            price,
            inStock
          };
        }
        return item;
      });

      setRecord(updated);
      setEditId(null);
    }
    setRecord([...record, newProduct]);

    setProductName("");
    setSku("");
    setCategory("");
    setInStock(false);
    setPrice("");
  };

  const handleDelete = (id) => {
    const updated = record.filter((val) => val.id !== id);
    setRecord(updated);
  };

  const handleEdit = (id) => {
    const item = record.find(item => item.id == id);
    if (item) {
      setProductName(item.productName);
      setSku(item.sku);
      setCategory(item.category);
      setInStock(item.inStock);
      setPrice(item.price);
      setEditId(item.id);
    }
  };

  return (
    <div align="center">
      <header className="app-header">
        <div className="logo">Retail Manager</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Inventory</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="banner">
        <h1>Welcome to Your Retail Inventory Management Dashboard</h1>
        <p>Manage your products efficiently and effortlessly.</p>
      </section>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <select className="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          <option value="" className="dropdown">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Apparel">Apparel</option>
          <option value="Groceries">Groceries</option>
          <option value="Home">Home</option>
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0"
          step="1"
          style={{ marginRight: "10px" }}
        />

        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            name="inStock"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />
          In Stock
        </label>

        <button type="submit">Add</button>
      </form>

      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>SKU</th>
            <th>Category</th>
            <th>In Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((item) => (
              <tr key={item.id}>
                <td>{item.productName}</td>
                <td>{item.sku}</td>
                <td>{item.category}</td>
                <td>{item.inStock ? "Yes" : "No"}</td>
                <td>${item.price}</td>
                <td>
                  <button className="edit" onClick={() => handleEdit(item.id)}>Edit</button>{" "}
                  <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>Retail Manager</h2>
            <p>Manage your products efficiently and effortlessly.</p>
            <p>Real-Time Inventory Tracking.</p>
            <p>Enhanced Customer Satisfaction.</p>
            <p>Scalable for Business Growth.</p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Inventory</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section links">
            <h3>Companies</h3>
            <ul>
              <li><a href="#">Inventora</a></li>
              <li><a href="#">MerchCount</a></li>
              <li><a href="#">RetailerIQ</a></li>
              <li><a href="#">RetailEdge</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: support@retailmanager.com</p>
            <p>Phone: +1 (800) 123-4567</p>
            <div className="icons">
              <span><RiFacebookLine /></span>
              <span><FaXTwitter /></span>
              <span><FaDribbble /></span>
              <span><FaInstagram /></span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Retail Manager | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default App;
