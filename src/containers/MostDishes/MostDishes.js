import { Button } from "antd"
import Dropdown from "../../components/Dropdown/Dropdown"
import { appetizer } from "../../data/Dishes"
import './MostDishes.scss'
const MostDishes = () => {
    return(
        <div className="most-dishes">
            <div className="row head">
                <h2>Most Ordered</h2>
                <Dropdown title="Today"/>
            </div>
            {
                appetizer.slice(0,3).map(item=>(
                    <div className="list-item">
                        <img  src={item.foodImg} alt=""/>
                        <div className="item-info">
                            <h3>{item.foodName}</h3>
                            <p>{item.isAvailable}</p>
                        </div>
                    </div>
                ))
            }
            <Button className="viewAllbtn">View All</Button>
        </div>
    )
}
export default MostDishes