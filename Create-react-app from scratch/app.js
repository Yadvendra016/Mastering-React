/**
 * HMR-> Hot module Replacement
 * File Watcher Algorithm -> cpp
 * when we do npx parcel index.html -> it just create faster
 * development version of our project and serve it in the server
 * catching
 */

import React from "react";
import ReactDom from "react-dom/client";

//jsx -> React.createElement
const element1 = (
  <>
    <h1 classNa>Hello World</h1>
  </>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(element1);
