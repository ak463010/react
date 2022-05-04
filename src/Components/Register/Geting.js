import React from 'react'

function Geting(props) {
    return (
        <div className="container mt-2 p-3">
            <h3>{ props.name }</h3>
            <h3>Your Registration Successfully</h3>
            <h3>Verfication link Sent {props.email}</h3>
        </div>
    )
}


export default Geting;