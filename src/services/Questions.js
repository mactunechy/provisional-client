import RestClient from './restClient';

export default class Communications {
  fetchAll () {
    return RestClient.get ('api/questions/all');
  }
  fetch (id) {
    return RestClient.get (`api/questions/${id}`);
  }
  create (questions) {
    return RestClient.post (`api/questions/create`, questions, true);
  }
  update (id, questions) {
    return RestClient.put (`api/questions/${id}`, questions, true);
  }
  delete (id) {
    return RestClient.delete (`api/questions/delete/${id}`);
  }
}
