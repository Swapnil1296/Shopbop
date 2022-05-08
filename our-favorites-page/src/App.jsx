import {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import {OurFavorite} from "./component/OurFavorite";
import {WhatsNew} from "./component/WhatsNew";
import {Navbar} from "./component/Navbar";
import {Routes, Route} from "react-router-dom";
import {Home} from "./component/Home";
import {Userdetail} from "./component/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <OurFavorite></OurFavorite>
      <WhatsNew></WhatsNew> */}
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"//what'snew"} element={<WhatsNew></WhatsNew>}></Route>
        <Route
          path={"/ourfavorite"}
          element={<OurFavorite></OurFavorite>}
        ></Route>
        <Route
          path={"/product/:id"}
          element={<Userdetail></Userdetail>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
