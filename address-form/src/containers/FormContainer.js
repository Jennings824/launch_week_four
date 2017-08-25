import React, { Component } from 'react'
import FirstName from '../components/FirstName'
import LastName from '../components/LastName'
import Address from '../components/Address'
import City from '../components/City'
import State from '../components/State'
import ZipCode from '../components/ZipCode'
import PhoneNumber from '../components/PhoneNumber'
import Email from '../components/Email'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      stateLivedIn: '',
      zipCode: '',
      phoneNumber: '',
      email: ''
    }
  }

  render() {
    return (
      <form className="callout" id="shipping-address-form">
        <h1>Shipping Address</h1>
        <FirstName
          firstName={this.firstName}
        />

        <LastName
          lastName={this.lastName}
        />

        <Address
          address={this.address}
        />

        <City
          city={this.city}
        />

        <State
          state={this.stateLivedIn}
        />


        <ZipCode
          zipCode={this.zipCode}
        />

        <PhoneNumber
          phoneNumber={this.phoneNumber}
        />

        <Email
          email={this.email}
        />

        <input type="submit" className="button" value="Submit "/>
      </form>
    )
  }
}

export default FormContainer
