/**
 * Created by salamaashoush on 28/04/17.
 */
export default {
  constructor(errors) {
    this.errors = errors;
  },
  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
    return false;
  },
  record(errors) {
    this.errors = errors;
  },
};
