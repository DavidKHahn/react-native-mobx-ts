"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var WorkoutStore = /** @class */ (function () {
    function WorkoutStore(rootStore) {
        this.rootStore = rootStore;
    }
    return WorkoutStore;
}());
exports.WorkoutStore = WorkoutStore;
