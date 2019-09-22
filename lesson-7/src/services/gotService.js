export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

     async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Could not featch ${url}`+
             `, received: ${res.status}`);
        }
        return await res.json();
    };   
    getAllCharacterc() {
        return this.getResourse('/characters?page=5&pageSize=10');
    } 
    getCharacterc(id) {
        return this.getResourse(`/characters/${id}`);
    }
}
