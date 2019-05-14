import { create } from "mobx-persist";
import { createContext } from "react";
import { AsyncStorage } from "react-native";
import { WorkoutStore } from "./WorkoutStore";
import { WorkoutTimerStore } from "./WorkoutTimerStore";

const hydrate = create({
    storage: AsyncStorage,
    jsonify: true // set true is using AsyncStorage
});

export class RootStore {
    // this -> to access stores
    workoutStore = new WorkoutStore(this);
    workoutTimerStore = new WorkoutTimerStore();

    constructor() {
    // 'workoutTimer', 'workout' represents key for localstorage
        hydrate('workoutTimer', this.workoutTimerStore).then(() => {
            if (this.workoutTimerStore.isRunning) {
                this.workoutTimerStore.measure();
            }
        });
        hydrate("workout", this.workoutStore);
    }
}

export const RootStoreContext = createContext(new RootStore());