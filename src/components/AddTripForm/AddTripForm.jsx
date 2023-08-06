import React from 'react';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import css from './AddTripForm.module.css';

const initialValues = {
  city: '',
  start: '',
  end: '',
};

const AddTripForm = ({ togleModalOpen }) => {
    const handleSubmit = values => {
        console.log("🚀 ~ handleSubmit ~ values:", values)
        
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
            {/* <label className={css.lable} htmlFor="name">
            Pet’s name
          </label>
          <TextField
            placeholder="Type name pet"
            name="name"
            id="name"
            type="text"
          /> */}

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
              name="date"
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
              <button className={css.save} type="submit">
                Save
              </button>
              {/* <PawPrintBtn title="Next" type="submit" />
            <ArrowLeftBtn
              title="Back"
              type="button"
              handleBackClick={() => prev(values)}
            /> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTripForm;
