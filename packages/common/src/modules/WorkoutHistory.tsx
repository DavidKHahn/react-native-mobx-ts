import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";

interface Props extends RouteComponentProps{}

export const WorkoutHistory: React.FC<Props> = observer(({history}) => {
// how to store or access router state
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="Create Workout"
        onPress={() => {
            rootStore.workoutStore.currentExercises.push({
                exercise: 'Squat',
                numSets: 5,
                reps: 5,
                sets: ["","","","",""],
                weight: 260
            },
            {
                exercise: 'Bench Press',
                numSets: 5,
                reps: 5,
                sets: ["","","","",""],
                weight: 200
            },
            {
                exercise: 'Deadlift',
                numSets: 1,
                reps: 5,
                sets: ["","x","x","x","x"],
                weight: 360
            }
        );

        history.push('/current-workout');
        }}
      />
    </View>
  );
});
