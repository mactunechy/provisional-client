import RestClient from './restClient'


export default class Communications {
    fetchAll(){
        return RestClient.get('/api/notes/all');
        
    }
    fetch(id){
        return RestClient.get(`/api/notes/${id}`)
    }
    create(notes) {
        return RestClient.post(`/api/notes`,notes)
    }
    update(id,notes){
        return RestClient.get(`/api/notes/${id}`,notes)
    }
    delete(id) {
        return RestClient.delete(`/api/notes/${id}`)
    }


}

