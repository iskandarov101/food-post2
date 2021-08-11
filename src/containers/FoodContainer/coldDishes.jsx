import { container, Varitem } from "../DishContainers/variants";
import { motion } from "framer-motion";

import cold1 from '../../assets/images/Cold1.jfif';
import cold2 from '../../assets/images/Cold2.png';
import cold3 from '../../assets/images/Cold3.jfif';
import cold4 from '../../assets/images/Cold4.jfif';
import cold5 from '../../assets/images/Cold5.jfif';
import cold6 from '../../assets/images/Cold6.jfif';
import cold7 from '../../assets/images/Cold7.1.jfif';
import cold8 from '../../assets/images/Cold8.jfif';
import cold9 from '../../assets/images/Cold9.jfif';

import FoodCard from '../../components/FoodCard/foodCard';
import Dropdown from '../../components/Dropdown/Dropdown';

import './food-container.scss';

const ColdDishes = (props)=> {

  const {onAdd} = props
  const coldDishes = [

    {
        id:10,
        foodImg: cold1,
        foodName: "Bowtie Chicken Caesar Salad - The Girl Who Ate Everything",
        foodPrice: 5.90,
        isAvailable: "10 Bowls available",
    },
    {
        id:11,
        foodImg: cold2,
        foodName: "Veggie burrito bowls with grilled mango",
        foodPrice: 5.10,
        isAvailable: "15 Bowls available",
    },
    {
        id:12,
        foodImg: cold3,
        foodName: "Skinny Chicken Salad",
        foodPrice: 2.95,
        isAvailable: "5 Bowls available",
    },
    {
        id:13,
        foodImg: cold4,
        foodName: "Whole Wheat Pita with Kale and Asiago",
        foodPrice: 5.29,
        isAvailable: "14 Bowls available",
    },
    {
        id:14,
        foodImg: cold5,
        foodName: "Crab Salad",
        foodPrice: 11.15,
        isAvailable: "16 Bowls available",
    },
    {
        id:15,
        foodImg:cold6,
        foodName: "Greek Chicken Roll Salad",
        foodPrice: 4.20,
        isAvailable: "50 Bowls available",
    },
    {
        id:16,
        foodImg: cold7,
        foodName: "Watermelon and Feta Salad",
        foodPrice: 4.14,
        isAvailable: "27 Bowls available",
    },
    {
        id:17,
        foodImg:cold8,
        foodName: "Caesar Gazpacho",
        foodPrice: 13.29,
        isAvailable: "12 Bowls available",
    },
    {
        id:18,
        foodImg: cold9,
        foodName: "Apple and Blue Cheese on Endive",
        foodPrice: 14.18,
        isAvailable: "17 Bowls available",
    },
];

  return(
    <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="dishes-holder"
    >
      <div className="row first">
        <div className="left-holder">
          <h1 className="choose">Choose Dishes</h1>
        </div>
        <Dropdown title="Dive in" />
      </div>

      <div className="row-wrap">
        {
          coldDishes.map(item=> (
            <FoodCard variants={Varitem}
              key={item.id} foods={item} onAdd={onAdd}
            />
          ))
        }
      </div>
    </motion.div>
  )
}

export default ColdDishes;