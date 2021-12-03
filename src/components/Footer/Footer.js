import React from "react";
import "../Footer/Footer.css";
import {
  RiInstagramFill,
  RiTelegramFill,
  RiWhatsappFill,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="mt-5 text footer py-4">
      <div className="d-flex justify-content-between align-items-end gap-5 container">
        <div className="fs-1 d-flex gap-4">
          <div>
            <RiInstagramFill />
          </div>
          <div>
            <RiTelegramFill />
          </div>
          <div>
            <RiWhatsappFill />
          </div>
        </div>

        <div className="d-flex flex-column">
          <h1 className="fw-bold fs-5">GOODSMILE SHOP</h1>
          <h1 className="fs-5">
            © 2021 GOOD SMILE COMPANY, INC All Right Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};
