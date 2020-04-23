import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type RootStackParamList = {
  Home: undefined;
  Details: { id: number, movie: boolean, tv: boolean };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type PropsRoute = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};