import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const Login = () => {
    const LoginSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required')
    });
    return(
        <>
        <Header/>
      <div className='container'> 
      <div className="app--login">
        <h2>Please Login</h2>
        <Formik
         initialValues={{
           email: '',
           password:''
         }}
         validationSchema={LoginSchema}
         onSubmit={values => {
           // same shape as initial values
           console.log(values);
         }}
       >
         {({ errors, touched }) => (
           <Form>
            <Field name="email" type="email" placeholder="Email"/>
             {errors.email && touched.email ? <div>{errors.email}</div> : null}
             <Field name="password" type="password" placeholder="Password"/>
             {errors.password && touched.password ? <div>{errors.password}</div> : null}
             <button type="submit">Login</button>
           </Form>
         )}
       </Formik>
        <p>Don't have an account? <a href="/register">Sign up</a></p>
      </div>
      </div>
      <Footer/>
      </>
    )
  }

export default Login;
