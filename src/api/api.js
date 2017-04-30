/* eslint-disable dot-notation */
/**
 * Created by salamaashoush on 28/04/17.
 */
import axios from 'axios';

axios.defaults.baseURL = 'https://djangobooks.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
  checkLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  },
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
    return axios.get(`/books/${bookId}/`);
  },
  readBook(bookId) {
    return axios.get(`/books/${bookId}/read`);
  },
  getCategories() {
    return axios.get('/categories/');
  },
  getCategory(categoryId) {
    return axios.get(`/categories/${categoryId}/`);
  },
  subscribeCategory(categoryId) {
    return axios.post(`/categories/${categoryId}/subscribe/`);
  },
  getAuthors() {
    return axios.get('/authors/');
  },
  getAuthor(authorId) {
    return axios.get(`/authors/${authorId}/`);
  },
  followAuthor(authorId) {
    return axios.post(`/authors/${authorId}/follow/`);
  },
};
