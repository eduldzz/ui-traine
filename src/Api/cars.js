import Http from '.';

const API = 'api/cars';

class Car {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
    static deleteCar (id){
        return Http.delete(`${API}?${id}`);
    }
}

export default Car;
