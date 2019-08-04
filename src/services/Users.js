import RestClient from './restClient';

export default class Communications {
  fetchAll () {
    return RestClient.get ('api/accounts/all');
  }
  fetch (id) {
    return RestClient.get (`api/accounts/${id}`);
  }
  create (userDetails) {
    return RestClient.post (`api/accounts/create`, userDetails);
  }
  login (credentials) {
    return RestClient.post (`api/accounts/login`, credentials);
  }
  update (id, notes) {
    return RestClient.get (`api/accounts/${id}`, notes);
  }
  delete (id) {
    return RestClient.delete (`api/accounts/${id}`);
  }
}
