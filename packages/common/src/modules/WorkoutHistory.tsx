import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";
import { HistoryCard } from "../ui/HistoryCard";

interface Props extends RouteComponentProps {}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  cardContainer: {
    flex: 1, // split 50/50 across the whole container
    padding: 10 // spaces out and forms cards
  }
});

export const WorkoutHistory: React.FC<Props> = observer(({ history }) => {
  // how to store or access router state
  const rootStore = React.useContext(RootStoreContext);

  const rows: JSX.Element[][] = [];

  Object.entries(rootStore.workoutStore.history).forEach(([date, value], i) => {
    const hc = (
      <View key={date} style={styles.cardContainer}>
        <HistoryCard key={date} header={date} currentExercise={value} />;
      </View>
    );
    if (i % 3 === 0) {
      rows.push([hc]);
    } else {
      rows[rows.length - 1].push(hc);
    }
  });

  /*
  [
        [hc, hc],
        [hc, hc],
        [hc, hc],
        [hc, hc],
  ]
   */

  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="Create Workout"
        onPress={() => {
          rootStore.workoutStore.currentExercises.push(
            {
              exercise: "Squat",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 260
            },
            {
              exercise: "Bench Press",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 200
            },
            {
              exercise: "Deadlift",
              numSets: 1,
              reps: 5,
              sets: ["", "x", "x", "x", "x"],
              weight: 360
            }
          );

          history.push("/current-workout");
        }}
      />
      {rows.map((r, i) => (
        <View style={styles.row} key={i}>
          {r}
          {r.length < 3 ? <View style={styles.cardContainer} /> : null}
        </View>
      ))}
    </View>
  );
});
