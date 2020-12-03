import React from 'react'
import './LoginInput.css'
export default function LoginInput({name}) {
    return (
        <div className="input_cover">
            <div className="login_label">{name}</div>
            <input className="login_input" ></input>
        </div>
    )
}
