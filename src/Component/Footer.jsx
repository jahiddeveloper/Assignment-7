import React from "react";
import x from "../assets/x-mail.png";
import l from "../assets/in.png";
import f from "../assets/meta.png";
import m from "../assets/mail.png";

const Footer = () => {
  return (
    <div className="bg-black font text-white mt-10 md:mt-20">
      <div className="md:w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-7 justify-items-center py-10 md:py-20">
          <div className="w-full">
            <h3 className="text-2xl font-bold text-center md:text-left">
              CS — Ticket System
            </h3>
            <p className="md:text-justify text-sm leading-6 mt-4 text-gray-400 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="w-full text-center">
            <h3 className="text-xl font-bold">Company</h3>
            <div className="mt-4 leading-10 text-gray-400">
              <a href="">About Us</a>
              <br />
              <a href="">Our Mision</a>
              <br />
              <a href="">Contact Saled</a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold">Services</h3>
            <div className="mt-4 leading-10 text-gray-400">
              <a href="">Products & Services</a>
              <br />
              <a href="">Customer Stories</a>
              <br />
              <a href="">Download Apps</a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold">Information</h3>
            <div className="mt-4 leading-10 text-gray-400">
              <a href="">Privacy Policy</a>
              <br />
              <a href="">Terms & Conditions</a>
              <br />
              <a href="">Join Us</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">Social Links</h3>
            <div className="mt-4 text-gray-400 leading-8">
              <div className="flex items-center">
                <img src={x} alt="" />
                <p className="ml-3">@CS — Ticket System</p>
              </div>
              <div className="flex items-center">
                <img src={l} alt="" />
                <p className="ml-3">@CS — Ticket System</p>
              </div>
              <div className="flex items-center">
                <img src={f} alt="" />
                <p className="ml-3">@CS — Ticket System</p>
              </div>
              <div className="flex items-center">
                <img src={m} alt="" />
                <p className="ml-3">support@cst.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-gray-700">
        <p className="text-gray-400 font-semibold text-center text-lg py-7">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
