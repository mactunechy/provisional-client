import RestClient from './restClient';

export default class Communications {
  fetchAll () {
    return RestClient.get ('api/topics/all');
  }
  fetch (id) {
    return RestClient.get (`api/topics/${id}`);
  }
  create (topic) {
    return RestClient.post (`api/topics/create`, topic);
  }
  update (id, topic) {
    return RestClient.put (`api/topics/${id}`, topic);
  }
  delete (id) {
    return RestClient.delete (`api/topics/${id}`);
  }
}
