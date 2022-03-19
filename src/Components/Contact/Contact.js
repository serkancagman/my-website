import React from "react";
import style from "./style/contact.module.css";
import { bodyTags } from "../../Helpers/HelperItems";
import { useFormik } from "formik";
import validationSchema from "./Validation";
import ContactCanvas from "./ContactCanvas";
import { HiOutlineMailOpen } from "react-icons/hi";
const Contact = () => {
  const [isMessage, setIsMessage] = React.useState(false);
  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema,
      onSubmit: (values) => {
        setIsMessage(true);
        setTimeout(() => {
          setIsMessage(false);
        }, 3000);
      },
    });

  return (
    <section className={style.contactMain}>
      <div className="container">
        <span className={style.tags}>{bodyTags.body}</span>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className={style.contactWrapper}>
              <span className={style.tags}>{bodyTags.h1}</span>
              <h1 className={style.contactTitle}>
                <span className={style.letterAnimation}>C</span>
                <span className={style.letterAnimation}>o</span>
                <span className={style.letterAnimation}>n</span>
                <span className={style.letterAnimation}>t</span>
                <span className={style.letterAnimation}>a</span>
                <span className={style.letterAnimation}>c</span>
                <span className={style.letterAnimation}>t</span>
                <span className={style.letterAnimation}> </span>
                <span className={style.nameLetter}>M</span>
                <span className={style.nameLetter}>e</span>
              </h1>
              <span className={style.tags}>{bodyTags.h1Close}</span>

              <p className={style.contactText}>
                If you like my works and you think you have a good idea to work
                with me, contact me without waiting any longer!
              </p>

              <span className={style.tags}>{bodyTags.form}</span>

              <form onSubmit={handleSubmit} className="p-1">
                <div className="row justify-content-center align-items-center g-3">
                  <div className="col-md-6">
                    <input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className={`${style.contactInput} ${
                        errors.name && touched.name && style.errorInput
                      }`}
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="email"
                      type="text"
                      className={`${style.contactInput} ${
                        errors.email && touched.email && style.errorInput
                      }`}
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="subject"
                      type="text"
                      className={`${style.contactInput} ${
                        errors.subject && touched.subject && style.errorInput
                      }`}
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      rows="4"
                      cols="50"
                      wrap="soft"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="message"
                      className={`${style.contactInput} ${
                        errors.message && touched.message && style.errorInput
                      }`}
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <span className={style.tags}>{bodyTags.formClose}</span>
                <div className={style.contactButtonWrapper}>
                  <div className={style.contactButton}>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className={style.sendButton}
                    >
                      Send
                    </button>
                  </div>
                  <div className="d-flex mt-1 align-items-center">
                    <HiOutlineMailOpen className={style.mailIcon} />
                    <button
                      onClick={() =>
                        (window.location = "mailto:serkancagmann@gmail.com")
                      }
                      className={style.email}
                    >
                      serkancagmann@gmail.com
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <ContactCanvas />
          </div>
        </div>
        <span className={style.tags}>{bodyTags.bodyClose}</span>
      </div>
      {isMessage && (
        <div className={style.messageSuccess}>Message sent successfully!</div>
      )}
    </section>
  );
};

export default Contact;
