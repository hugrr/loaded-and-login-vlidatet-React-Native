import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, text } from "react-native-elements";
import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStructure, LoginOptions } from "./app/components/form/testForm";
import Preloader from "./app/components/preloader";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      testFormValue: {
        user: "",
        password: ""
      },
      testFormError: "",
      loaded: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 2000);
  }

  onChange = testFormValue => {
    this.setState({ testFormValue });

    console.log(testFormValue);
  };
  sendFormText = () => {
    const validate = this.refs.formtest.getValue();
    if (validate) {
      console.log("login correcto");
      this.setState({ testFormError: "" });
    } else {
      console.log("login incorrecto");
      this.setState({ testFormError: "rellena todos los campos" });
    }
  };

  render() {
    const { testFormValue, testFormError, loaded } = this.state;
    if (!loaded) {
      return <Preloader />;
    } else {
      return (
        <View style={styles.container}>
          <Form
            ref="formtest"
            type={LoginStructure}
            options={LoginOptions}
            value={this.state.testFormValue}
            onChange={v => this.onChange(v)}
          />
          <Button title="login" onPress={this.sendFormText.bind(this)} />
          <Text style={styles.testFormErrorText}>{testFormError} </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40
  },
  testFormErrorText: {
    color: "#f00",
    textAlign: "center",
    paddingTop: 30,
    fontSize: 20
  }
});
