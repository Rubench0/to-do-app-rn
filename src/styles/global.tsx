import styled from 'styled-components/native';
import {colors} from './styles';

export const StyledActionAppBar = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const StyledContainerTab = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  background-color: ${colors.white};
`;

export const StyledViewFlexRow = styled.View`
  margin-right: 20px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledViewWithOutFlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledViewFlexColumn = styled.View`
  margin-right: 20px;
  margin-left: 20px;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledViewW50 = styled.View`
  width: 50%;
`;

export const StyledViewButtonBottom = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const StyledViewBottomButton = styled.View`
  align-self: center;
  position: absolute;
  bottom: 40px;
`;

export const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 4px;
  color: ${colors.greyDark};
  background-color: ${colors.greyLight};
  padding-left: 10px;
  padding-right: 10px;
`;

export const StyledLabelInput = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const StyledViewWithOutFlexRowList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10%;
  margin-top: 5%;
`;
export const StyledTextItemList = styled.Text`
  margin-left: 3%;
`;
