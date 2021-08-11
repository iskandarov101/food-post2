import { container, Varitem } from "../DishContainers/variants";
import { motion } from "framer-motion";

import './food-container.scss';

import Dessert1 from '../../assets/images/Dessert1.jfif';
import Dessert2 from '../../assets/images/Dessert2.jfif';
import Dessert3 from '../../assets/images/Dessert3.jfif';
import Dessert4 from '../../assets/images/Dessert4.jfif';
import Dessert5 from '../../assets/images/Dessert5.jfif';
import Dessert6 from '../../assets/images/Dessert6.jfif';
import Dessert7 from '../../assets/images/Dessert7.jfif';
import Dessert8 from '../../assets/images/Dessert8.jfif';
import Dessert9 from '../../assets/images/Dessert9.jfif';

import FoodCard from '../../components/FoodCard/foodCard';
import Dropdown from '../../components/Dropdown/Dropdown'

const Dessert = (props) => {

    const {onAdd} = props

    const dessert = [
    {
        id: 46,
        foodImg:  Dessert1,
        foodName: "Mixed berry mousse",
        foodPrice: 7.90,
        isAvailable: "7 Bowls available",
    },
    {
        id: 47,
        foodImg:  Dessert2,
        foodName: "Mango and coconut soufflé",
        foodPrice: 3.45,
        isAvailable: "17 Bowls available",
    },
    {
        id: 48,
        foodImg:  Dessert3,
        foodName: "Homemade carrot cake",
        foodPrice: 14.00,
        isAvailable: "19 Bowls available",
    },
    {
        id: 49,
        foodImg:  Dessert4,
        foodName: "Matcha cake",
        foodPrice: 25.60,
        isAvailable: "3 Bowls available",
    },
    {
        id: 50,
        foodImg:  Dessert5,
        foodName: "Vegan chocolate cake",
        foodPrice: 8.45,
        isAvailable: "15 Bowls available",
    },
    {
        id: 51,
        foodImg:  Dessert6,
        foodName: "Praline and ganache cake",
        foodPrice: 11.60,
        isAvailable: "7 Bowls available",
    },
    {
        id: 52,
        foodImg:  Dessert7,
        foodName: "Blondie with vanilla ice cream",
        foodPrice: 5.50,
        isAvailable: "6 Bowls available",
    },
    {
        id: 53,
        foodImg:  Dessert8,
        foodName: "Re-invented cheesecake",
        foodPrice: 17.50,
        isAvailable: "10 Bowls available",
    },
    {
        id: 54,
        foodImg:  Dessert9,
        foodName: "XL lemon meringue pie",
        foodPrice: 9.47,
        isAvailable: "9 Bowls available",
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
                        <h1 className='choose'>Choose Dessert</h1>
                    </div>
                <Dropdown title="Dive in"/>
                </div>

                <div className='row-wrap'>
                {
                dessert.map(item => (
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

export default Dessert;