import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
const endpoints = {
  contact: "/.netlify/functions/sendEmail",
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

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    const statesToUpdate = {}
    statesToUpdate[name] = value
    this.setState(statesToUpdate)
  }

  handleSubmit = e => {
    const { fullName, email, phone, message } = this.state
    const data = { fullName, email, phone, message }
  
    axios.post(endpoints.contact, JSON.stringify(data)).then(response => {
      if (response.status !== 200) {
        this.handleError(response.status)
      } else {
        this.handleSuccess()
      }
    })
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
                label="Jméno a příjmení"
                onChange={this.handleChange}
                name="fullName"
                value={fullName}
                validators={['required']}
                errorMessages={['Jak Vám máme říkat?']}
              />
              <TextValidator
                label="Telefon"
                onChange={this.handleChange}
                name="phone"
                value={phone}
                validators={['required']}
                errorMessages={['Kam Vám můžeme zavolat?']}
              />
              <TextValidator
                label="E-mail"
                onChange={this.handleChange}
                name="email"
                validators={['isEmail']}
                value={email}
                errorMessages={['Je tento email správný?']}
              />
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <TextValidator
                label="Krátký popis potíží"
                onChange={this.handleChange}
                rows={8}
                name="message"
                value={message}
                validators={['required']}
                variant="outlined"
                multiline
                errorMessages={['Co Vás trápí ?']}
              />
            </div>
          </div>
          <Button variant="contained" color="primary" type="submit">ODESLAT</Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default Contact;