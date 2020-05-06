import { Dimensions } from 'react-native';
import styled from 'styled-components';

export const MainSection = styled.View`
  padding: 10px;
`;

export const SectionButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Section = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const BackdropImage = styled.ImageBackground`
  width: 100%;
  height: ${`${Dimensions.get('window').height*0.45}px`};
  padding: 10px;
  justify-content: space-between;
`;

export const ButtonHeader = styled.TouchableOpacity`
  background-color: dimgray;
  width: 40px;
  border-radius: 20px;
  padding: 3px;
`;

export const TitleDetailPage = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 29px;
  margin-bottom: 20px;
`;