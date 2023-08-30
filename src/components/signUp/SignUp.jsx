import React from "react";
import styles from "./SignUp.module.css";
import point from "../../assets/img/point.png";
import fb from "../../assets/img/fb.png";
import gg from "../../assets/img/gg.png";
import { SignUpData } from "../../model/SignUpData";

const SignUp = () => {
  return (
    <div className={styles["content-section-singup"]}>
      <div className={styles["signup-product-all"]}>
        <div className={styles["products-signup"]}>
          {SignUpData.map((item, index) => (
            <div key={index} className={styles["signup-infomation"]}>
              <p className={styles["title-signup"]}>{item.title}</p>
              <div className={styles["inf-title-free"]}>
                <img src={point} alt="" className={styles["icon"]} />
                <p>{item.titleFree}</p>
              </div>
              <div className={styles["inf-title-point"]}>
                <img src={point} alt="" className={styles["icon"]} />
                <p>{item.titlePoint}</p>
              </div>

              <div className={styles["inf-title-voucher"]}>
                <img src={point} alt="" className={styles["icon"]} />
                <p>{item.titleVoucher}</p>
              </div>
              <div className={styles["inf-title-upto"]}>
                <img src={point} alt="" className={styles["icon"]} />
                <p>{item.titleUpto}</p>
              </div>
            </div>
          ))}
          <div className={styles["input-infomation"]}>
            <div>
              <input
                className={styles["input-name"]}
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <input
                className={styles["input-adress"]}
                type="text"
                placeholder="Email Adress"
              />
            </div>
            <div>
              <input
                className={styles["input-password"]}
                type="text"
                placeholder="Password"
              />
            </div>
            <div className={styles["input-checkbox"]}>
              <input
                type="checkbox"
                id="vehicle"
                name="vehicle1"
                value="checkbox"
              />
              <label className={styles["inf-label"]} htmlFor="vehicle1">
                {" "}
                I agree to all the <strong>Terms</strong> and{" "}
                <strong>Privacy Policy</strong>
              </label>
            </div>
            <div className={styles["btn-signup-all"]}>
              <button className={styles["btn-signup"]}>SIGN UP</button>
            </div>
            <div className={styles["lines"]}>
              <p className={styles["or-with-lines"]}>Or</p>
            </div>
            <div className={styles["btn-signup-google"]}>
              <button className={styles["btn-google"]}>
                <img src={gg} alt="" className={styles["icon-gg"]} />
                SIGN UP WITH GOOGLE
              </button>
            </div>
            <div className={styles["btn-signup-facebook"]}>
              <button className={styles["btn-facebook"]}>
                <img src={fb} alt="" className={styles["icon-fb"]} />
                SIGN UP WITH FACEBOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
