import WalletLayout from "../src/layout/WalletLayout";
import Tokenomics from "../src/components/Tokenomics";
import Link from "next/link";
import Carousel from "../src/layout/slider";
import App from "next/app";

const Wallet = () => {
  return (
    <WalletLayout pageName={"Home Static"}>
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
            <div className="content "></div>
            <App slides={slides} isPageBackground />
            <div className="h2__container5">
              <h2 className="h2__container5">Proposal You Have Submitted</h2>
            </div>
            <div className="tablediv">
              <div className="walletaddressdiv1">
                <p className="pwidth">wallet address</p>
                <p className="pwidth">Submission Date</p>
                <p className="pwidth">Total Votes</p>
                <p className="pwidth"> Expiry Date</p>
              </div>
              <div className="walletaddressdiv2">
                <div className="walletaddressdivsub1">
                  <p className="pwidth">1- wallet address</p>
                  <p className="pwidth">23 may 2023</p>
                  <p className="pwidth">250</p>
                  <p className="pwidth"> 6 june 2023</p>
                </div>
                <div className="walletaddressdivsub2">
                  <p className="pwidth">In Process</p>
                </div>
              </div>
              <div className="walletaddressdiv3">
                <div className="walletaddressdivsub1">
                  <p className="pwidth">2- wallet address</p>
                  <p className="pwidth">23 may 2023</p>
                  <p className="pwidth">250</p>
                  <p className="pwidth"> 6 june 2023</p>
                </div>
                <div className="walletaddressdivsub2">
                  <p className="pwidth">In Process</p>
                </div>
              </div>
              <div className="walletaddressdiv4">
                <div className="walletaddressdivsub1">
                  <p className="pwidth">3- wallet address</p>
                  <p className="pwidth">23 may 2023</p>
                  <p className="pwidth">250</p>
                  <p className="pwidth"> 6 june 2023</p>
                </div>
                <div className="walletaddressdivsub2">
                  <p className="pwidth">In Process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WalletLayout>
  );
};
export default Wallet;
