export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

     getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Could not featch ${url}`+
             `, received: ${res.status}`);
        }
        return await res.json();
    };   
    getAllCharacterc = async() => {
        const res = await this.getResourse('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter)
    } 
    getCharacterc = async(id) => {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    getAllHouses = async () => {
        const res = await this.getResourse('/houses/');
        return res.map(this._transformCharacter)
    }
    getHouse = async (id) => {
        const house = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(house);
    }
    getAllBooks = async () => {
        const res = await this.getResourse('/books/');
        return res.map(this._transformCharacter)
    }
    getBook = async (id) => {
        const book = await this.getResourse(`/books/${id}`);
        return this._transformBook(book);
    }

    isiSet(data) {
        
        if (data) {
            return data
        } else {
            return 'нет данных :('
        }
    }

    _extarctId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extarctId(char),
            name: this.isiSet(char.name),
            gender: this.isiSet(char.gender),
            born: this.isiSet(char.born),
            died: this.isiSet(char.died),
            culture: this.isiSet(char.culture)
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._extarctId(house),
            name : this.isiSet(house.name),
            region: this.isiSet(house.region),
            words: this.isiSet(house.words),
            titles: this.isiSet(house.titles),
            overlord: this.isiSet(house.overlord),
            ancestralWeapons: this.isiSet(house.ancestralWeapons)
        }
    } 

    _transformBook = (book) => {
        return {
            id: this._extarctId(book),
            name: this.isiSet(book.name),
            numberOfPages: this.isiSet(book.numberOfPages),
            publister: this.isiSet(book.publister),
            released: this.isiSet(book.released)
        }
    }
}
