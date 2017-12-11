import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
  <div className="container justify-content-between">
    <div className="row justify-content-between">
      <Link to='/'>
        <button type="button" className="btn btn-outline-dark btn-lg"><i className="fa fa-search"></i> NYT Article Search</button>
      </Link>
      <Link to='/saved'>
        <button type="button" className="btn btn-outline-dark btn-lg"><i className="fa fa-bookmark"></i> Saved Articles</button>
      </Link>
    </div>
  </div>;

export default Nav;
