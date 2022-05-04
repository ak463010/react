import { Component } from "react";
import './Person.css'

class Person extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {

        return (
            <div className="container" onClick={this.props.remove}>
                <h3>Name: {this.props.name}</h3>
                <h3>Age: {this.props.age}</h3>
                <h3>Gender: {this.props.gender}</h3>
                
                <hr />
            </div>

        )
    }
}

export default Person;