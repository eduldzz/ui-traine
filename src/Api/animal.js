import Http from '.';

const API = 'api/animals';

class Animal {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
    
    static deleteAnimal (id){
        return Http.delete(`${API}?${id}`);
    }
}




export default Animal;
