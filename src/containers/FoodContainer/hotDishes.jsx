import { container, Varitem } from '../DishContainers/variants';
import { motion } from 'framer-motion';

import food2 from '../../assets/images/image2.png';
import food1 from '../../assets/images/image1.png';
import food3 from '../../assets/images/image3.png';
import food4 from '../../assets/images/image4.png';
import food5 from '../../assets/images/image5.png';
import food6 from '../../assets/images/image6.png';
import food7 from '../../assets/images/Food7.jfif';
import food8 from '../../assets/images/Food8.jfif';
import food9 from '../../assets/images/Food9.jpg';

import FoodCard from '../../components/FoodCard/foodCard';
import Dropdown from '../../components/Dropdown/Dropdown';

import './food-container.scss';

const HotDishes = (props) => {
  
  const {onAdd} = props
  const hotDishes = [

    {
        id:1,
        foodImg: food1,
        foodName: "Spicy seasoned seafood noodles",
        foodPrice: 2.29,
        isAvailable: "20 Bowls available",
    },

    {
        id:2,
        foodImg: food2,
        foodName: "Salted Pasta with mushroom sauce",
        foodPrice: 2.69,
        isAvailable: "11 Bowls available",
    },

    {
        id:3,
        foodImg: food3,
        foodName: "Beef dumpling in hot and sour soup",
        foodPrice: 2.99,
        isAvailable: "16 Bowls available",
    },

    {
        id:4,
        foodImg: food4,
        foodName: "Healthy noodle with spinach leaf",
        foodPrice: 3.29,
        isAvailable: "22 Bowls available",
    },
    {
        id:5,
        foodImg: food5,
        foodName: "Hot spicy fried rice with omelet",
        foodPrice: 3.49,
        isAvailable: "13 Bowls available",
    },
    {
        id:6,
        foodImg: food6,
        foodName: "Spicy instant noodle with special omelette",
        foodPrice: 3.59,
        isAvailable: "17 Bowls available",
    },
    {
        id:7,
        foodImg: food7,
        foodName: "Parmesan Spinach Mushroom Pasta Skillet",
        foodPrice: 4.25,
        isAvailable: "20 Bowls available",
    },
    {
        id:8,
        foodImg:food8,
        foodName: "Garlic Mushrooms",
        foodPrice: 5.60,
        isAvailable: "12 Bowls available",
    },
    {
        id:9,
        foodImg: food9,
        foodName: "Baked Honey Cilantro Lime Salmon",
        foodPrice: 10.30,
        isAvailable: "5 Bowls available",
    }

]
  return(
    <div className="dishes-holder">
      <div className="row first">
        <div className="left-holder">
          <h1 className="choose">Choose Dishes</h1>
        </div>
        <Dropdown title='Dive in' />
      </div>

      <motion.div variants={container} initial="hidden" animate="visible" className='row-wrap'>
        {
          hotDishes.map(item=> (
            <FoodCard variants={Varitem} key={item.id} foods={item} onAdd={onAdd} />
          ))
        }
      </motion.div>
    </div>
  )
}

export default HotDishes;