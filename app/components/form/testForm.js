import React from "react";

import t from "tcomb-form-native";
const Form = t.form.Form;
import Input from "./templates/input";

export const LoginStructure = t.struct({
  user: t.String,
  password: t.String
});

export const LoginOptions = {
  fields: {
    user: {
      template: Input,
      config: {
        placeholder: "introduce tu usuario",
        securyTextEntry: false,
        password: false,
        iconType: "font-awesome",
        iconName: "user"
      }
    },
    password: {
      template: Input,
      config: {
        placeholder: "introduce tu contraseña",
        securyTextEntry: true,
        password: true,
        iconType: "font-awesome",
        iconName: "lock"
      }
    }
  }
};
