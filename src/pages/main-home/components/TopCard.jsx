
import Image from '../../../assets/images/bình-tứ-quý-màu-vàng-tây-2-2048x1365.jpg'
import Image2 from '../../../assets/images/dèn-rồng-phượng-2048x1365.jpg'
import Image3 from '../../../assets/images/dèn-dứa-4-2048x1365.jpg'
import Image4 from '../../../assets/images/bat-huong.jpeg'
function TopCard() {
  const listItem = [
    {text: "Bình Tứ Quý", icon: Image},
    {text: "Đèn Rồng Phượng", icon: Image2},
    {text: "Đèn Dứa", icon: Image3},
    {text: "Bát Hương", icon: Image4}
  ]
  return (
    <div className="flex justify-center drop-shadow-md w-full">
      {listItem.map((item, index) => (
        <div key={index} className="py-10 bg-white border-l-2 w-full">
          <div className='flex justify-center cursor-pointer'>
            <img
              src={item.icon}
              alt={item.text}
              className="w-[80px] h-[80px]"
            />
          </div>
          <h1 className='flex justify-center hover:text-[#6d2b0a] mt-3 cursor-pointer'>{item.text.toLocaleUpperCase()}</h1>
        </div>
      ))}
    </div>
  );
}
export default TopCard;
