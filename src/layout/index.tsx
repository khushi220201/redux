import { Outlet } from "react-router-dom";
import Navbar from "./header";

const MainLayout = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
