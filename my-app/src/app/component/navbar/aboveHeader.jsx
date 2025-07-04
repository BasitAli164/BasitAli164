import { Linkedin, Mail, Phone, TwitterIcon } from "lucide-react";

const MiniHeader = () => {
  return (
    <div className="miniContainer">
      <div className="contactDetail">
        <div className="number">
          <Phone />
          <p className="minipara">+923 475495500</p>
        </div>
        <div className="mail">
            <Mail/>
            <p className="minipara">basitdeveloper911@gmail.com</p>
        </div>


      </div>
      <div className="socail">
        <Linkedin/>
        <TwitterIcon/>
      </div>
    </div>
  );
};

export default MiniHeader;
