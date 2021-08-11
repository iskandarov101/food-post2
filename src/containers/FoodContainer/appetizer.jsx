import FoodCard from '../../components/FoodCard/foodCard';
import Dropdown from '../../components/Dropdown/Dropdown';

import { container, Varitem } from "../DishContainers/variants";
import { motion } from "framer-motion";

import './food-container.scss';

import Appetizer1 from '../../assets/images/Appetizer1.jpg';
import Appetizer2 from '../../assets/images/Appetizer2.jpg';
import Appetizer3 from '../../assets/images/Appetizer3.jpg';
import Appetizer4 from '../../assets/images/Appetizer4.jpg';
import Appetizer5 from '../../assets/images/Appetizer5.jpg';
import Appetizer6 from '../../assets/images/Appetizer6.jpg';
import Appetizer7 from '../../assets/images/Appetizer7.jpg';
import Appetizer8 from '../../assets/images/Appetizer8.jpg';
import Appetizer9 from '../../assets/images/Appetizer9.jpg';

const Appetizer = (props) => {
    const {onAdd} = props

    const appetizer = [
        {
        id: 37,
        foodImg: Appetizer1,
        foodName: "The Only Salsa You Need",
        foodPrice: 5.00,
        isAvailable: "14 Bowls available",
    },
    {
        id: 38,
        foodImg: Appetizer2,
        foodName: "Curried Peanut Dip",
        foodPrice: 3.00,
        isAvailable: "2 Bowls available",
    },
    {
        id: 39,
        foodImg: Appetizer3,
        foodName: "Giardiniera Antipasto Platter",
        foodPrice: 3.47,
        isAvailable: "4 Bowls available",
    },
    {
        id: 40,
        foodImg: Appetizer4,
        foodName: "Mala Fried Peanuts",
        foodPrice: 3.20,
        isAvailable: "37 Bowls available",
    },
    {
        id: 41,
        foodImg: Appetizer5,
        foodName: "Relish Tray with D.I.Y. Eggs",
        foodPrice: 2.15,
        isAvailable: "26 Bowls available",
    },
    {
        id: 42,
        foodImg: Appetizer6,
        foodName: "Crispy Cheese Twists",
        foodPrice: 3.78,
        isAvailable: "14 Bowls available",
    },
    {
        id: 43,
        foodImg:Appetizer7,
        foodName: "Spinach and Feta Tarte Soleil",
        foodPrice: 7.94,
        isAvailable: "16 Bowls available",
    },
    {
        id: 44,
        foodImg: Appetizer8,
        foodName: "Ham and Cheese Feuilleté",
        foodPrice: 4.41,
        isAvailable: "7 Bowls available",
    },
    {
        id: 45,
        foodImg: Appetizer9,
        foodName: "Cashew Nam Prik",
        foodPrice: 1.98,
        isAvailable: "42 Bowls available",
    }
];
    return (
        <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="dishes-holder"
    >
      <div className='dishes-holder'>
        <div className='row first'>
          <div className='left-holder'>
            <h1 className='choose'>Choose Appetizer</h1>
        </div>
        <Dropdown title="Dive in"/>
        </div>
 
        <div className='row-wrap'>
        {
          appetizer.map(item => (
          <FoodCard
            key={item.id}
            foods={item}
            onAdd={onAdd}
          />
          ))
          
          }
        </div>
      </div>
      </motion.div>
    );
};

export default Appetizer;