import { Component } from 'react';
import BookDisplay from './components/BookDisplay';


class App extends Component {

  constructor () {
    console.log("making page!")
    super();
    this.state = {
      books: []
    }

  }

  componentDidMount = () => {
    fetch('http://localhost:4200/books')
      .then(response => response.json())
      .then(books => {
        console.log(books)
        this.setState({
          books: books 
        })
      })
  }

  render () {
    return (
      <div className="App">
        <BookDisplay books={this.state.books} />
      </div>
    );
  }
  
}

export default App;
