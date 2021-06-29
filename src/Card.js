import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <div className="card">
            <div className="avatar">
                <img src={props.avatar} alt="" />
            </div>

            <div className="name">
                {props.first_name}
                &nbsp;
                {props.last_name}
            </div>

            <div className="email">
                {props.email}
            </div>
        </div>
    )
}
