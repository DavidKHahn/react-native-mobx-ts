import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    onXPress: () => void;
    currentTime: string;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#6ED7FF",
    justifyContent: 'space-between',
    flexDirection: 'row', // used to align
    alignItems: 'center',
    paddingHorizontal: 30
},
  x: {
      color: '#E8554D',
      fontSize: 30
  },
  timeText: {
        color: 'white',
        fontSize: 18
  }
});

export const WorkoutTimer: React.FC<Props> = ({onXPress, currentTime}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{currentTime}</Text>
      <TouchableOpacity onPress={onXPress}>
      <Text style={styles.x}>x</Text>
      </TouchableOpacity>
    </View>
  );
};
