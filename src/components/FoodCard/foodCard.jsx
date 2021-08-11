import {motion} from 'framer-motion'

const FoodCard = ({ onAdd, foods, variants })=> {
  
  return(
    <motion.div
    variants={variants}
    className="foodCard"
    onClick={() => onAdd(foods)}
    > 
      <img className="food-img" alt="" src={foods.foodImg} />
      <p className="food-title">{foods.foodName}</p>
      <p className="food-price">$ {foods.foodPrice}</p>
      <p className="available">{foods.isAvailable}</p>
    </motion.div>
  )
}

export default FoodCard;
