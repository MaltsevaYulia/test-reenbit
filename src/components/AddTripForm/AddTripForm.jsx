import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import { nanoid } from 'nanoid';

import { fetchCities } from 'servises/citiesAPI';
import { addTrip } from 'redux/operations';
import { fetchCityImage } from 'servises/fetchCityImage';
import { addTripValidationSchema } from 'schemas/addTripValidationSchema';
import css from './AddTripForm.module.css';

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

  const handleSubmit = async (values) => {
    const id = nanoid();
        const imgUrl = await fetchCityImage(values.city);

    dispatch(addTrip({ ...values, id, url: imgUrl }));
    togleModalOpen(false);
  };

  const currentDate = new Date();
  const maxEndDate = new Date();
  maxEndDate.setDate(currentDate.getDate() + 15);

  return (
    <div className={css.container}>
      <h3 className={css.title}>Create Trip</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addTripValidationSchema}
      >
        {() => (
          <Form>
            <div className={css.form}>
              <label className={css.lable} htmlFor="city">
                City
              </label>
              <Field
                as="select"
                className={css.input}
                name="city"
                component="select"
              >
                <option value="">Select a city</option>
                {cityOptions.map((city, index) => (
                  <option key={index} value={city.city}>
                    {city.city}
                  </option>
                ))}
              </Field>
              <ErrorMessage className={css.error} name="city" component="div" />

              <label className={css.lable} htmlFor="start">
                Start date
              </label>
              <Field
                className={css.input}
                name="start"
                type="date"
                placeholder="Select date"
                min={currentDate.toISOString().split('T')[0]}
                max={maxEndDate.toISOString().split('T')[0]}
                
              />
              <ErrorMessage
                className={css.error}
                name="start"
                component="div"
              />

              <label className={css.lable} htmlFor="end">
                End date
              </label>
              <Field
                className={css.input}
                name="end"
                type="date"
                placeholder="Select date"
                min={currentDate.toISOString().split('T')[0]}
                max={maxEndDate.toISOString().split('T')[0]}
              />
              <ErrorMessage className={css.error} name="end" component="div" />
            </div>
            <div className={css.btnWrapper}>
              <button
                className={css.cancel}
                type="button"
                onClick={() => togleModalOpen(false)}
              >
                Cancel
              </button>
              <button className={css.save} type="submit">
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
