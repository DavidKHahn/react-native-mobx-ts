import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onXPress: () => void;
  currentTime: string;
  percent: string;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#6ED7FF"
  },
  row: {
    paddingHorizontal: 30,
    justifyContent: "space-between",
    flexDirection: "row", // used to align
    alignItems: "center",
    flex: 1
  },
  x: {
    color: "#E8554D",
    fontSize: 30
  },
  timeText: {
    color: "white",
    fontSize: 18
  },
  line: {
    height: 3,
    backgroundColor: "#B36800"
  }
});

export const WorkoutTimer: React.FC<Props> = ({ onXPress, currentTime, percent }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, {width: percent }]} />
      <View style={styles.row}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <TouchableOpacity onPress={onXPress}>
          <Text style={styles.x}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
