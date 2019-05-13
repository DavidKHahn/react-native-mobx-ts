import { createContext } from "react";

type WorkoutDay = 'a' | 'b';

interface WorkoutHistory {
    [key: string]: Array<{
        exercise: string,
        value: number
    }>
}

/*
{
    '02-18-2019': [
        {
            exercise: 'squat',
            value: 90
        },
          {
            exercise: 'benchpress',
            value: 100
        }
    ]
}

*/

class WorkoutStore {
    currentSquat: number;
    currentBench: number;
    currentOverheadPress: number;
    currentDeadlift: number;
    currentBarbellRow: number;

    lastWorkoutType: WorkoutDay;

    history: WorkoutHistory;
}

export const WorkoutStoreContext = createContext(new WorkoutStore());