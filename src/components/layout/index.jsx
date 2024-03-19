import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaPhone } from 'react-icons/fa6';
import { SiZalo } from 'react-icons/si';
import { FaFacebookMessenger } from 'react-icons/fa';

Layout.propTypes = {
  children: React.ReactNode,
};

function Layout(props) {
  return (
    <div className="relative">
      <Header />
      {props.children}
      <Footer />
      <div className="fixed right-5 bottom-10 z-[9999999] space-y-5">
        <div className="relative  w-[40px] h-[40px] bg-gradient-to-r from-[#6d2b0a] to-[#6d2b0a] rounded-full ">
          <div className=" w-full h-full flex items-center justify-center cursor-pointer">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-[#6d2b0a] to-[#6d2b0a] opacity-20"></span>
            <FaPhone className="text-white w-[20px] h-[20px]" />
          </div>
        </div>
        <div className="relative  w-[40px] h-[40px] bg-gradient-to-r from-[#6d2b0a] to-[#6d2b0a] rounded-full cursor-pointer">
          <div className=" w-full h-full flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-[#6d2b0a] to-[#6d2b0a] opacity-20"></span>
            <SiZalo className="text-white w-[20px] h-[20px]" />
          </div>
        </div>
        <div className="relative  w-[40px] h-[40px] bg-gradient-to-r from-[#6d2b0a] to-[#6d2b0a] rounded-full cursor-pointer">
          <div className=" w-full h-full flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-[#6d2b0a] to-[#6d2b0a] opacity-20"></span>
            <FaFacebookMessenger className="text-white w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
