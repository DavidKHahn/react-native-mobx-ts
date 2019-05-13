import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { RouterStoreContext } from "../stores/RouterStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
// how to store or access router state
  const routerStore = React.useContext(RouterStoreContext);

  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="Create Workout"
        onPress={() => {
          routerStore.screen = "WorkoutHistory";
        }}
      />
    </View>
  );
});
