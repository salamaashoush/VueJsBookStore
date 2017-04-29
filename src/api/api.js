/* eslint-disable dot-notation */
/**
 * Created by salamaashoush on 28/04/17.
 */
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

axios.defaults.headers.post['Content-Type'] = 'application/json';
if (localStorage.getItem('token')) {
  const token = localStorage.getItem('token').split(' ')[1];
  axios.post('api-token-verify/', {
    token,
  }).then((response) => {
    axios.defaults.headers.common['Authorization'] = response.data.token;
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('token', response.data.token);
  }).catch((err) => {
// eslint-disable-next-line no-console
    console.log('you need to login again');
// eslint-disable-next-line no-console
    console.log(err);
  });
}
export default {
  verfiyToken(token) {
    return axios.post('api-token-verify/', {
      token: token.split(' ')[1],
    }).then((response) => {
      axios.defaults.headers.common['Authorization'] = response.data.token;
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
    });
  },
  login(username, password) {
    return axios.post('api-token-auth/', {
      username,
      password,
    })
      .then((response) => {
        axios.defaults.headers.common['Authorization'] = response.data.token;
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
      });
  },
  register(user) {
    return axios.post('users/register/', user);
  },
  logedInUser() {
    return JSON.parse(localStorage.getItem('user'));
  },
  getBooks() {
    return axios.get('/books/');
  },
  getBook(bookId) {
    return axios.get(`/books/${bookId}`);
  },
  rateBook(bookId) {
    return bookId;
  },
  readBook(bookId) {
    return bookId;
  },
  getCategories() {
    return axios.get('/categories/');
  },
  getCategory(categoryId) {
    return axios.get(`/categories/${categoryId}`);
  },
  subscribeCategory(categoryId) {
    return categoryId;
  },
  getAuthors() {
    return axios.get('/authors/');
  },
  getAuthor(authorId) {
    return axios.get(`/authors/${authorId}`);
  },
  followAuthor(authorId) {
    return authorId;
  },
};
