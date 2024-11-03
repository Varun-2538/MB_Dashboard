import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1 =[10px]">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Sumbimissions</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } alt="plus"/>
            </button>
        </div>
        <div className="grid-c1-content">
            <p>Project_Name</p>
            <div className="lg-value">SDG_Name</div>
            <div className="card-wrapper">
                <span className="card-pin-hidden">**** **** **** </span>
                <span>1234</span>
            </div>
            <div className="card-logo-wrapper">
                <div>
                    <p className="text text-silver-v1 expiry-text">CSR Score Expires</p>
                    <p className="text text-sm text-white">12/26</p>
                </div>
                {/* <div className="card-logo">
                    <div className="logo-shape1"></div>
                    <div className="logo-shape2"></div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Cards
