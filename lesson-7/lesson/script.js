class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

     async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error (`Could not featch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };   
    getAllCharacterc() {
        return this.getResourse('/characters?page=5&pageSize=10');
    } 
    getCharacterc(id) {
        return this.getResourse(`/characters/${id}`);
    }
    getAllHouses() {
        return this.getResourse('/houses?page=5&pageSize=10');
    }
    getHouses(id) {
        return this.getResourse(`/houses/${id}`);
    }
    getAllBooks() {
        return this.getResourse('/books');
    }
    getBooks(id) {
        return this.getResourse(`/books/${id}`);
    }
}

const got =new GotService ();

got.getAllCharacterc()
    .then(res => {
        res.forEach(item => console.log(item.name));
    }); 
got.getCharacterc(130)
    .then(res => console.log(res));

got.getAllHouses()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });
got.getHouses(20)
    .then(res => console.log(res));

got.getAllBooks()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });
got.getBooks(2)
    .then(res => console.log(res));