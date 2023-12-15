import React, { useState } from 'react';
import { arrowLeft } from "../../Icons/Icons";
import axios from 'axios';
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Socials } from "../../Socials/Socials";
import './Cta.scss';
import Popup from '../../Popup/Popup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

export const Cta = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className='cta' id='subscribe'>
      <div className="wrap">
        <h2 className="title">
          <span>
            Join the
          </span>
          <span>
            Chain Joes
          </span>
        </h2>
        {Socials}
        <div className="newsletter">
          <h2 className="title">
            Stay up-to-date with the latest Chain Joes news and promotions by subscribing today!
          </h2>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              axios.post('http://79.137.203.212:8044/sub', {
                email: values.email
              })
              .then(response => {
                console.log(response.data);
                resetForm();
                setShowPopup(true);
              })
              .catch(error => {
                console.error(error);
              });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="text">
                  Just send us your contact email and we will contact you.
                </div>

                <label htmlFor="email" className={touched.email && errors.email ? 'error' : ''}>
                  <span>Your email</span>
                  <Field type="text" id="email" name="email"/>
                  <button type="submit">
                    {arrowLeft}
                  </button>
                </label>

                <ErrorMessage name="email" component="div" className="error" />
              </Form>
            )}
          </Formik>
        </div>
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      </div>
    </section>
  );
};
