import Http from '.';

const API = 'api/countries';

class Country {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
    static deleteCountry (id){
        return Http.delete(`${API}?${id}`);
    }
}

export default Country;
