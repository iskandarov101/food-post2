
const ButtonOrder = ({ setBtnState,  buttonActive, buttonInfo})=> {

  return(
    <button 
    onClick={() => setBtnState(buttonInfo)} type='button' 
    className={`order-btn ${buttonActive === buttonInfo ? 'active-btn' : ' '}`}>
    {buttonInfo}
    </button>
  )
}

export default ButtonOrder;