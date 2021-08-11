import { Delete } from '../../assets/icon/BaseIcons';
import './main.scss';

const SelectItem = ({foodName, img, quantity, price ,value})=> {

  return(
    <div className="selected-item">
      <div className="item-info">
        <div className="left">
          <img src={img} alt="" />
          <div className="item-text">
            <h3>{foodName}</h3>
            <p>{quantity}</p>
          </div>
        </div>
        <div className="right">
          <span className="quantity">{value}</span>
          <span className="price">{price}</span>
        </div>
      </div>
      <div className="item-comment">
        <input type="text" placeholder="Order Note..."  />
        <button>
            <Delete />
        </button>
      </div>
    </div>
  )
}

export default SelectItem;