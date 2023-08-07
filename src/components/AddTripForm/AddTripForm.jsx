import React, { useState } from 'react';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import css from './AddTripForm.module.css';
import { useEffect } from 'react';
import { fetchCities } from 'servises/citiesAPI';
import { useDispatch } from 'react-redux';
import { addTrip } from 'redux/operations';
import { nanoid } from 'nanoid';
import { fetchCityImage } from 'servises/fetchCityImage';

const initialValues = {
  city: '',
  start: '',
  end: '',
};

const AddTripForm = ({ togleModalOpen }) => {
  const [cityOptions, setCityOptions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCityOptions() {
      const cities = await fetchCities();
      setCityOptions(cities);
    }
    fetchCityOptions();
  }, []);

  const handleSubmit = async values => {
    const id = nanoid();
    console.log('🚀 ~ handleSubmit ~ values:', values);
    // const selectedCity = cityOptions.find(({ city }) => city === values.city);
  const imgUrl= await fetchCityImage(values.city);
    console.log("🚀 ~ handleSubmit ~ imgUrl:", imgUrl)
    dispatch(addTrip({ ...values, id, url: imgUrl }));
    togleModalOpen(false);
  };

  return (
    <div>
      <h2>Create Trip</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        //   validationSchema={stepTwoValidationSchema}
      >
        {({ values }) => (
          <Form className={css.form}>
            <label className={css.label} htmlFor="city">
              City
            </label>
            <Field
              as="select"
              className={css.input}
              name="city"
              component="select"
              // placeholder="Select a city"
            >
              <option  value="">Select a city</option>
              {cityOptions.map((city, index) => (
                <option key={index} value={city.city}>
                  {city.city}
                </option>
              ))}
            </Field>
            <ErrorMessage className={css.error} name="city" component="div" />

            <label className={css.lable} htmlFor="date">
              Start date
            </label>
            <Field
              className={css.input}
              name="start"
              type="date"
              placeholder="Select date"
            />
            <ErrorMessage className={css.error} name="date" component="div" />

            <label className={css.lable} htmlFor="date">
              End date
            </label>
            <Field
              className={css.input}
              name="end"
              type="date"
              placeholder="Select date"
            />
            <ErrorMessage className={css.error} name="date" component="div" />
            <div className={css.btnWrapper}>
              <button
                className={css.cancel}
                type="button"
                onClick={() => togleModalOpen(false)}
              >
                Cancel
              </button>
              <button className={css.save} type="submit" >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTripForm;
