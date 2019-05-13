import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";

interface Props {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10
  }
});

export const CurrentWorkout: React.FC<Props> = observer(() => {
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View style={styles.container}>
      {rootStore.workoutStore.currentExercises.map(e => {
        return (
          <WorkoutCard
            key={e.exercise}
            sets={e.sets}
            exercise={e.exercise}
            repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
          />
        );
      })}
    </View>
  );
});
