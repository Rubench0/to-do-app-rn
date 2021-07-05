import React from 'react';
import ButtonAdd from '../../components/board/ButtonAdd';
import ListTasks from '../../components/board/ListTasks';
import {NavigationProps} from '../../prototypes/navigation';
import {StyledContainerTab} from '../../styles/global';
import {useSelector} from 'react-redux';

const Board: React.FC<NavigationProps> = () => {
  const {screen} = useSelector((state: any) => state.todo);
  return (
    <StyledContainerTab>
      <ListTasks />
      {screen === 'All' ? <ButtonAdd /> : null}
    </StyledContainerTab>
  );
};

export default Board;
