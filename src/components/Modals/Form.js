import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { SendEmail } from '@/constants/endpoint';

const countries = [
  'UK',
  'USA',
  'Canada',
  'Finland',
  'Germany',
  'Malaysia',
  'Australia'
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone number is required'),
  passingYear: Yup.number().required('Passing year is required'),
  qualification: Yup.string().required('Qualification is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required')
});

function MyForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        passingYear: '',
        qualification: '',
        city: '',
        country: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          const response = await fetch(SendEmail, {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
          const res = await response.json();
          if (res.success) {
            toast.success('Form submited successfully');
            resetForm();
            setSubmitting(false);
          }
        } catch (e) {
          toast.error(e?.message || 'An error ocurred. Please try again later');
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="bg-transparent rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none text-base border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
            <ErrorMessage
              name="name"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <Field
              type="number"
              id="phone"
              name="phone"
              className="shadow appearance-none text-base border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your phone number"
            />
            <ErrorMessage
              name="phone"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="passingYear"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Passing Year
            </label>
            <Field
              type="number"
              id="passingYear"
              name="passingYear"
              className="shadow appearance-none border text-base rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your passing year"
            />
            <ErrorMessage
              name="passingYear"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="qualification"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Qualification
            </label>
            <Field
              type="text"
              id="qualification"
              name="qualification"
              className="shadow appearance-none border text-base rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your qualification"
            />
            <ErrorMessage
              name="qualification"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your City
            </label>
            <Field
              type="text"
              id="city"
              name="city"
              className="shadow appearance-none border text-base rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your city"
            />
            <ErrorMessage
              name="city"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Intrested Country
            </label>
            <Field
              as="select"
              id="country"
              name="country"
              className="shadow appearance-none text-base border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="country"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-primaryColor hover:bg-primaryColor/80 text-white font-bold text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-3"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;
