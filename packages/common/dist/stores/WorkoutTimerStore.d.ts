import dayjs from 'dayjs';
export declare class WorkoutTimerStore {
    startTime: dayjs.Dayjs;
    isRunning: boolean;
    seconds: number;
    measure(): void;
    startTimer(): void;
    endTimer(): void;
    readonly display: string;
}
