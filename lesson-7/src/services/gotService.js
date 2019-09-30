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
    async getAllCharacterc() {
        const res = await this.getResourse('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter)
    } 
    async getCharacterc(id) {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    async getAllHouses() {
        const res = await this.getResourse('/houses/');
        return res.map(this._transformCharacter)
    }
    async getHouses(id) {
        const houses = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(houses);
    }
    async getAllBooks() {
        const res = await this.getResourse('/books/');
        return res.map(this._transformCharacter)
    }
    async getBooks(id) {
        const books = await this.getResourse(`/books/${id}`);
        return this._transformBook(books);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house){
        return {
            name :house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    } 

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publister: book.publister,
            released: book.released
        }
    }
}
