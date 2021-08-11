
import "./main.css"
const Customer = ({title,text,color}) => {
    return (
        <div className="custominfo">
            <span className={color}></span>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};



export default Customer;   