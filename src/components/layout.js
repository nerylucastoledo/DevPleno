import React from "react"
import SideBar from "./sidebar";
import Footer from "./footer";

export default ({ children }) => {
  return (
    <div class = 'text-secondary'>
    <div class = 'container my-5'>
      <div class = 'row'>
        <div class = 'col-xl-8 col-12 img-fluid'>
            {children}
        </div>
        <div class = 'col-xl-3 col-12'>
          <SideBar/>
        </div>
      </div>
    </div>
    <div class = 'pt-5'>
      <Footer/>
    </div>
  </div>
  )
}