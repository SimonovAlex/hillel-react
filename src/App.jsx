import React from "react";
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

const RotersPath = {
  Home: "/home",
  About: "/about/:id",
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
    <>
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
    </>
  );
}

export default App;

const registrationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().positive().integer().max(100).required(),
  email: yup.string().email(),
  phone: yup.string(),
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
        {({values, handleChange}) => (
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
            <Field name="phone" />
            <ErrorMessage name="phone" />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

function Home() {
  const location = useLocation();
  console.log("location", location);
  return (
    <>
      <p>Home</p>
      <Link to="/home/testHome">testHome</Link>
      <Route path={"/home/testHome"}>
        {" "}
        <p>test home second route</p>{" "}
      </Route>
    </>
  );
}

function About() {
  // const location = useLocation();
  // const {id} = useParams();
  // console.log('location', location, id);

  return <p>About</p>;
}

function AboutMe() {
  const mat = useRouteMatch("/about/:id");
  console.log("id about me ", mat);

  return <Link to={"/about/asdasd"}>About ME </Link>;
}
