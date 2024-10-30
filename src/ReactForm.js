import React, { Component } from 'react'
import UserDetails from './UserDetails'
import './ReactForm.scss';
import { Link } from 'react-router-dom'
import { Switch, Route, Routes, useParams } from 'react-router-dom';

class ReactForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            inputEmailValue: '',
            inputPhoneValue: '',
            inputNameValue: '',
            inputAgeValue: '',
            phoneErrorMessage: '',
            emailErrorMessage: '',
            nameErrorMessage: '',
            ageErrorMessage: ''
        }
        
    }

    handleInput = (event) => {
        if (event.target.name === 'email') {
            this.setState({inputEmailValue: event.target.value})
        }   
        if (event.target.name === 'phone') {
            this.setState({inputPhoneValue: event.target.value})
        }  
        if (event.target.name === 'name') {
            this.setState({inputNameValue: event.target.value})
        }  
        if (event.target.name === 'age') {
            this.setState({inputAgeValue: event.target.value}, () => {console.log(this.state)})
        }   
    }

    handleFocusOutInput = (event) => {
        console.log(event)
        let currentErrorMessage = ''
        if (event.target.name === 'phone') {
            if (this.state.inputPhoneValue.length === 0) {
                currentErrorMessage = 'Please enter a phone number'
                this.setState({phoneErrorMessage: currentErrorMessage}, () => {console.log(this.state)})
            }
        }
        if (event.target.name === 'email') {
            if (this.state.inputEmailValue.length === 0) {
                currentErrorMessage = 'Please enter an E-mail'
                this.setState({emailErrorMessage: currentErrorMessage}, () => {console.log(this.state)})
            }
            if (this.state.inputEmailValue.length && !this.state.inputEmailValue.includes('@')) {
                currentErrorMessage = `Please include an '@' in the email address. ${this.state.inputEmailValue} is missing an '@'.`
                this.setState({emailErrorMessage: currentErrorMessage}, () => {console.log(this.state)})
            }
        }
        if (event.target.name === 'name') {
            if (this.state.inputNameValue.length === 0) {
                currentErrorMessage = 'Please enter your name'
                this.setState({nameErrorMessage: currentErrorMessage}, () => {console.log(this.state)})
            }
        }
        if (event.target.name === 'age') {
            if (this.state.inputAgeValue.length === 0) {
                currentErrorMessage = 'Please enter your age'
                this.setState({ageErrorMessage: currentErrorMessage}, () => {console.log(this.state)})
            }
            

        }
    }

    handleFocusInInput = (event) => {
        console.log('focusIn')
        if (event.target.name === 'email') {
            this.setState({emailErrorMessage: ''})
        }
        if (event.target.name === 'phone') {
            this.setState({phoneErrorMessage: ''})
        }
        if (event.target.name === 'name') {
            this.setState({nameErrorMessage: ''})
        }
        if (event.target.name === 'age') {
            this.setState({ageErrorMessage: ''})
        }
    }

    handleButton = (event) => {
        console.log(event)
        if (!this.state.inputAgeValue.length && !this.state.inputEmailValue.length && !this.state.inputNameValue.length && !this.state.inputPhoneValue.length) {
            this.setState({
                emailErrorMessage: 'Please enter the required details.',
                phoneErrorMessage: 'Please enter the required details.',
                nameErrorMessage: 'Please enter the required details.',
                ageErrorMessage: 'Please enter the required details.',
            })
        }
    }

  render() {
    return (
      <div className='reactFormContainer'>
        <div className='reactForm'>
            <div className='formContainer'>
                <h1 style={{textAlign: 'center'}}>React validation form</h1>
                <div className='form'>
                    <div className='inputField'>
                        <input name='email' 
                            type='text' 
                            placeholder='Email'
                            value={this.state.inputEmailValue}
                            onChange={this.handleInput}
                            maxlength="10"
                            onBlur={this.handleFocusOutInput}
                            onFocus={this.handleFocusInInput}
                        />
                        <p className='invalidFeedback' style={{display: this.state.emailErrorMessage.length > 0 ? 'block' : 'none', marginTop: '2px', color: '#E60000', fontSize: '10px', fontWeight: '500', lineHeight: '1.25rem', textAlign: 'left', verticalAlign: 'middle'}}>
                            {this.state.emailErrorMessage}
                        </p>
                    </div>
                    <div className='inputField'>
                        <input name='phone' 
                            type='text' 
                            placeholder='Phone'
                            value={this.state.inputPhoneValue}
                            onChange={this.handleInput}
                            maxlength="13"
                            onBlur={this.handleFocusOutInput}
                            onFocus={this.handleFocusInInput}
                        />
                        <p className='invalidFeedback' style={{display: this.state.phoneErrorMessage.length > 0 ? 'block' : 'none', marginTop: '2px', color: '#E60000', fontSize: '10px', fontWeight: '500', lineHeight: '1.25rem', textAlign: 'left', verticalAlign: 'middle'}}>{this.state.phoneErrorMessage}</p>
                    </div>
                </div>
                <div className='form'>
                    <div className='inputField'>
                        <input name='name' 
                            type='text' 
                            placeholder='name'
                            value={this.state.inputNameValue}
                            onChange={this.handleInput}
                            maxlength="10"
                            onBlur={this.handleFocusOutInput}
                            onFocus={this.handleFocusInInput}
                        />
                        <p className='invalidFeedback' style={{display: this.state.nameErrorMessage.length > 0 ? 'block' : 'none', marginTop: '2px', color: '#E60000', fontSize: '10px', fontWeight: '500', lineHeight: '1.25rem', textAlign: 'left', verticalAlign: 'middle'}}>{this.state.nameErrorMessage}</p>

                    </div>
                    <div className='inputField'>
                        <input name='age' 
                            type='number' 
                            placeholder='age'
                            value={this.state.inputAgeValue}
                            onChange={this.handleInput}
                            maxlength="2"
                            onBlur={this.handleFocusOutInput}
                            onFocus={this.handleFocusInInput}
                        />
                        <p className='invalidFeedback' style={{display: this.state.ageErrorMessage.length > 0 ? 'block' : 'none', marginTop: '2px', color: '#E60000', fontSize: '10px', fontWeight: '500', lineHeight: '1.25rem', textAlign: 'left', verticalAlign: 'middle'}}>{this.state.ageErrorMessage}</p>

                    </div>
                </div>
                <Routes>
                    <Route
                        exact 
                        path='/user-details'
                        Component={() => <UserDetails inputEmailValue={this.state.inputEmailValue} />}
                    />
                </Routes>
                <div style={{textAlign: 'center'}}>
                    <Link to={(this.state.inputAgeValue && this.state.inputEmailValue && this.state.inputNameValue && this.state.inputPhoneValue) ? '/user-details' : ''}  
                        className='button'
                        onClick={this.handleButton}
                    >Submit</Link>
                </div>
            </div>
        </div>               
      </div>
    )
  }
}
export default ReactForm