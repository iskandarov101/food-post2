import { appetizer } from "../../data/Dishes";
import DishCard from "../../components/DishCard";
import ItemAdderBtn from "../../components/ItemAdderBtn";
import UseModal from "../../components/UseModal";
import { useState } from "react";
import { container, Varitem } from "./variants";
import { motion } from "framer-motion";

const ColdDishes = () => {
  const [visible, setVisible] = useState(false);
  

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="dishes-wrapper">
      <ItemAdderBtn setVisible={setVisible} />
      <UseModal setVisible={setVisible} visible={visible} />
      {appetizer.map((item) => (
        <DishCard
          img={item.foodImg}
          price={item.foodPrice}
          variants={Varitem}
          text={item.foodName}
          key={item.id}
          set={item.isAvailable}
        />
      ))}
    </motion.div>
  );
};

export default ColdDishes;
