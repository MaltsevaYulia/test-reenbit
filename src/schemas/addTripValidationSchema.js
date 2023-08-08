import * as Yup from 'yup';

export const addTripValidationSchema = Yup.object().shape({
  city: Yup.string().required('City is required'),
  start: Yup.string()
    .matches(
      /^(20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      'The date must be in the format "YYYY-MM-DD"'
    )
    .required('Start date is required')
    .test(
      'is-within-15-days',
      'The end date must be within 15 days of the current date',
      function (value) {
        if (!value) return true; 
        const startDate = new Date(value);
        const currentDate = new Date();
        const fifteenDaysLater = new Date();
        fifteenDaysLater.setDate(currentDate.getDate() + 14);
        return startDate >= currentDate && startDate <= fifteenDaysLater;
      }
    ),

  end: Yup.string()
    .matches(
      /^(20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      'The date must be in the format "YYYY-MM-DD"'
    )
    .required('End date is required')
    .test(
      'is-within-15-days',
      'The end date must be within 15 days of the current date',
      function (value, context) {
        if (!value) return true; 
        const endDate = new Date(value);
        const startDate = new Date(context.parent.start);
        const fifteenDaysLater = new Date(startDate);
        fifteenDaysLater.setDate(startDate.getDate() + 14);
        return endDate >= startDate && endDate <= fifteenDaysLater;
      }
    ),
});
