import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { string } from "yup/lib/locale";
import PhoneInput from "./components/PhoneInput/PhoneInput";
import phoneSchema from "./components/PhoneInput/Schema";

// import Home from "./components/Home";
// import About from "./components/About"; // static

const Home = lazy( () =>  import("./components/Home")) //lazy load'
const About =  lazy(() =>  import("./components/About")) //lazy load 


const RotersPath = {
  Home: "/home",
  About: "/about",
  Registration: "/registration",
  Error: "/404",
};

const Routes = [
  {
    path: RotersPath.Home,
    render: () => <Home />,
  },
  {
    path: RotersPath.About,
    render: () => <About />,
  },
  {
    path: RotersPath.Registration,
    render: () => <RegistrationForm />,
  },
  {
    path: RotersPath.Error,
    render: () => <p>ops... 404 Error!</p>,
  },
];



function App() {
  
  return (  
    <Suspense fallback={<p>loading...</p>}>
      <Router>
        <nav>
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={RotersPath.Registration}>Registration</Link>
          <AboutMe />
        </nav>
        <Switch>
          {Routes.map((i) => (
            <Route key={i.path} path={i.path} render={i.render} />
          ))}
          {/* <Route path="/about/:id" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route> */}

          <Redirect to={RotersPath.Error} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;

const registrationSchema = yup.object().shape({
  firstName: yup.string().matches(/^[A-Z][a-z A-Z]+/gm).required(),
  lastName: yup.string().required(),
  age: yup.number().positive().integer().max(100).required(),
  email: yup.string().email(),
  phone: phoneSchema,
});

function RegistrationForm() {
  return (
    <>
      <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: 0, 
        email: "",
        phone: "",
      }}
        validationSchema={registrationSchema}
        validateOnBlur
        onSubmit={(e) => console.log("submit", e)}
      >
        {({values, handleChange,}) => (
          <Form>
    
            <Field name="firstName" />
            <ErrorMessage name="firstName" />
            <Field name="lastName" />
            <ErrorMessage name="lastName" />
            {/* <Field name="age">
              

            </Field> */}

            <input name='age' value={values.age} onChange={handleChange} />
            <ErrorMessage name="age" />
            <Field name="email" />
            <ErrorMessage name="email" />
            <PhoneInput name='phone' onChange={handleChange} value={values.phone} />
            <ErrorMessage name="phone" />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}




function AboutMe() {
  const mat = useRouteMatch("/about/:id");
  console.log("id about me ", mat);

  return <Link to={"/about/asdasd"}>About ME </Link>;
}
