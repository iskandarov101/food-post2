import "./main.css"
import DashboardList from "../../components/DashboardList/DashboardList";
import Logo1 from "../../assets/images/dollar.svg"
import Upicon from "../../assets/images/Upicon.svg"
import Bookmark from "../../assets/images/bookmark.svg"
import Downicon from "../../assets/images/Downicon.svg"
import icon from "../../assets/images/Icon.svg"


const DashboardCont = () => {
    const Array =[
        {
            dashLogo:Logo1,
            num:"+32.40%",
            icon:Upicon,
            total:"$10,243.00",
            title:"Total Revenue"
        },
        {
            dashLogo:Bookmark,
            num:"-12.40%",
            icon:Downicon,
            total:"23,456",
            title:"Total Dish Ordered"
        },
        {
            dashLogo:icon,
            num:"+2.40%",
            icon:Upicon,
            total:"1,234",
            title:"Total Customer"
        }
    ]
    return (
        <div className="dashboard">
            <div className="row1 dash">
            {
                   Array.map(item => (
                    <DashboardList 
                    dashLogo = {item.dashLogo}
                    num = {item.num}
                    icon = {item.icon}
                    total = {item.total}
                    title = {item.title}
                    />
                ))        
            }
            </div>
            
        </div>
    );
};


export default DashboardCont;