import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
function App() {
  <Sidebar>
    <Menu >
      <MenuItem >Dashboard</MenuItem>
      <SubMenu title="Components">
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
      </SubMenu>
    </Menu>
  </Sidebar>;
}

export default App;
