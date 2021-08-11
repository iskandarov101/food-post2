import { Icon8, Icon9, Icon10 } from "../../assets/icon/icon"
import Checked from "../../assets/images/checkmark-circle.svg"
import "./overlay.css"
import Dropdown from "../../components/Dropdown/Dropdown"


const Overlay = ({setDrawerState,drawerState}) => {

    return (
       <div className={`big-overlay ${drawerState ? 'activev' : ' '}`}>
            <div className={`pay ${drawerState ? 'activev' : ' '}`}>
            <div className="pay-head">
                <h2 className="pay-title">Payment</h2>
                <p className="pay-title_text">3 payment method available</p>
            </div>
            <div className="method" >
                <h3 className="method-title">Payment Method</h3>
                <div className="cards-pay">
                    <div className="cards-block">
                        <input type="radio" name="radio-check" id="inp1" />
                        <label htmlFor="inp1">
                            <img src={Checked} className="block" alt="" />
                            <span>
                                <Icon8 />
                            </span>
                                Credit Card
                            </label>
                    </div>
                    <div className="cards-block">
                        <input type="radio" name="radio-check" id="inp2" />
                        <label htmlFor="inp2">
                            <img src={Checked} className="block" alt="" />

                            <span>
                                <Icon9 />
                            </span>
                                Paypal
                            </label>
                    </div>
                    <div className="cards-block">
                        <input type="radio" name="radio-check" id="inp3" />
                        <label htmlFor="inp3">
                            <img src={Checked} className="block" alt="" />

                            <span>
                                <Icon10 />
                            </span>
                                Cash
                            </label>
                    </div>
                </div>
                <div className="cards-inp">
                    <label htmlFor="name">Cardholder Name</label>
                    <input type="text" id="name" />
                </div>
                <div className="cards-inp">
                    <label htmlFor="number">Card Number</label>
                    <input type="text" id="number" />
                </div>

                <div className="inp-num row1">
                    <div className="cards-inp">
                        <label htmlFor="number1">Expiration Date</label>
                        <input type="text" id="number1" />
                    </div>
                    <div className="cards-inp">
                        <label htmlFor="password">CVV</label>
                        <input type="password" id="password" />
                    </div>
                </div>
                <div className="row1 lt">
                    <div className="cards-inp">
                        <label htmlFor="number1">Expiration Date</label>
                        <Dropdown title="Dive in"/>
                    </div>
                    <div className="cards-inp">
                        <label htmlFor="password1">Table no.</label>
                        <input type="text" id="password1" />
                    </div>
                </div>
                <div className="row1 buttons">
                    <button className="btn btn1" onClick={() => setDrawerState(!drawerState)}>Cancel</button>
                    <button className="btn btn2">Confirm Payment</button>
                </div>
            </div>
        </div>
       </div>
    );
};


export default Overlay;