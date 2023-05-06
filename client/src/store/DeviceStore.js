import {makeAutoObservable} from "mobx";

export class DeviceStore {

    constructor() {
        this._brands = []
        this._devices = []
        this._types = []
        this._selectedBrand = {};
        this._selectedType = {};
        makeAutoObservable(this)
    }

    get devices() {
        return this._devices;
    }
    set devices(value) {
        this._devices = value;
    }
    get brands() {
        return this._brands;
    }
    set brands(value) {
        this._brands = value;
    }
    get types() {
        return this._types;
    }
    set types(value) {
        this._types = value;
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