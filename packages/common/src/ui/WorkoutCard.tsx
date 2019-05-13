import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    exercise: string;
    repsAndWeight: string;
    sets: string[];
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffSet: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: "column",
    padding: 10
  },
  topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',

  },
  topRowText: {
        fontSize: 16
  },
  bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20,
      marginBottom: 20
  },
  circle: {
      borderRadius: 80,
      backgroundColor: '#FFD23C',
      padding: 20
  },
  circleText: {
      color: 'black'
  }
});

export const WorkoutCard: React.FC<Props> = ({exercise, repsAndWeight, sets}) => {
  return (
    <View style={styles.card}>
        <View style={styles.topRow}>
            <Text style={styles.topRowText}>{exercise}</Text>
            <Text style={styles.topRowText}>{repsAndWeight}</Text>
        </View>
        <View style={styles.bottomRow}>
            {sets.map((set, index) => {
                if (set === 'x') {
                    return <Text key={set + index}>x</Text>
                }

                if (set === '') {
                    return <Text key={set + index}></Text>
                }

                return (
                    <View style={styles.circle} key={set + index}>
                        <Text style={styles.circleText}>{set}</Text>
                    </View>
                )
            })}
        </View>
    </View>
  );
};
