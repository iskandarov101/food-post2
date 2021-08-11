import { useState } from "react";
import { Route } from "react-router-dom";
import { Preferences } from "../../assets/icon/BaseIcons";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";

import { SettingsRoutes } from "../../routes/Route";
import HotDishes from "../DishContainers/HotDishes";
import Grills from "../DishContainers/Grills";
import ColdDishes from "../DishContainers/ColdDishes";
import Desserts from "../DishContainers/Desserts";
import Appetizer from "../DishContainers/Appetizer";
import Soup from "../DishContainers/Soup";

const SettingsProduct = () => {
  const [btn, setBtn] = useState("");
  

  return (
    <div className="products-wrapper">
      <div className="setting-product-heading">
        <h2 className="products-heading">Products Management</h2>
        <ButtonWithIcon
          setActiveClass={setBtn}
          activeClass={btn}
          btnClass="preferences-btn"
          text="Manage Categories"
          icon={<Preferences />}
        />
      </div>
      <div className="product-nav">
        {SettingsRoutes.map((link, index) => (
          <ButtonWithIcon
            activeClass={btn}
            setActiveClass={setBtn}
            path={`/settings/managment${link.path}`}
            text={link.title}
            key={index}
          />
        ))}
      </div>
      <div className="content">
        <Route path="/settings/managment/hotdishes" component={HotDishes} />
        <Route path="/settings/managment/colddishes" component={ColdDishes} />
        <Route path="/settings/managment/grill" component={Grills} />
        <Route path="/settings/managment/dessert" component={Desserts} />
        <Route path="/settings/managment/appetizer" component={Appetizer} />
        <Route path="/settings/managment/soup" component={Soup} />
      </div>
      <div className="product-footer">
        <ButtonWithIcon
          setActiveClass={setBtn}
          activeClass={btn}
          text="Discard Changes"
          btnClass="primary"
        />
        <ButtonWithIcon
          setActiveClass={setBtn}
          activeClass={btn}
          text="Save Changes"
          btnClass="primary save"
        />
      </div>
    </div>
  );
};

export default SettingsProduct;
