import { Box, TextField, Button } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'

const phoneRegExp = /09(0[0-9]|1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required('این بخش نمیتواند خالی باشد!'),
  lastName: yup.string().required('این بخش نمیتواند خالی باشد!'),
  email: yup.string().email('ایمیل نامعتبر است!').required('این بخش نمیتواند خالی باشد!'),
  address1: yup.string().required('این بخش نمیتواند خالی باشد!'),
  address2: yup.string().required('این بخش نمیتواند خالی باشد!'),
  contact: yup.string().matches(phoneRegExp, 'شماره تماس بامعتبر است!').required('این بخش نمیتواند خالی باشد!'),
})

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  address1: "",
  address2: "",
  contact: "",
}

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const handleFormSubmit = (values) => {
    console.log(values)
  }


  return (
    <Box m="20px">
      <Header title="افزودن کاربر" subTitle="فرم افزودن کاربر جدید." />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="نام"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }} />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="نام خانوادگی"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ایمیل"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="شماره همراه"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="آدرس 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="آدرس 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                افزودن کاربر جدید
              </Button>
            </Box>
          </form>

        )}
      </Formik>
    </Box>
  )
}

export default Form