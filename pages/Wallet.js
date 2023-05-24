import WalletLayout from "../src/layout/WalletLayout";
import Tokenomics from "../src/components/Tokenomics";
import Link from "next/link";

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
            <div className="content walletgridmain">
              <div>
                <img src="img/walletpic.png" className="walletpic" />
              </div>
              <div className="walletgrid1">
                <div>
                  <div className="allignment">
                    <p className="walletheading1">your role: wagmi keeper</p>
                    <p>0xE298.....3Eea5E</p>
                  </div>
                  <div className="walletflex1">
                    <div className="walletsubgrid1">
                      <div>
                        <img src="img/walletpic.png" />
                      </div>
                      <div className="headingdiv">
                        <p className="walletheading1">Stake Your NFT </p>
                        <p>25000$</p>
                      </div>
                    </div>
                    <div className="walletsubgrid2">
                      <div>
                        <img src="img/walletpic.png" />
                      </div>
                      <div className="headingdiv">
                        <p className="walletheading1">TVL Stake Amount</p>

                        <p>25000$</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="walletgrid2">
                  <div className="allignment">
                    <a src="/connectwallet" className="uploadbtn">
                      Upload
                    </a>
                    <p>Your Proposal : PDF, Docx</p>
                  </div>
                  <div className="allignment">
                    <p className="walletheading1">you have voted</p>
                    <p>2500$ times</p>
                  </div>
                  <div className="bluebgpara">
                    <p>Joined Date : 23 May, 2023</p>
                  </div>
                </div>
              </div>
            </div>
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
