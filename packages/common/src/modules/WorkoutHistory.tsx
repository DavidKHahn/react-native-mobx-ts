import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";
import { CurrentExercise } from "../stores/WorkoutStore";
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
  // data type -> date, exercises (2D array storing objects)
  const rows: Array<
    Array<{
      date: string;
      exercises: CurrentExercise[];
    }>
  > = [];

  Object.entries(rootStore.workoutStore.history).forEach(
    ([date, exercises], i) => {
      // const hc = (

      // );
      if (i % 3 === 0) {
        rows.push([
          {
            date,
            exercises
          }
        ]);
      } else {
        rows[rows.length - 1].push({
          date,
          exercises
        });
      }
    }
  );

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

      <FlatList
        renderItem={({ item }) => (
          <View style={styles.row}>
          {item.map(({date, exercises}) => (
            <View key={date} style={styles.cardContainer}>
            <HistoryCard header={date} currentExercise={exercises} />
          </View>
          ))}
            {item.length < 3 ? <View style={styles.cardContainer} /> : null}
            {item.length < 2 ? <View style={styles.cardContainer} /> : null}
          </View>
        )}
        data={rows}
        keyExtractor={item =>
          item.reduce((prev, curr) => prev + " " + curr.date, "")
        }
      />
    </View>
  );
});
