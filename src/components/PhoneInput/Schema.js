import * as yup from "yup";

const phoneSchema = yup.string().test({
  name: "is Ukrainien number",
  test: (value, options) => {
    return value.startsWith("+38");
  },
  message: "is not ukie",
});

export default phoneSchema;
