"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RouterStore_1 = require("./RouterStore");
var RootStore = /** @class */ (function () {
    function RootStore() {
        // this -> to access stores
        this.routerStore = new RouterStore_1.RouterStore(this);
        this.workoutStore = new RouterStore_1.RouterStore(this);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
