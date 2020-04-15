import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import colors from '../res/colors';

const Loading:React.FC = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={colors.lightPurple} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Loading;