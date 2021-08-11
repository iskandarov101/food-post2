import "./main.css"

const TicketList = ({avatar,name,menu,total,status}) => {
    return (
        <div className="ticketList">
            <div className="ticket-row">
                <img src={avatar} alt=""/>
                <p className="ticket-name">{name}</p>
            </div>
            <div className="ticket-text_title">
                    <p className="ticket-menu">{menu}</p>
            </div>
            <p className="ticket-total">{total}</p>
            <button className={`btn-status ${status}`}>{status}</button>
        </div>
    );
};



export default TicketList;