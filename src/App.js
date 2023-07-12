import "./App.css";
import banner from "./assets/banner.jpg";
import playstore1 from "./assets/playstore1.png";
import appstore1 from "./assets/appstore1.png";
import ricon from "./assets/RitilyICON.png";
import rricon from "./assets/RitilyRetailerIcon.png";
import Navbar from "./assets/Nav.css";
function App() {
  return (
    <div className="app_main_wrapp">
      <div className="appbase_wrapp">
        {/* Navbar */}
        <nav style={{ backgroundColor: "#ff0000", width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
              fontSize: "20px",
            }}>
            {/* <div>img</div> */}
            <div
              className="nav"
              style={{
                width: "100%",
                height: "80px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}>
              <div>
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    textDecorationColor: "white",
                  }}
                  href="https://ritily.com/ritily/public/about.html"
                  target="_blank">
                  <p className="button">About us</p>
                </a>
              </div>
              <div>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://ritily.com/ritily/public/terms.html"
                  target="_blank">
                  <p className="button">Terms</p>
                </a>
              </div>
              <div>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://ritily.com/ritily/public/privacy.html"
                  target="_blank">
                  <p className="button">Privacy</p>
                </a>
              </div>
              <div>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://ritily.com/ritily/public/contactus.html"
                  target="_blank">
                  <p className="button">Contact us</p>
                </a>
              </div>
              <div>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://ritily.com/ritily/public/cancel.html"
                  target="_blank">
                  <p className="button">Cancellation & Refund</p>
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Banner */}

        <div className="banner_wrapp">
          <div className="banner">
            <img src={banner} alt="banner image" />
          </div>
        </div>

        {/* about */}

        <div className="about_wrapp">
          <div className="about_base">
            <div className="about_flex1">
              <div className="store_logo">
                <img src={playstore1} alt="banner image" />
              </div>
              <div className="store_logo">
                <img src={appstore1} alt="banner image" />
              </div>
            </div>
            <div className="about_flex2">
              <div>
                <h4>Ritily Retailer</h4>
                <div className="app_logo">
                  <img src={rricon} alt="banner image" />
                </div>
              </div>
              <div className="btn_wrapp">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ritilyretailer"
                  className="btn"
                  target="_blank">
                  GET THE APP
                </a>
                <button className="btn">COMING SOON</button>
              </div>
            </div>
            <div className="about_flex2">
              <div>
                <h4>Ritily</h4>
                <div className="app_logo">
                  <img src={ricon} alt="banner image" />
                </div>
              </div>
              <div className="btn_wrapp">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ritily"
                  className="btn"
                  target="_blank">
                  GET THE APP
                </a>
                <button className="btn">COMING SOON</button>
              </div>
            </div>
          </div>
        </div>

        {/* description */}

        <div className="dis_wrapp">
          <div className="dis_base">
            <ul>
              <li className="dis_list">
                All users within a 1km radius (currently 1km, may expand in
                future) can view your store.
              </li>
              <li className="dis_list">
                All legal retailers/vendors like kitchenware, food, grocery
                sports, clothing, watches, electronics, stationery, shoes,
                hardware, makeup etc. can join this platform.
              </li>
              <li className="dis_list">
                You can easily deliver their product due to nearby (1 km)
                location.
              </li>
              <li className="dis_list">
                You can control your home delivery time and home delivery
                charges.
              </li>
              <li className="dis_list">
                You have an analytics feature, so you can analyze all your past
                orders.
              </li>
              <li className="dis_list">
                You can change store products yourself.
              </li>
              <li className="dis_list">You can accept and reject orders.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
