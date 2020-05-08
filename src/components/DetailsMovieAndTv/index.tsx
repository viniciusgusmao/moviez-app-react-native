import { Dimensions } from 'react-native';
import colors from 'res/colors';
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
  width: 40px;
  padding: 3px;
`;

export const TitleDetailPage = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 29px;
  margin-bottom: 20px;
`;

export const ButtonMoreSimilarItems = styled.TouchableOpacity`
  margin-top: 15px;
  margin-bottom: 15px;
  flex: 1;
  flex-direction: row;
  padding: 10px;
  border-color: ${colors.lightPurple};
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  justify-content: center;
  align-content: center;
  height: 45px;

`;

export const TextButtonMoreSimilarItems = styled.Text`
  font-size: 16px;
  margin-right: 8px;
  color: ${colors.lightPurple};
`;