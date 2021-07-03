import React from 'react'
import './Pagination.css'

export default function Pagination({currPage, maxPage, minPage, setPage}) {

    return (
        <div>
            <div className="container">
                <button className={currPage===minPage ? 'prev btn disabled' : 'prev btn'} onClick={currPage===minPage ? null :() => setPage(currPage-1)}>{"Prev"}</button>
                <span className='active'>{currPage}</span>
                <button className={currPage===maxPage ? 'next btn disabled' : 'next btn'} onClick={currPage===maxPage ? null : () => setPage(currPage+1)}>{"Next"}</button>
            </div>
        </div>
    )
}
