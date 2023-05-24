import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  return (
    <Fragment>
      {/* Right Navigation */}
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div className="trigger is-active">
          <div className="trigger_in" onClick={() => setToggle(false)}>
            <span className="text">Close</span>
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
        <div className="nav_content">
          <div className="nav_menu">
            <ul>
              <li className="menu-item menu-item-has-children">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setHomeToggle(!homeToggle);
                  }}
                >
                  Dao
                </a>
                <ul
                  className="sub-menu"
                  style={{ display: homeToggle ? "block" : "none" }}
                >
                  <li>
                    <Link href="/">Home Static</Link>
                  </li>
                  <li>
                    <Link href="/kenburns">Full Kenburns</Link>
                  </li>
                  <li>
                    <Link href="/half-kenburns">Half Kenburns</Link>
                  </li>
                  <li>
                    <Link href="/half-slider">Half Slider</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link href="/about">Documentation</Link>
              </li>
              <li className="menu-item">
                <Link href="/blog">Become A Partner</Link>
              </li>
              <li className="menu-item">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="neoh_fn_footer">
              <div className="footer_top">
                <div className="container">
                  <div className="ft_in">
                    <div className="desc">
                      <div className="img">
                        <img src="img/footer-logo.png" alt="" />
                      </div>
                      <h3 className="fn_title">Join Now For Early Access</h3>
                      <p className="fn_desc">
                        Morbi non dignissim erat, a blandit felis nec lorem vel
                        orci varius congue ut vitae est. Nam quis tempus nisl.
                        Fusce posuere nibh a mi molestie, sit amet ornare
                      </p>
                    </div>
                    <div className="subscribe_form">
                      <div className="subscribe_in">
                        <input type="text" placeholder="Email..." />
                        <a href="#" className="neoh_fn_button only_text">
                          <span className="text">Subscribe</span>
                        </a>
                      </div>
                      <div
                        className="returnmessage"
                        data-success="Your message has been received, We will contact you soon."
                        data-message="You have subscribed to our updates. Thank you"
                        data-invalid-email="Please enter valid email!"
                      />
                      <div className="empty_notice">
                        <span>Please enter your Email</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav_buttons">
            <a
              href="https://opensea.io/"
              className="neoh_fn_button"
              target="_blank"
            >
              <span className="icon">
                <img src="svg/opensea.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">OpenSea</span>
            </a>
            <a
              href="https://discord.com/"
              className="neoh_fn_button"
              target="_blank"
            >
              <span className="icon">
                <img src="svg/discord.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">Discord</span>
            </a>
          </div>
        </div>
        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          <div className="nf_left">
            <p>
              Copyright 2022- Designed &amp; Developed by{" "}
              <a
                href="https://themeforest.net/user/codeefly/portfolio"
                target="_blank"
              >
                Codeefly
              </a>
            </p>
          </div>
          <div className="nf_right">
            <div className="neoh_fn_social_list">
              <ul>
                <li>
                  <a href="#">
                    <i className="fn-icon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* !Nav Footer */}
      </div>
      {/* !Right Navigation */}
      {/* Header */}
      <header className="neoh_fn_header">
        <div className="container">
          <div className="header_in">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="img/logo.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="flex1">
              <div className="connectbtndiv">
                <Link href="/Connectwallet" className="connectbtn">
                  {/* <Link href="/Connectwallet" className="connectbtn"> */}
                  connect wallet
                </Link>
              </div>
              <div className="trigger">
                <div className="trigger_in" onClick={() => setToggle(!toggle)}>
                  <span className="text">Menu</span>
                  <span className="hamb">
                    <span className="hamb_a" />
                    <span className="hamb_b" />
                    <span className="hamb_c" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* !Header */}
    </Fragment>
  );
};
export default Header;
