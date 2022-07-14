import { Component } from "react";





class BookDisplay extends Component {
    constructor () {
        super();
        this.state = {
            sortAuthor: '',
            sortName: '',
            sortLanguage: '',
            displayBooks: []
        }
    }

    changeStateFilter = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sortBooks = async () => {
        let booksFound = this.props.books;
        let filteredBooks = booksFound;
        if(this.state.sortLanguage) {
            filteredBooks = await booksFound.filter((book) => {
                return book.language.includes(this.state.sortLanguage) && book.title.includes(this.state.sortName) && book.author.includes(this.state.sortAuthor)
            })
            console.log(filteredBooks)
        }
        this.setState({
            displayBooks: filteredBooks
        })
    }

    componentDidMount = () => {
        this.sortBooks()
    }

    render () {
        
        

        let shownBookElements = this.state.displayBooks.map((book, index) => {
            let bookName = `${book.title}-${index}`;
            return (
                <li key={bookName} className="bookItem">
                    <b className="bookTitle">{book.title}</b>
                    <i className="bookYear">{book.year}</i>
                    <div className="bookDetails">
                        <span className="bookDetailSides">By: {book.publisher}</span>
                        <span className="bookDetailSides">{book.pages} pages</span>
                    </div>
                    <img className="bookImage" src={book.imageURL} alt=""></img>
                </li>
            )
        })

        return (
            <div>
                <div className="searchBars">
                    <div className="searchBarInput">
                        <span>Search by language: </span>
                        <input name="sortLanguage" onChange={this.changeStateFilter} type="text"/>
                    </div>
                    <div className="searchBarInput">
                        <span>Search by author: </span>
                        <input name="sortAuthor" onChange={this.changeStateFilter} type="text"/>
                    </div>
                    <div className="searchBarInput">
                        <span>Search by title: </span>
                        <input name="sortName" onChange={this.changeStateFilter} type="text"/>
                    </div>
                    <button onClick={this.sortBooks}>Search</button>
                </div>
                <ul className="bookList">
                    {shownBookElements}
                </ul>
            </div>
            
        )
    }
}

export default BookDisplay;