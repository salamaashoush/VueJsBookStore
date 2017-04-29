/**
 * Created by salamaashoush on 28/04/17.
 */
class Errors {
  constructor(errors) {
    this.errors = errors;
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
    delete this.errors[field];
  }
}
export default Errors;
