"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var mobx_1 = require("mobx");
var padZero = function (n) {
    if (n >= 10) {
        return n;
    }
    return "0" + n;
};
var WorkoutTimerStore = /** @class */ (function () {
    function WorkoutTimerStore() {
        this.startTime = dayjs_1.default();
        this.isRunning = false;
        this.seconds = 0;
    }
    WorkoutTimerStore.prototype.measure = function () {
        var _this = this;
        if (!this.isRunning)
            return;
        // dayjs creates a day obj and current time
        this.seconds = dayjs_1.default().diff(this.startTime, "second");
        setTimeout(function () { return _this.measure(); }, 1000);
    };
    // action changes some of the variables or fields in store
    WorkoutTimerStore.prototype.startTimer = function () {
        if (this.isRunning)
            return;
        this.isRunning = true;
        this.startTime = dayjs_1.default();
        this.measure();
    };
    WorkoutTimerStore.prototype.endTimer = function () {
        this.isRunning = false;
        this.seconds = 0;
    };
    Object.defineProperty(WorkoutTimerStore.prototype, "display", {
        // 'get' automatically calls function
        get: function () {
            var minutes = Math.floor(this.seconds / 60);
            var seconds = this.seconds % 60;
            return padZero(minutes) + ":" + padZero(seconds);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_1.observable
    ], WorkoutTimerStore.prototype, "startTime", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutTimerStore.prototype, "isRunning", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutTimerStore.prototype, "seconds", void 0);
    __decorate([
        mobx_1.action
    ], WorkoutTimerStore.prototype, "measure", null);
    __decorate([
        mobx_1.action
    ], WorkoutTimerStore.prototype, "startTimer", null);
    __decorate([
        mobx_1.action
    ], WorkoutTimerStore.prototype, "endTimer", null);
    __decorate([
        mobx_1.computed
    ], WorkoutTimerStore.prototype, "display", null);
    return WorkoutTimerStore;
}());
exports.WorkoutTimerStore = WorkoutTimerStore;
