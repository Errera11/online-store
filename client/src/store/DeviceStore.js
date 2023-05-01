import {makeAutoObservable} from "mobx";

export class DeviceStore {

    constructor() {
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},


        ]
        this._devices = [
            {id: 1, name: 'example', price: 1000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYz2huNWs1qzjomU38a88RbCqDoddasQv6Gw&usqp=CAU'},
            {id: 2, name: 'example', price: 1000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYz2huNWs1qzjomU38a88RbCqDoddasQv6Gw&usqp=CAU'},
            {id: 3, name: 'example', price: 1000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYz2huNWs1qzjomU38a88RbCqDoddasQv6Gw&usqp=CAU'},
            {id: 4, name: 'example', price: 1000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYz2huNWs1qzjomU38a88RbCqDoddasQv6Gw&usqp=CAU'},
            {id: 5, name: 'example', price: 1000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYz2huNWs1qzjomU38a88RbCqDoddasQv6Gw&usqp=CAU'},

        ]
        this._types = [
            {id: 1, name: 'phone'},
            {id: 2, name: 'laptop'}
        ]
        this._selectedBrand = {};
        this._selectedType = {};
        makeAutoObservable(this)
    }

    get devices() {
        return this._devices;
    }
    get brands() {
        return this._brands;
    }
    get types() {
        return this._types;
    }

    set selectedType(value) {
        this._selectedType = value;
    }
    get selectedType() {
        return this._selectedType;
    }
    set selectedBrand(value) {
        this._selectedBrand = value;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}