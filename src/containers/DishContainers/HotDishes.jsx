import { hotDishes } from "../../data/Dishes";
import DishCard from "../../components/DishCard";
import ItemAdderBtn from "../../components/ItemAdderBtn";
import UseModal from "../../components/UseModal";
import { useState } from "react";
import { container, Varitem } from "./variants";
import { motion } from "framer-motion";


const HotDishes = () => {
  const [visible, setVisible] = useState(false);
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="dishes-wrapper"
    >
      <ItemAdderBtn setVisible={setVisible} />
      <UseModal setVisible={setVisible} visible={visible} />
      {hotDishes.map((item) => (
        <DishCard
          img={item.foodImg}
          variants={Varitem}
          text={item.foodName}
          price={item.foodPrice}
          set={item.isAvailable}
          key={item.id}
        />
      ))}
    </motion.div>
  );
};

export default HotDishes;
