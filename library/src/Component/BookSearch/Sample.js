import React, { useState } from "react";
import { v4 } from 'uuid';
import BookItem from "../BookItem/Sample1";
import './Sample.css';
import Nav from "../Nav";

const BookSearch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [SearchResults, setSearchResults] = useState([])
    const getSearchResults = async () => {
        const response = await fetch(`https://apis.ccbp.in/book-store?title=${searchTerm}`)
        const data = await response.json()
        const updatedData = data.search_results.map(each => ({
            id: v4(), author: each.author,
            imageLink: each.imageLink,
            title: each.title
        }))
        setSearchResults(updatedData)
    }
    console.log(setSearchResults);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            getSearchResults()
        }
    }
    return (
        <div>
            <Nav />
            <div id="head">
                <header> <h3>A room without books is like a body without soul . </h3>
                    <input onKeyDown={handleKeyDown} onChange={(e => setSearchTerm(e.target.value))} type="search" placeholder="Enter Book Name"></input>
                </header>
                <main>
                    <ul className="bookitem">{SearchResults.map(each => <BookItem key={each.id} bookDetails={each} />)}</ul>
                </main>
            </div>
        </div>
    )
}
export default BookSearch