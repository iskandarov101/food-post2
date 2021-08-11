import { grill } from "../../data/Dishes";
import DishCard from "../../components/DishCard";
import ItemAdderBtn from "../../components/ItemAdderBtn";
import { useState } from "react";
import UseModal from "../../components/UseModal";

import { container, Varitem } from "./variants";
import { motion } from "framer-motion";

const Grills = () => {
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
      {grill.map((item) => (
        <DishCard
          img={item.foodImg}
          text={item.foodName}
          variants={Varitem}
          price={item.foodPrice}
          set={item.isAvailable}
          key={item.id}
        />
      ))}
    </motion.div>
  );
}

export default Grills
