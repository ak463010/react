import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null,
            countery: null
        }
    }


    submitHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const countery = e.target.countery.value
        this.setState({ name, countery }, () => {
            console.log(this.state);
            e.target.reset()
            alert('Data Submited Successfully')
        })

    }
    render() {
        return (
            <div>
                <form action="" method="get" onSubmit={this.submitHandler}>
                    <h2>Form Handling</h2>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="" onKeyUp={this.nameChangeHandler} />
                    <br />
                    <label htmlFor="countery">Countery: </label>
                    <select name="countery">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <br />
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default Form