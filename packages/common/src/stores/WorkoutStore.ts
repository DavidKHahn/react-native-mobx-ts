import { computed, observable } from "mobx";
import { persist } from "mobx-persist";
import { RootStore } from "./RootStore";

type WorkoutDay = 'a' | 'b';

export interface CurrentExercise {
    weight: number;
    reps: number;
    numSets: number;
    exercise: string;
    sets: string[];
}

interface WorkoutHistory {
    [key: string]: CurrentExercise[];
}

export class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
       this.rootStore = rootStore;
    }

    @persist @observable currentSquat: number = 45;
    @persist @observable currentBenchPress: number = 45;
    @persist @observable currentOverheadPress: number = 45;
    @persist @observable currentDeadlift: number = 65;
    @persist @observable currentBarbellRow: number = 65;

    @persist @observable lastWorkoutType: WorkoutDay = 'a';

    @persist('list') @observable currentExercises: CurrentExercise[] = []

    @computed get hasCurrentWorkout() {
        // if 0 then false else if arger than 0 equals true
        return !!this.currentExercises.length;
    }

    @persist('object') @observable history: WorkoutHistory = {};
}