import React from "react";
import Layout from "../components/Layout";
import classes from "../styles/Host.module.css";

const Host = () => {
  return (
    <Layout>
      <div className={classes.outer_host}>
        <div className={classes.inner_host}>
          <span>HOST </span>
          <span> Category</span>
          <select name="category" id="host-category-dropdown">
            <option value="host-sport">Sport</option>
            <option value="host-family">Family</option>
            <option value="host-culture">Culture</option>
            <option value="host-food-drink">Food/Drink</option>
          </select>
          <hr></hr>
          Event<select></select>
          <br></br>
          Time/Date<select></select>
          <br></br>
          Location<select></select>
          <br></br>
          Price/Deposit<select></select>
        </div>
      </div>
    </Layout>
  );
};

export default Host;
