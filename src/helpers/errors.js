/**
 * Created by salamaashoush on 28/04/17.
 */
class Errors {
  constructor() {
    this.errors = {};
  }
// eslint-disable-next-line consistent-return
  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }
  has(field) {
// eslint-disable-next-line no-prototype-builtins
    return this.errors.hasOwnProperty(field);
  }
  any() {
    return Object.keys(this.errors).length > 0;
  }
  record(errors) {
    this.errors = errors;
  }
  clear(field) {
    if (field){
      delete this.errors[field];
      return;
    };
    this.errors = {};
  }
}
export default Errors;
