import { createContext } from "react";
import { RouterStore } from "./RouterStore";
import { WorkoutStore } from "./WorkoutStore";

export class RootStore {
    // this -> to access stores
    routerStore = new RouterStore(this)
    workoutStore = new WorkoutStore(this)
}

export const RootStoreContext = createContext(new RootStore());