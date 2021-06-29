import React from 'react'
import './Pagination.css'

export default function Pagination(props) {
    return (
        <div>
            <div className="container">
                <button className='prev btn' onClick={() => props.setPage(1)}>{"Prev"}</button>
                <span className='active'>{props.currPage}</span>
                <button className='next btn' onClick={() => props.setPage(2)}>{"Next"}</button>
            </div>
        </div>
    )
}
