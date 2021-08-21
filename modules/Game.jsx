import React from "react";
import { View, Button } from "react-native";

export function Game(props) {
  return (
    <View>
      <Button title={`BACK`} onPress={() => props.setPage(0)} />
      <Button title={`ON`} onPress={() => props.setPage(2)} />
    </View>
  );
}
