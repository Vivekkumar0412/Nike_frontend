import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

function Footer() {
  return <footer className="max-container ">
    <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
      <div className="flex flex-col items-start">
        <a href="/">
          <img src={footerLogo} alt="footerLogo" width={150} height={46} />
        </a>
        <p className="mt-6 text-base leading-7 font-montserrat  text-white-400 sm:max-w-sm">Get your shoes ready at your terms at your near Nike store.</p>
        <div className="flex items-center gap-5 mt-8 ">
          {socialMedia.map((media)=>(
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={media.src} alt={media.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link)=>(
            <div key={link}>
              <h4 className="text-white font-montserrat text-2xl leading-normal mb-6 font-bold">{link.title}</h4>
              <ul>
                {link.links.map((data)=>(
                  <li  key={data.name} className="text-white-400 mt-3 font-montserrat leading-normal hover:text-slate-gray"><a href="">{data.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
    <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex lex-1 justify-start gap-2 items-center font-montserrat">
          <img src={copyrightSign} alt="copyrightSign"  width={20} height={20} className="rounded-full m-0"/>
          <p>All Rights reserved</p>
          </div>
          <p className="font-montserrat text-white-400 cursor-pointer">Terms and Conditions</p>
    </div>
  </footer>;
}

export default Footer;
