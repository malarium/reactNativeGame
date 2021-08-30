import React from "react";
import { View, Text, Button } from "react-native";
export function VictoryScreen(props) {
  return (
    <View>
      <Text>winner</Text>
      <Button title={`return`} onPress={() => props.setPage(0)} />
    </View>
  );
}
