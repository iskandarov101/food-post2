import Avatar1 from "../../assets/images/Avatar 1.svg"
import Avatar2 from "../../assets/images/Avatar 1 (1).svg"
import Avatar3 from "../../assets/images/Avatar 1 (2).svg"
import Avatar4 from "../../assets/images/Avatar 1 (3).svg"
import Avatar5 from "../../assets/images/Avatar 1 (4).svg"
import TicketList from "../../components/TicketList/TicketList";
import Filter from "../../components/Filter/Filter";
import "./main.css"


const Tickets = () => {
    const Tickets = [
        {
            avatar:Avatar1,
            name:"Eren Jaegar",
            menu:`Spicy seasoned  seafood noodles`,
            total:"$125",
            status:"Completed"
        },
        {
            avatar:Avatar2,
            name:"Reiner Braunn",
            menu:"Salted Pasta with mushroom sauce",
            total:"$145",
            status:"Preparing"
        },
        {
            avatar:Avatar3,
            name:"Levi Ackerman",
            menu:"Beef dumpling in hot and sour soup ",
            total:"$105",
            status:"Pending"
        },
        {
            avatar:Avatar4,
            name:"Historia Reiss",
            menu:"Hot spicy fried rice with omelet",
            total:"$45",
            status:"Completed"
        },
        {
            avatar:Avatar5,
            name:"Hanji Zoe",
            menu:"Hot spicy fried rice with omelet ",
            total:"$245",
            status:"Completed"
        },
        {
            avatar:Avatar1,
            name:"Eren Jaegar",
            menu:`Spicy seasoned  seafood noodles`,
            total:"$125",
            status:"Completed"
        },
        {
            avatar:Avatar2,
            name:"Reiner Braunn",
            menu:"Salted Pasta with mushroom sauce",
            total:"$145",
            status:"Preparing"
        },
        {
            avatar:Avatar3,
            name:"Levi Ackerman",
            menu:"Beef dumpling in hot and sour soup ",
            total:"$105",
            status:"Pending"
        },
        {
            avatar:Avatar4,
            name:"Historia Reiss",
            menu:"Hot spicy fried rice with omelet",
            total:"$45",
            status:"Completed"
        },
        {
            avatar:Avatar5,
            name:"Hanji Zoe",
            menu:"Hot spicy fried rice with omelet ",
            total:"$245",
            status:"Completed"
        },
    ]
    return (
        <div className="ticket-wrapper">
                <div className="ticket-inner">
                    <div className="p5">
                        <div className="row1">
                            <h2 className="ticket-title">Order Report</h2>
                            <Filter/>
                        </div>
                        <div className="row1">
                            <h3 className="inner-text">Customer</h3>
                            <h3 className="inner-text">Menu</h3>
                            <h3 className="inner-text inner-text-right">Total Payment</h3>
                            <h3 className="inner-text inner-text-right">Status</h3>
                        </div>
                    </div>
                </div>
            <div className=" p5 ticket-body">
            {
                   Tickets.map(item => (
                    <TicketList 
                    avatar = {item.avatar}
                    name = {item.name}
                    menu = {item.menu}
                    total = {item.total}
                    status = {item.status}
                    />
                ))        
            }
            </div>
            
        </div>
    );
};



export default Tickets;