import React, { Component } from 'react'
import Register from './Register/Register.js'
import Getting from './Register/Geting.js'


class ControlledComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isRegistred: false,
            name: null,
            email: null,
            password: null,
            isShowPass: false,
        }
    }

    registrationHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        this.setState({name, email, password, isRegistred: true})
    }

    showPasswordHandler = () => {
        this.setState({ isShowPass: !this.state.isShowPass })
    }

    render() {
        return (
            <div>
                {
                    this.state.isRegistred ? <Getting name={this.state.name} email={this.state.email} /> : <Register submit={this.registrationHandler} showPass={this.state.isShowPass} click={this.showPasswordHandler} />
                }
            </div>
        )
    }
}


export default ControlledComponent;