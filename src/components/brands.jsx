import "./brands.css";

import Fiverr from "../assets/illustration/fiver.svg";
import Upwork from "../assets/illustration/upwork.svg";
import Freelancer from "../assets/illustration/freelancer.svg";
import Youtube from "../assets/illustration/youtube.svg";
import Google from "../assets/illustration/google.svg";
import Pixar from "../assets/illustration/pixer.svg";
import Wise from "../assets/illustration/wise.svg";

function Brands() {

  return (

    <div className="brands">

      <div className="brands-slider">

        <img src={Fiverr} alt="" />
        <img src={Upwork} alt="" />
        <img src={Freelancer} alt="" />
        <img src={Youtube} alt="" />
        <img src={Google} alt="" />
        <img src={Pixar} alt="" />
        <img src={Wise} alt="" />

        <img src={Fiverr} alt="" />
        <img src={Upwork} alt="" />
        <img src={Freelancer} alt="" />
        <img src={Youtube} alt="" />
        <img src={Google} alt="" />
        <img src={Pixar} alt="" />
        <img src={Wise} alt="" />
        
      </div>

    </div>

  );
}

export default Brands;