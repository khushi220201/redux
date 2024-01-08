// layout/Navbar.jsx
import React from "react";
import { Layout, Space } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar: React.FC = () => (
  <Header
    style={{
      textAlign: "center",
      color: "#fff",
      position: "sticky",
      top: "0",
      width: "100%",
      height: "10vh",
      backgroundColor: "#4096ff",
    }}
  >
    <Space size={20}>
      <Link to="/add-post" style={{ color: "white" }}>
        Add products
      </Link>
      <Link to="/view-products" style={{ color: "white" }}>
        View products
      </Link>
    </Space>
  </Header>
);

export default Navbar;
