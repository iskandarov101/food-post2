import "./main.css"
import ApexChart from "../../components/DiogramList/ApexChart"
import Dropdown from "../../components/Dropdown/Dropdown"
import Customer from "../../components/Customers/Customer"
const Diogram = () => {
    const CustomerArr =[
        {
           color:"red",
           title:"Dine in",
           text:"200 customers"
        },
        {
            color:"yellow",
            title:"To Go",
            text:"122 customers"
        },
        {
            color:"pink",
            title:"Delivery",
            text:"264 customers"
        }
    ]

    return (
        <div className="diogram">
            <div className="row1 diogram-head">
                <h3 className="diogram-text">Most Type of  Order</h3>
                <Dropdown title='Dive in'/>
            </div>
            <div className="custom" >
                <ApexChart/>    

               <div className="customersBox" >
                            {
                                CustomerArr.map(item => (
                                    <Customer 
                                    color = {item.color}
                                    title = {item.title}
                                    text = {item.text}
                                    />
                                ))        
                            }
               </div>
            </div>

        </div>
    );
};



export default Diogram;