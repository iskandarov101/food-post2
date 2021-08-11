import { EditIcon } from "../../assets/icon/BaseIcons"
import {
  motion
} from 'framer-motion'

const DishCard = ({ img, text, price, set, variants }) => {
  return (
    <motion.div variants={variants} className="dish-card">
      <img className="food-img" src={img} alt="" />
      <h3 className="title">{text}</h3>
      <p className="dish-info">
        {price} - {set}
      </p>
      <button className="dish-button">
        <EditIcon />
        Edit dish
      </button>
    </motion.div>
  );
};

export default DishCard;
