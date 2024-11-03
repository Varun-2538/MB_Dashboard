import "./ContentMain.css";
import Cards from "../Cards/Cards";
const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Cards />
            <Cards />
            <Cards />
        </div>
        <div className="content-grid-two">
            <Cards />
            <Cards />
            <Cards />
        </div>
    </div>
  )
}

export default ContentMain
