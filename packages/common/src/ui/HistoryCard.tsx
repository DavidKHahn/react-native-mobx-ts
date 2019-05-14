import * as React from "react";
import { Text } from "react-native";
import { CurrentExercise } from "../stores/WorkoutStore";
import { Card } from "./Card";

interface Props {
  header: string;
  currentExercise: CurrentExercise[];
}

const exerciseShortName = {
  Squat: "SQ",
  Deadlift: "DL",
  "Bench Press": "BP",
  "Overhead Press": "OHP",
  "Barbell Row": "ROW"
};

export const HistoryCard: React.FC<Props> = ({ header, currentExercise }) => {
  return (
    <Card>
      <Text>{header}</Text>
      {currentExercise.map(ce => {
        return (
          <Text key={ce.exercise}>{`${
            // typescript notation
            exerciseShortName[ce.exercise as keyof typeof exerciseShortName]
          } ${ce.numSets}x${ce.reps} ${ce.weight}`}</Text>
        );
      })}
    </Card>
  );
};
