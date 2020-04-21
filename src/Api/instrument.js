import Http from '.';

const API = 'api/instruments';

class Instrument {
    static fetch(filters) {
        console.log(filters);
        const filterObj = new URLSearchParams(filters).toString();
        return Http.get(`${API}?${filterObj}`);
    }
    static deleteInstrument (id){
        return Http.delete(`${API}?${id}`);
    }
}

export default Instrument;
