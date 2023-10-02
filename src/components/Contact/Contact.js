import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact_sec" id="contact">
      <div className="component arrowscope_container">
        <div className="contact_sec_header">
          <h2 className="contact_sec_heading">Get In Touch With Us</h2>
          <p className="contact_sec_para">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>

        <div className="contact_form__container">
          <form action="#">
            <div className="formfield_cnt">
              <label htmlFor="fname">Your Name</label>
              <input className="formfield" type="text" id="name" name="name" />
            </div>
            <div className="formfield_cnt">
              <label htmlFor="fname">Your Email ID</label>
              <input
                className="formfield"
                type="text"
                id="email"
                name="email"
              />
            </div>

            <div className="formfield_cnt">
              <label htmlFor="fname">Subject</label>
              <input
                className="formfield"
                type="text"
                id="email"
                name="email"
              />
            </div>

            <div className="formfield_cnt">
              <label htmlFor="fname">Message</label>
              <textarea
                className="formfield"
                name="message"
                id="message"
                rows="5"
                placeholder=""
              ></textarea>
            </div>

            <div className="formfield_cnt">
              <input
                className="formfield_btn"
                type="button"
                id="email"
                name="email"
                value="SEND YOUR MESSAGE"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
