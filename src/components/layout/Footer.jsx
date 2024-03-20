import Logo from '../../assets/images/logo.png';
import Hour from '../../assets/images/24-hours.svg';
import Car from '../../assets/images/car.webp';
import Circle from '../../assets/images/circle.webp';
import Box from '../../assets/images/box.webp';
import List from '../../assets/images/list.webp';
function Footer() {
  const data = [
    {
      name: 'TRANG CHỦ',
    },
    {
      name: 'GIỚI THIỆU',
    },
    {
      name: 'SẢN PHẨM',
    },
    {
      name: 'TIN TỨC',
    },
    {
      name: 'DỊCH VỤ',
    },
    {
      name: 'LIÊN HỆ',
    },
  ];
  const bannerData = [
    {
      img: Car,
      title: 'Giao hàng miễn phí',
      des: '10km với đơn hàng từ 2tr',
    },
    {
      img: Circle,
      title: 'Hỗ trợ 24/7',
      des: 'Nhanh chóng thuận tiện',
    },
    {
      img: Box,
      title: 'Đổi hàng 7 ngày',
      des: 'Hấp dẫn chưa từng có',
    },
    {
      img: List,
      title: 'Giá tiêu chuẩn',
      des: 'Tiết kiệm 10% giá cả',
    },
  ];
  return (
    <>
      <div className="py-[30px] bg-[#6d2b0a] flex items-center justify-between 2xl:px-[20%] px-[10%] text-white">
        {bannerData.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <img
              src={item.img}
              alt="img"
              className="aspect-square w-[60px] [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] transition-all duration-500"
            />
            <div className="flex flex-col gap-2">
              <div>{item.title}</div>
              <div className="font-thin">{item.des}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center 2xl:px-[20%] px-[10%] py-10 ">
        <div className=" flex flex-col gap-2">
          <div>
            <img src={Logo} alt="Logo" className="aspect-square w-20" />
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm text-nowrap">
              {' '}
              Xưởng sản xuất:
            </span>
            <span className="text-sm text-nowrap">
              xã Hồng Quang, huyện Nam Trực, tỉnh Nam Định
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm text-nowrap"> Showroom 1:</span>
            <span className="text-sm text-nowrap">
              Km6, QL21, Cầu Vòi, xã Hồng Quang, Nam Trực, Nam Đinh{' '}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm text-nowrap"> Showroom 2: </span>
            <span className="text-sm text-nowrap">
              Số 18 liền kề 7, KĐT Văn Khê, Hà Đông, Hà Nội Showroom{' '}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm text-nowrap"> Showroom 3: </span>
            <span className="text-sm text-nowrap">
              42 Phạm Văn Xảo, Phú Thọ Hoà, Tân Phú, Tp. HCM{' '}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm text-nowrap"> Hotline: </span>
            <span className="text-sm text-nowrap">088.6666.45</span>
          </div>
        </div>
        <div className="  flex flex-col gap-2 text-sm">
          <div className="font-bold text-[#6d2b0a] text-base mb-2">
            VỀ CHÚNG TÔI
          </div>
          {data.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-[#6d2b0a] text-base">
            TỔNG ĐÀI HỖ TRỢ
          </div>
          <div className="flex items-center gap-2">
            <img src={Hour} alt="Hour" className="aspect-square w-[50px]" />
            <div className="text-xl font-bold">Hotline: 088.66666.45</div>
          </div>
          <div className="font-bold text-[#6d2b0a] text-base">
            NHẬN TIN KHUYẾN MÃI
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="bg-[#ebebeb] w-[150px] h-[34px] p-2"
              placeholder="Nhập Email..."
            />
            <button className="bg-[#6d2b0a] w-[70px] h-[34px] p-2 text-sm text-white">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#6d2b0a]  w-full text-white py-2 flex justify-center">
        <div>TÂM AN - VẠN PHÚC </div>
      </div>
    </>
  );
}

export default Footer;
