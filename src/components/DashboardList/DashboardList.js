import "./main.css"

const DashboardList = ({dashLogo,num,icon,total,title}) => {
    return (
        <div className="dashboardList">

                <div className="list-row">
                    <img className="dashlogo" src={dashLogo} alt=""/>
                    <span className={`num`}>{num}</span>
                    <img className="icon" src={icon} alt=""/>
                 </div>
                <h3 className="total">{total}</h3>
                <p className="dashTitle">{title}</p>
 
        </div>
    );
};


export default DashboardList;