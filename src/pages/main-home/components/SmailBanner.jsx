import PropTypes from 'prop-types';
import Image from "../../../assets/images/do-tho-cung-min.webp";
SmailBanner.propTypes = {
  width: PropTypes.string,
};

function SmailBanner(props) {
  return (
    <div className={`w-[${props.width}] h-[202px] bg-slate-800 overflow-hidden`}>
      <img src={Image} alt="pic" className="w-full h-full object-cover hover:scale-125 hover:duration-200 cursor-pointer" />
    </div>
  );
}

export default SmailBanner;