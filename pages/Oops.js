import Layout from "../src/layout/Layout";
import Tokenomics from "../src/components/Tokenomics";
import Link from "next/link";

const Oops = () => {
  return (
    <Layout pageName={"Home Static"}>
      {/* Hero Header */}
      <div className="neoh_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
          <div className="bg_color" />
          {/* !Overlay Color */}
          {/* Overlay Image */}
          <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content oopsflex">
              <p className="oopstext ">OOPS!</p>
              <div>
                <p className="oopstext2 ">You Are Not A DAO Participant</p>
              </div>
              <p className="oopstext3  fn_animated_text">
                To Become A DAO Participant Please Contact
              </p>

              <div className="oopsbtndiv">
                <Link href="/Wallet" className="oopsbtn">
                  DAO@Wagmi.xyz
                </Link>
              </div>
              {/* <p className="fn_desc fn_animated_text">
                Connect Your Wallet To Excuse Your Account
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Oops;
