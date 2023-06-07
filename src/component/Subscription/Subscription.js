import React, { useEffect, useState } from "react";
import "./Subscription.css";
import logo from "../../assests/EDYODA.jpg";
import vector from "../../assests/Vector.png";
import search from "../../assests/search.png";
import book from "../../assests/book.png";
import clock from "../../assests/clock.png";
import live from "../../assests/live.png";
import Icon from "../../assests/Icon.png";
import ads from "../../assests/ads.png";
import frame from '../../assests/frame.png';
function Subscription() {
  const[selected,setselected]=useState('')

  useEffect(()=>{
    console.log(selected)
  },[selected])

  const handleChange=(e)=>{
    setselected(e.target.value)
    console.log(selected)
  }
  return (
    <div className="subscription">
      <div className="subscription__header">
        <div className="subscription__headerleft">
          <img src={logo} className="logo" alt="EDYODA" />
          <div className="subscription__course">
            <span>Courses</span>
            <img src={vector} className="vector" alt="vector" />
          </div>
          <div className="subscription__programs">
            <span>Programs</span>
            <img src={vector} className="vector" alt="vector" />
          </div>
        </div>
        <div className="subscription__headerright">
          <img src={search} alt="search" className="subscription__searchlogo" />
          <span className="subscription__login">Log In</span>
          <button className="btn btn--state-joinnow">
            <span>Join Now</span>
          </button>
        </div>
      </div>
      <div className="subscription__footer">
        <div className="subscription__footerleft">
          <div className="subscription__footerleft--details">
            <h1 className="subscription__footerleft--course">
              Access curated courses worth
            </h1>
            <h1 className="subscription__footerleft--price">
              <small className="price8500">
                ₹{" "}
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  <span style={{ color: "#FFFFFF" }}>18,500</span>
                </span>
              </small>
              <small className="atjust">at just</small>{" "}
              <small className="price99">₹ 99</small>
              <small className="peryear">per year</small>
            </h1>
          </div>
          <div className="subscription__footerleftfooter">
            <div className="subscription__footerleftitems">
              <img src={book} alt="book" className="icons" />
              <span className="subscription__footer1">
                <small className="colorchnage">100+</small>Job relevant courses
              </span>
            </div>
            <div className="subscription__footerleftitems">
              <img src={clock} alt="clock" className="icons" />
              <span className="subscription__footer2">
                <small className="colorchnage">20,000+</small> Hours of content
              </span>
            </div>
            <div className="subscription__footerleftitems">
              <img src={live} alt="live" className="icons" />
              <span className="subscription__footer3">
                <small className="colorchnage">Exclusive</small> webinar access
              </span>
            </div>
            <div className="subscription__footerleftitems">
              <img src={Icon} alt="icon" className="icons" />
              <span className="subscription__footer4">
                Scholarship worth <small className="colorchnage">₹94,500</small>
              </span>
            </div>
            <div className="subscription__footerleftitems">
              <img src={ads} alt="ads" className="icons" />
              <span className="subscription__footer5">
                <small className="colorchnage">Ad Free</small> learning
                experience
              </span>
            </div>
          </div>
        </div>
        <div className="suscription__footerright">
          <div className="suscription__footerright--header">
            <div className="footerright__header--signup">
              <div>
                <span className="number1">1</span>
              </div>
              <span className="signup">sign Up</span>
            </div>
            <div className="footerright__header--sub">
              <div>
                <span className="number1">2</span>
              </div>
              <span className="sub">Subscribe</span>
            </div>
          </div>
          <h1 className="sub__plan">Select your subcription plan</h1>
          <div className="sub__plancourse">
            <div className="sub__offerexpired">
              <div className="sub__offerexpired--indicate">
                <small>Offer expired</small>
              </div>
              <div className="sub__offerexpired--radio">
                <div>
                  <input
                    type="checkbox"
                    className="sub--radioinput"
                    checked
                    disabled
                  />
                </div>
                <div className="sub__offerexpired--price">
                  <span className="subcription__plan">
                    {" "}
                    12 month subcription
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="subplan--total">
                      <span style={{ position: "relative", left: "-6px" }}>
                        Total
                      </span>
                      <span className="subplan--totalno">₹99</span>
                    </span>
                    <div style={{ position: "relative", top: "-7px" }}>
                      <span className="subplan--no">₹8</span>
                      <span className="subplan--mo">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* second option ----------------------------------*/}
            <div className="sub__offerexpired sub__offerrecomended" id={selected==="179" && "selected__tap"}>
              <div className="sub__offerexpired--indicate sub--reccommended">
                <small>Recommended</small>
              </div>
              <div className="sub__offerexpired--radio">
                <div>
                  <input
                    type="checkbox"
                    // className="sub--radioinput"
                    value={"179"}
                    checked={selected==="179"}
                    className="sub--radioinput--all"
                    onChange={handleChange}
                  />
                </div>
                <div className="sub__offerexpired--price">
                  <span className="subcription__plan subcription__plan--recommend">
                    {" "}
                    12 month subcription
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="subplan--total">
                      <span id="total2"
                        style={{
                          // position: "relative",
                          // left: "-10px;",
                          width: "27px",
                          height: "16px",
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "120%",
                          color: "#3C4852",
                        }}
                      >
                        Total
                      </span>
                      <span className="subplan--totalno subplan--totalnorec">
                        ₹179
                      </span>
                    </span>
                    <div style={{ position: "relative", top: "-7px" }}>
                      <span className="subplan--no subplan--norec">₹15</span>
                      <span className="subplan--mo subplan--morec">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3--------------------------------------> */}
            <div className="sub__offerexpired sub__offerrecomended" id={selected==="149" && "selected__tap"}>
              <div
                className="sub__offerexpired--indicate sub--reccommended"
                style={{ visibility: "hidden" }}
              >
                <small>Recommended</small>
              </div>
              <div className="sub__offerexpired--radio">
                <div>
                  <input
                    type="checkbox"
                    // className="sub--radioinput"
                    value={"149"}
                    checked={selected==="149"}
                    className="sub--radioinput--all"
                    onChange={handleChange}
                  />
                </div>
                <div className="sub__offerexpired--price">
                  <span className="subcription__plan subcription__plan--recommend">
                    {" "}
                    6 Months Subscription
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="subplan--total">
                      <span id="total1"
                        style={{
                          // position: "relative",
                          // left: " -10px;",
                          width: "27px",
                          height: "16px",
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "120%",
                          color: "#3C4852",
                        }}
                      >
                        Total
                      </span>
                      <span className="subplan--totalno subplan--totalnorec">
                        ₹149
                      </span>
                    </span>
                    <div style={{ position: "relative", top: "-7px" }}>
                      <span className="subplan--no subplan--norec">₹25</span>
                      <span className="subplan--mo subplan--morec">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 4----------------------> */}
            <div className="sub__offerexpired sub__offerrecomended" id={selected==="99" && "selected__tap"}>
              <div
                className="sub__offerexpired--indicate sub--reccommended"
                style={{ visibility: "hidden" }}
              >
                <small>Recommended</small>
              </div>
              <div className="sub__offerexpired--radio">
                <div>
                  <input
                    type="checkbox"
                    // className="sub--radioinput"
                    value={"99"}
                    checked={selected==="99"}
                    className="sub--radioinput--all"
                    onChange={handleChange}
                  />
                </div>
                <div className="sub__offerexpired--price">
                  <span className="subcription__plan subcription__plan--recommend">
                    {" "}
                    3 month subcription
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="subplan--total">
                      <span id="total"
                        style={{
                          // position: "relative",
                          // left: "-10px;",
                          width: "27px",
                          height: "16px",
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "120%",
                          color: "#3C4852",
                        }}
                      >
                        Total
                      </span>
                      <span className="subplan--totalno subplan--totalnorec">
                        ₹99
                      </span>
                    </span>
                    <div style={{ position: "relative", top: "-7px" }}>
                      <span className="subplan--no subplan--norec">₹33</span>
                      <span className="subplan--mo subplan--morec">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*sub fees  */}
            <div className="sub__fees">
              <div className="sub__feesdetails">
                <span>Subscription Fee</span>
                <small>₹18,500</small>
              </div>
              <div className="limited__timeoffer">
                <div className="limited__child">
                  <span>Limited time offer</span>
                  <small>- ₹18,401</small>
                </div>
                <div className="icons__offervalid">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.6667 23.3333V43.3333L54 53.6666L56.6667 49.6666L41.6667 40.6666V23.3333H36.6667ZM66.6667 40V60H73.3334V40H66.6667ZM66.6667 66.6666V73.3333H73.3334V66.6666H66.6667ZM60 66.6666C54.3334 71 47.6667 73.3333 40 73.3333C21.6667 73.3333 6.66669 58.3333 6.66669 40C6.66669 21.6666 21.6667 6.66663 40 6.66663C56 6.66663 69.6667 18 72.6667 33.3333H65.6667C62.6667 22 52.3334 13.3333 40 13.3333C25.3334 13.3333 13.3334 25.3333 13.3334 40C13.3334 54.6666 25.3334 66.6666 40 66.6666C48 66.6666 55 63 60 57.6666V66.6666Z"
                      fill="#DE4313"
                    />
                  </svg>

                  <span>Offer valid till 25th March 2023 </span>
                </div>
              </div>
              <div className="total--price">
              <span>Total (Incl. of 18% GST)</span>
              <small>{ selected ?"₹"+selected : "₹149"}</small>
              </div>
              <div className="buttons--checkout">
                <div className="btn--state-cancel">
                  <span>cancel</span>
                </div>
                <div className="btn--state-checkout">
                  <span>Proceed to pay</span>
                </div>
              </div>
              <div className="sub__frame">
                <img src={frame} alt="frame"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
