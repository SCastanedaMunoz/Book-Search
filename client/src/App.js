import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import API from "./util/API";

import { useState, useRef } from "react";

function App() {
  const searchInput = useRef(null);
  const [lastSearch, setLastSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);

  const onSearch = () => {
    const newSearch = searchInput.current.value;
    setLastSearch(newSearch);
    API.getBooks(newSearch).then(({ data }) => {
      setBooks(data.items);
    });
  };

  const onSaveBook = (id) => {
    const targetBook = books.find((book) => book.id === id);

    const volumeInfo = targetBook.volumeInfo;

    const title = volumeInfo.title;
    const subtitle = volumeInfo.subtitle;
    const authors = volumeInfo.authors;
    const description = volumeInfo.description;
    const image = volumeInfo.imageLinks
      ? volumeInfo.imageLinks.thumbnail
      : "https://via.placeholder.com/128x197?text=Image+Not+Found";
    const link = volumeInfo.previewLink;

    API.saveBook({
      title: title,
      subtitle: subtitle,
      authors: authors,
      description: description,
      image: image,
      link: link
    })
  };

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Header />
          <Books
            searchRef={searchInput}
            onSearch={onSearch}
            onSave={onSaveBook}
            books={books}
          />
        </Route>
        <Route exact path="/saved">
          <Header />
          <Saved />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
