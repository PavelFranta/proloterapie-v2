import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
const endpoints = {
  contact: "/api/send-email",
}
const axios = require("axios")
import '../css/form.css'

class Contact extends React.Component {

  state = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    const statesToUpdate = {}
    statesToUpdate[name] = value
    this.setState(statesToUpdate)
  }

  handleSubmit = (e) => {
    const { fullName, email, phone, message } = this.state
    const data = { fullName, email, phone, message }
    

    axios.post(endpoints.contact, JSON.stringify(data))
    .then(response => {
      if (response.status !== 200) {
        this.handleError(response.status)
      } else {
        this.handleSuccess()
      }
    }).catch(error => console.log(error));
    e.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      fullName: "",
      email: "",
      phone: "",
      message: "",
      loading: false,
      error: false,
    })
  }
  
  handleError = msg => {
    this.setState({
      loading: false,
      error: true,
      msg,
    })
  }

  render() {
    const { fullName, email, phone, message } = this.state;
    const translation = this.props.translation;
    
    return (
      <div className="bg-white">
        <ValidatorForm
          ref="form"
          className="max-w-screen-lg m-auto p-4"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <div className="flex flex-col md:flex-row md:gap-10 justify-center">
            <div className="flex-1">
              <TextValidator
                label={translation.formName}
                onChange={this.handleChange}
                name="fullName"
                value={fullName}
                validators={['required']}
                errorMessages={[translation.formNameError]}
              />
              <TextValidator
                label={translation.formTel}
                onChange={this.handleChange}
                name="phone"
                value={phone}
                validators={['required']}
                errorMessages={[translation.formTelError]}
              />
              <TextValidator
                label="E-mail"
                onChange={this.handleChange}
                name="email"
                validators={['isEmail']}
                value={email}
                errorMessages={[translation.formEmailError]}
              />
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <TextValidator
                label={translation.formBriefDescription}
                onChange={this.handleChange}
                rows={8}
                name="message"
                value={message}
                validators={['required']}
                variant="outlined"
                multiline
                errorMessages={[translation.formBriefDescriptionError]}
              />
            </div>
          </div>
          <Button variant="contained" color="primary" type="submit">
            {translation.formSend}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default Contact;