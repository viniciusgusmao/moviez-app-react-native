import React from 'react';
import { View, Text } from 'react-native';

const ErrorApi: React.FC = ({ children }) => (
    <View>
      <Text>{children}</Text>
    </View>
  );

export default ErrorApi;
