import {makeAutoObservable} from "mobx";

export class DeviceStore {

    constructor() {
        this._brands = []
        this._devices = []
        this._types = []
        this._selectedBrand = {};
        this._selectedType = {};
        this._currentPage = 1;
        this._devicesTotalCount = 0;
        makeAutoObservable(this)
    }

    get currentPage() {
        return this._currentPage;
    }

    set currentPage(value) {
        this._currentPage = value;
    }

    get devicesTotalCount() {
        return this._devicesTotalCount;
    }

    set devicesTotalCount(value) {
        this._devicesTotalCount = value;
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