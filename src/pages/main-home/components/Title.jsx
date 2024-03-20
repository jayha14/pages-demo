import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import PropTypes from "prop-types";

Title.propTypes = {
  text: PropTypes.string,
  isItem: PropTypes.string,
  slide: PropTypes.string,
};

function Title(props) {
  return (
    <div className="w-full h-[45px] border-b-2 border-[#ebebeb] flex justify-between">
      <div className="w-[306px] h-full bg-[#6d2b0a] text-xl text-white font-medium text-center pt-2">
        {props.text}
      </div>
      <div className="flex gap-3 text-sm pt-5">
        {props.isItem && (
          <div className="flex gap-3">
            <div className="cursor-pointer hover:text-[#6d2b0a]">Bình Tứ Quý</div>
            <div className="cursor-pointer hover:text-[#6d2b0a]">Đèn Rồng Phượng</div>
            <div className="cursor-pointer hover:text-[#6d2b0a]">Đèn Dứa</div>
            <div className="cursor-pointer hover:text-[#6d2b0a]">Xem tất cả</div>
          </div>
        )}
        {props.slide && (
          <div className="flex gap-3">
            <MdKeyboardArrowLeft className="w-[20px] h-[20px] cursor-pointer hover:text-[#6d2b0a]" />
            <MdOutlineKeyboardArrowRight className="w-[20px] h-[20px] cursor-pointer hover:text-[#6d2b0a]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Title;
