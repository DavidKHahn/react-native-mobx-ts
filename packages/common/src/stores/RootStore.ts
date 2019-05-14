import { createContext } from "react";
import { WorkoutStore } from "./WorkoutStore";
import { WorkoutTimerStore } from "./WorkoutTimerStore";

export class RootStore {
    // this -> to access stores
    workoutStore = new WorkoutStore(this);
    workoutTimerStore = new WorkoutTimerStore();
}

export const RootStoreContext = createContext(new RootStore());