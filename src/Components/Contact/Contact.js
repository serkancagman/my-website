import React from "react";
import style from "./style/contact.module.css";
import { bodyTags } from "../../Helpers/HelperItems";
import { useFormik } from "formik";
import validationSchema from "./Validation";
const Contact = () => {
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
        console.log(values);
      },
    });

  return (
    <section>
      <div className="container">
        <span className={style.tags}>{bodyTags.body}</span>
        <div className="row">
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
              <span className={style.tags}>{bodyTags.paragraph}</span>
              <p className={style.contactText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur,
              </p>
              <span className={style.tags}>{bodyTags.paragraphClose}</span>
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="message"
                      className={`${style.contactInput} ${
                        errors.message && touched.message && style.errorInput
                      }`}
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className={style.contactButton}>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={style.sendButton}
                  >
                    Send
                  </button>
                </div>
              </form>
              <span className={style.tags}>{bodyTags.formClose}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
