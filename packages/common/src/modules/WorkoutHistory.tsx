import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
// how to store or access router state
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="Create Workout"
        onPress={() => {
            rootStore.workoutStore.currentExercises.push({
                exercise: 'squat',
                numSets: 5,
                reps: 5,
                sets: ["5","5","5","5","5"],
                weight: 260
            },
            {
                exercise: 'Bench Press',
                numSets: 5,
                reps: 5,
                sets: ["5","5","5","5","5"],
                weight: 200
            },
            {
                exercise: 'Deadlift',
                numSets: 1,
                reps: 5,
                sets: ["5","x","x","x","x"],
                weight: 360
            })
          rootStore.routerStore.screen = "WorkoutHistory";
        }}
      />
    </View>
  );
});
