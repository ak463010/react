import React, { Component } from 'react'
import styledComponents from 'styled-components'



class Register extends Component {
    constructor(props) {
        super(props)
        this.props = props

    }
    
    
    
    
    render() {

        const StyledButton = styledComponents.button`
            background-color: red;
            width: 100%;
            border: none;
            border-outline: none;
            color: white;
            display: block;
            height: 30px;
            margin-top: 30px;
        `

        const Div = styledComponents.div`
            background-color: red;
            width: 300px;
            height: 300px;
            margin-top: 30px;
        `


        let btnClasses = ['btn', 'm1']
        
        let btnText = 'Show Password';
        let passwordBox = 'password';

        if (this.props.showPass === true) {
            btnClasses.push('btn-success')
            passwordBox = 'password'
        } else {
            passwordBox = 'text'
            btnText = 'Hide Password'
            btnClasses.push('btn-danger')
        }



        return (
            <div className="container mt-2 p-3">
                <h2 className="text-center">Register</h2>
                <form action="" onSubmit={this.props.submit}>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input required type="text" name="name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input required type="email" name="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input required type={passwordBox} name="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn m-1 btn-primary">Register</button>
                        <button type="button" className={btnClasses.join(' ')} onClick={this.props.click}>{btnText}</button>
                        <StyledButton type="button">test</StyledButton>
                        <Div></Div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register
