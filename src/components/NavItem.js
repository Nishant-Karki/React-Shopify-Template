import { Container} from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom'
import './navItem.css'



function NavItem({items,src}) {
  return(
//    <div className="fluid-container">
//        <div className="fluid-row">

// <div className="col-md-11 offset-xl-1">
<Container maxwidth="md">


  <ul className="nav">
      <img src={src} alt='Logo' width="100"height="20"></img>
      {items.map((item,index)=>
      <li className="nav-item" key={index}><Link className="nav-link"to="/">{item}</Link></li>)}
        <li><BsSearch/></li>
        <li><HiOutlineShoppingBag/></li>
        <li><AiOutlineUser/></li>
        <li><BiSlider/></li>
  </ul>

  <ul className="nav">
  </ul>
      </Container>
//       </div>
//       </div>
// </div>
 
  )
}


export default NavItem;
