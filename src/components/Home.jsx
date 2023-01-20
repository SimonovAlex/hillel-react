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


  export default Home;
