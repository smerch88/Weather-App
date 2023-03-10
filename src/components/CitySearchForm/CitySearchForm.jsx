import { useTheme } from '@mui/material';
import { Box, Button, CircularProgress, TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCityCoordinates } from 'redux/weather/weather-operations';
import { getIsLoadingCities } from 'redux/weather/weather-selectors';

import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  city: yup.string('Enter City Name').required('City Name is Required'),
  state: yup.string('Enter State Name'),
  country: yup.string('Enter Country Name'),
});

export const CitySearchForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingCities);
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      city: '',
      state: '',
      country: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const cityName = {
        city: values.city,
        state: values.state,
        country: values.country,
      };
      dispatch(fetchGetCityCoordinates(cityName));
    },
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          gap: 1,
        }}
      >
        <TextField
          sx={{ marginBottom: theme.spacing(1) }}
          fullWidth
          id="city"
          name="city"
          label="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          sx={{ marginBottom: theme.spacing(1) }}
          fullWidth
          id="state"
          name="state"
          label="State"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
        />
        <TextField
          sx={{ marginBottom: theme.spacing(1) }}
          fullWidth
          id="country"
          name="country"
          label="Country"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ position: 'relative' }}
        >
          Submit
          {isLoading && (
            <CircularProgress
              size={24}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
                color: 'rgba(255,255,255,0.5)',
              }}
            />
          )}
        </Button>
      </Box>
    </>
  );
};
