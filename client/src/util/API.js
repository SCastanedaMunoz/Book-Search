import axios from "axios";

const API = {
  getBooks: (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  saveBook: (bookData) => {},
  deleteBook: (id) => {},
  getSavedBooks: () => {},
};

export default API;
