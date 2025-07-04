import { Mail, Phone } from "lucide-react";

const MiniHeader = () => {
  return (
    <div className="miniContainer">
      <div className="contactDetail">
        <div className="number">
          <Phone width={14} />
          <p>+923 475495500</p>
        </div>
        <div className="mail">
            <Mail width={14}/>
            <p>basitdeveloper911@gmail.com</p>
        </div>

      </div>
      <div className="socail"></div>
    </div>
  );
};

export default MiniHeader;
