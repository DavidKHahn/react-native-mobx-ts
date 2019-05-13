import { createContext } from "react";
import { RouterStore } from "./RouterStore";

export class RootStore {
    // this -> to access stores
    routerStore = new RouterStore(this)
    workoutStore = new RouterStore(this)
}

export const RootStoreContext = createContext(new RootStore());