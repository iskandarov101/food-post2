import FoodCard from '../../components/FoodCard/foodCard';
import Dropdown from '../../components/Dropdown/Dropdown';


import './food-container.scss';

import Grill1 from '../../assets/images/Grill1.jfif'
import Grill2 from '../../assets/images/Grill2.jfif'
import Grill3 from '../../assets/images/Grill3.1.jfif'
import Grill4 from '../../assets/images/Grill4.jfif'
import Grill5 from '../../assets/images/Grill5.jfif'
import Grill6 from '../../assets/images/Grill6.jfif'
import Grill7 from '../../assets/images/Grill7.jfif'
import Grill8 from '../../assets/images/Grill8.jpg'
import Grill9 from '../../assets/images/Grill9.jfif'
const Grill = (props) => {

    const {onAdd} = props

    const grill = [

        {
            id:28,
            foodImg: Grill1,
            foodName: "New York Strip",
            foodPrice: 20.50,
            isAvailable: "5 Bowls available",
        },
        {
            id:29,
            foodImg: Grill2,
            foodName: "Ribye",
            foodPrice: 19.80,
            isAvailable: "2 Bowls available",
        },
        {
            id:30,
            foodImg: Grill3,
            foodName: "Veal",
            foodPrice: 19.30,
            isAvailable: "7 Bowls available",
        },
        {
            id:31,
            foodImg:Grill4,
            foodName: "Pork Chops",
            foodPrice: 15.70,
            isAvailable: "4 Bowls available",
        },
        {
            id:32,
            foodImg: Grill5,
            foodName: "Baby ribs and shrip",
            foodPrice: 18.00,
            isAvailable: "14 Bowls available",
        },
        {
            id:33,
            foodImg: Grill6,
            foodName: "Salmon fillet",
            foodPrice: 17.40,
            isAvailable: "3 Bowls available",
        },
        {
            id:34,
            foodImg: Grill7,
            foodName: "Tuna Steak",
            foodPrice: 24.00,
            isAvailable: "2 Bowls available",
        },
        {
            id:35,
            foodImg: Grill8,
            foodName: "Country-Style Ribs with Quick-Pickled Watermelon",
            foodPrice: 30.25,
            isAvailable: "5 Bowls available",
        },
        {
            id:36,
            foodImg: Grill9,
            foodName: "Grilled Kielbasa Tacos",
            foodPrice: 27.90,
            isAvailable: "1 Bowls available",
        },
    
    ];

    return (
      <div className='dishes-holder'>
        <div className='row first'>
          <div className='left-holder'>
              <h1 className='choose'>Choose Grill</h1>
          </div>
          <Dropdown title="Dive in"/>
        </div>
 
        <div className='row-wrap'>
        {
            grill.map(item => (
            <FoodCard
            key={item.id}
            foods={item}
            onAdd={onAdd}
            />
          ))                   
        }
        </div>
      </div>
    );
};

export default Grill;