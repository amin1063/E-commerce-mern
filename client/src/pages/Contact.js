import React from "react";
import Layout from "./../componants/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <div className="col-md-6">
        <img
            src="/images/contact.jpg"
            alt="contact.jpg"
            style={{ maxWidth: "400px", maxHeight: "400px", width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-md-4">
          <h2>Contact Information</h2>
          <p>
            <BiMailSend /> Email: shaikhamin795@gmail.com.com
          </p>
          <p>
            <BiPhoneCall /> Phone: +918770552737
          </p>
          <p>
            <BiSupport /> Support: shaikhamin@support.com
          </p>
          <p>
            Feel free to reach out to us for any inquiries or assistance you
            may need.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
