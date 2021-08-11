import { coldDishes } from "../../data/Dishes";
import DishCard from "../../components/DishCard";
import ItemAdderBtn from "../../components/ItemAdderBtn";
import { useState } from "react";
import UseModal from "../../components/UseModal";
import { container, Varitem } from "./variants";
import { motion } from "framer-motion";

const ColdDishes = () => {
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
      {coldDishes.map((item) => (
        <DishCard
          img={item.foodImg}
          variants={Varitem}
          price={item.foodPrice}
          text={item.foodName}
          key={item.id}
          set={item.isAvailable}
        />
      ))}
    </motion.div>
  );
};

export default ColdDishes;
