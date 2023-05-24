import Head from "next/head";
import { Fragment, useEffect } from "react";
import VideoPopup from "../components/popup/VideoPopup";
import {
  animationText,
  dataBgImg,
  imgToSVG,
  neoh_fn_moving_blog,
  progressTotop,
  stickyNav,
} from "../utilits";
import Footer from "./Footer";
import WalletHeader from "./WalletHeader";
import ScrollTop from "./ScrollTop";

const WalletLayout = ({ children, pageName }) => {
  useEffect(() => {
    animationText();
    neoh_fn_moving_blog();
    dataBgImg();
    imgToSVG();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", progressTotop);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Neoh | {pageName}</title>
      </Head>
      <VideoPopup />
      <div className="neoh_fn_main" data-footer-sticky="">
        <WalletHeader />
        <div className="neoh_fn_content">{children}</div>
        <Footer />
        <ScrollTop />
      </div>

      <div className="neoh_fn_moving_box"></div>
    </Fragment>
  );
};
export default WalletLayout;
