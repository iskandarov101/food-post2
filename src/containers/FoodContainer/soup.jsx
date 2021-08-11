import FoodCard from '../../components/FoodCard/foodCard';
import Dropdown from '../../components/Dropdown/Dropdown';

import Soup1 from '../../assets/images/Soup1.jfif'
import Soup2 from '../../assets/images/Soup2.jfif'
import Soup3 from '../../assets/images/Soup3.png'
import Soup4 from '../../assets/images/Soup4.jfif'
import Soup5 from '../../assets/images/Soup5.jfif'
import Soup6 from '../../assets/images/Soup6.jfif'
import Soup7 from '../../assets/images/Soup7.jfif'
import Soup8 from '../../assets/images/Soup8.jfif'
import Soup9 from '../../assets/images/Soup9.jfif'

import './food-container.scss';

import { container, Varitem } from "../DishContainers/variants";
import { motion } from "framer-motion";

const Soup = (props)=> {
 
  const {onAdd} = props
  const soup = [{
      id:19,
      foodImg: Soup1,
      foodName: "Cheesy Potato Soup",
      foodPrice: 4.21,
      isAvailable: "14 Bowls available",
  },
  {
      id:20,
      foodImg: Soup2,
      foodName: "Slow Cooker Chicken and Potato Soup",
      foodPrice: 4.23,
      isAvailable: "27 Bowls available",
  },
  {
      id:21,
      foodImg: Soup3,
      foodName: "Onion, Kale, Chickpea, and Chicken Soup",
      foodPrice: 7.14,
      isAvailable: "7 Bowls available",
  },
  {
      id:22,
      foodImg:Soup4,
      foodName: "Soulful Chicken Soup",
      foodPrice: 6.13,
      isAvailable: "11 Bowls available",
  },
  {
      id:23,
      foodImg:Soup5,
      foodName: "Chicken and Cornbread Dumplings",
      foodPrice: 9.49,
      isAvailable: "7 Bowls available",
  },
  {
      id:24,
      foodImg: Soup6,
      foodName: "Slow Cooker Chicken Chili",
      foodPrice: 2.14,
      isAvailable: "17 Bowls available",
  },
  {
      id:25,
      foodImg: Soup7,
      foodName: "Creamy Leek and Parsnip Soup",
      foodPrice: 3.78,
      isAvailable: "13 Bowls available",
  },
  {
      id:26,
      foodImg: Soup8,
      foodName: "Smoky Ham and Split Pea Soup",
      foodPrice: 5.45,
      isAvailable: "6 Bowls available",
  },
  {
      id:27,
      foodImg: Soup9,
      foodName: "Black Garlic and Lentil Soup",
      foodPrice: 6.47,
      isAvailable: "19 Bowls available",
  },

];
  return(
    <motion.div variants={container} initial="hidden" animate="visible" className='row-wrap'>
    <div className='dishes-holder'>
      <div className='row first'>
        <div className='left-holder'>
            <h1 className='choose'>Choose Soup</h1>
        </div>
        <Dropdown title="Dive in"/>
      </div>

      <div className='row-wrap'>
      {
        soup.map(item => (
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
  )
}

export default Soup;