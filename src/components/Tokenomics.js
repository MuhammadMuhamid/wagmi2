import Link from "next/link";
import pic1 from "../../public/img/tpic1.png";
const Tokenomics = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="tokenomicgrid">
          <div className="tokenomicdiv1">
            <h2>Tokenomics</h2>
            <img src="img/tpic1.png" className="tpic1" />
          </div>
          <div className="tokenomicdiv2">
            <h2>How We Work</h2>
            <img src="img/tpic2.png" className="tpic2" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tokenomics;
