import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Routes, Route, Link } from "react-router-dom";
import './SideBar.scss';
import { ConversationsIcon, CustomersIcon, DashboardIcon, InventoryIcon, OrderBag, SettingsIcon } from "../../assets/icon";
import Home from "../DashboardPage/Home";


const Dashboard = () => {
  return (
    <Home/>
  );
};

const Orders = () => {
  return (
    <>
      <h1 className="header"> DASHBOARD PAGE</h1>
      <h3>Welcome User</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};

const Customers = () => {
  return (
    <>
      <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3>Seamless Transactions</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};

const Inventory = () => {
  return (
    <>
      <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3>Seamless Transactions</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};

const Conversation = () => {
  return (
    <>
      <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3>Seamless Transactions</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};

const Setting = () => {
  return (
    <>
      <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3>Seamless Transactions</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};



export default function SideBar() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar className="app">
        <Menu className="menu-sidebar">
          <MenuItem
            className= "header-menu"
            component={<Link to="transactions" className="link" />}
            icon={<img className="lefttabs-content-tabs-header-image" src="https://tse3.mm.bing.net/th?id=OIP.pzhd3kmyFvVmNxx10cY_fQHaHa&pid=Api&P=0&h=220" alt="metrics logo" />}
          >
            <h2>Metrix</h2>
          </MenuItem>
          <MenuItem
            className="header-menu-first"
            component={<Link to="dashboard" className="link" />}
            icon={<DashboardIcon className="icon" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem 
            className="menu1"
            component={<Link to="orders" className="link" />}
            icon={<OrderBag />}> 
            Orders 
          </MenuItem>
          <MenuItem
            className="menu1"
            component={<Link to="customers" className="link" />}
            icon={<CustomersIcon className="icon" />}
          >
            Customers
          </MenuItem>
          <MenuItem
            className="menu1"
            component={<Link to="inventory" className="link" />}
            icon={<InventoryIcon className="icon" />}
          >
            Inventory
          </MenuItem>
          <MenuItem
            className="menu1"
            component={<Link to="conversations" className="link" />}
            icon={<ConversationsIcon className="icon" />}
          >
            Conversations
          </MenuItem>
          <MenuItem 
            className="menu1"
            component={<Link to="settings" className="link" />}
            icon={<SettingsIcon className="icon" />}> 
            Settings 
        </MenuItem>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="conversations" element={<Conversation />} />
          <Route path="settings" element={<Setting />} />
        </Routes>
      </section>
    </div>
    )
}



