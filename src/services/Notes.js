import RestClient from './restClient';

export default class Communications {
  fetchAll () {
    return RestClient.get ('api/notes/all');
  }
  fetch (id) {
    return RestClient.get (`api/notes/${id}`);
  }
  create (notes) {
    return RestClient.post (`api/notes/create`, notes, true);
  }
  update (id, notes) {
    return RestClient.put (`api/notes/${id}`, notes, true);
  }
  delete (id) {
    return RestClient.delete (`api/notes/${id}`);
  }
}
