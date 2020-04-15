import styled from 'styled-components';
import colors from 'res/colors';

const BaseText = styled.Text`
  font-family: 'Roboto';
`;

export const TitlePage = styled(BaseText)`  
  color: ${colors.primaryTitle};
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 8px;
  margin-top: ${(props) => props.marginTop ? `${props.marginTop}px` : '0px'};
`;

interface ITitleThumb {
  fontSize: number;
}

export const TitleThumb = styled(BaseText)<ITitleThumb>`  
  color: ${colors.primaryTitle};
  font-weight: bold;
  font-size: ${(props) => `${props.fontSize}px`};
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const SubtitleThumb = styled(BaseText)<ITitleThumb>`  
  color: ${colors.lightGray};
  font-weight: normal;
  font-size: 12px;
`;

