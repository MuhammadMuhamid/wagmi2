import Layout from "../src/layout/Layout";
import Tokenomics from "../src/components/Tokenomics";
import Link from "next/link";

const Connetwallet = () => {
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
            <div className="content connectwalletflex">
              <img src="img/wagmi.png" className="wagmilogo" />
              <div className="connectbtndiv2">
                <Link href="/Dao" className="connectbtn">
                  Connet Wallet
                </Link>
              </div>
              <p className="fn_desc fn_animated_text">
                Connect Your Wallet To Excuse Your Account
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Connetwallet;
