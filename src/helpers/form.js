/* eslint-disable guard-for-in,guard-for-in,no-restricted-syntax */
/**
 * Created by salamaashoush on 29/04/17.
 */
import axios from 'axios';
import Errors from './errors';

class Form {
  constructor(data) {
    this.originalData = data;
    for (const prop in data) {
      this[prop] = data[prop];
    }
    this.errors = new Errors();
  }
  data() {
    const data = {};
    for (const prop in this.originalData) {
      data[prop] = this[prop];
    }
    return data;
  }
  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then((response) => {
          this.onSuccess(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          this.onFail(error.response.data);
          reject(error.response.data);
        });
    });
  }
  post(url) {
    this.submit('post', url);
  }
  delete(url) {
    this.submit('delete', url);
  }
  put(url) {
    this.submit('put', url);
  }
  reset() {
    for (const field in this.originalData) {
      this[field] = '';
    }
    this.errors.clear();
  }
  onSuccess(data) {
    console.log(data);
  }
  onFail(data) {
    this.errors.record(data);
  }

}
export default Form;
