import React from "react";
import styles from "./Contact.module.css";
import fb from "../../assets/img/fb.svg";
import ig from "../../assets/img/ig.svg";
import twt from "../../assets/img/twt.svg";
import yt from "../../assets/img/yt.svg";
import { ContactData } from "../../model/ContactData";
const Contact = () => {
  return (
    <div className={styles["content-contact-info"]}>
      <div className={styles["contact-info-all"]}>
        {ContactData.map((item, index) => (
          <div key={index} className={styles["contact-info-webside"]}>
            <div className={styles["about-contact-info"]}>
              <div className={styles["webside-name"]}>
                <div className={styles["title-contact"]}>
                  <p className={styles["title-contact-webside"]}>
                    {item.titleContact}
                  </p>
                  <p className={styles["title-contact-webside-kr"]}>
                    {item.titleContactKr}
                  </p>
                </div>
              </div>
              <div className={styles["about-us"]}>
                <div className={styles["title-about-us"]}>
                  <p className={styles["title-contact-about-us"]}>
                    {item.contactAboutUs}
                  </p>
                  <p className={styles["title-contact-news"]}>
                    {item.contactNews}
                  </p>
                  <p className={styles["title-contact-official"]}>
                    {item.contactOfficial}
                  </p>
                  <p className={styles["title-contact-company"]}>
                    {item.contactCompany}
                  </p>
                  <p className={styles["title-contact-careers"]}>
                    {item.contactCareers}
                  </p>
                </div>
              </div>
              <div className={styles["get-help"]}>
                <div className={styles["title-contact-get-help-all"]}>
                  <p className={styles["title-contact-get-help"]}>
                    {item.contactGetHelp}
                  </p>
                  <p className={styles["title-contact-faq"]}>
                    {item.contactFaq}
                  </p>
                  <p className={styles["title-contact-shipping"]}>
                    {item.contactShipping}
                  </p>
                  <p className={styles["title-contact-payment"]}>
                    {item.contactPayment}
                  </p>
                  <p className={styles["title-contact-returns"]}>
                    {item.contactReturns}
                  </p>
                  <p className={styles["title-contact-contact-us"]}>
                    {item.contactContactUs}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles["about-follow-us"]}>
              <div className={styles["follow-us"]}>
                <div className={styles["title-contact-follow-us"]}>
                  <p className={styles["title-contact-follow-us"]}>
                    {item.contactFllowUs}
                  </p>
                  <div className={styles["image-contact"]}>
                    <a href="">
                      <img src={fb} alt="" className={styles["icon-contact"]} />
                    </a>
                    <a href="">
                      <img src={ig} alt="" className={styles["icon-contact"]} />
                    </a>
                    <a href="">
                      <img
                        src={twt}
                        alt=""
                        className={styles["icon-contact"]}
                      />
                    </a>
                    <a href="">
                      <img src={yt} alt="" className={styles["icon-contact"]} />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles["general-info"]}>
                <div className={styles["terms-conditions-privacy"]}>
                  <p className={styles["title-contact-guide"]}>
                    {item.contactGuide}
                  </p>
                  <p className={styles["title-contact-terms"]}>
                    {item.contactTerms}
                  </p>
                  <p className={styles["title-contact-privacy"]}>
                    {item.contactPrivacy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
