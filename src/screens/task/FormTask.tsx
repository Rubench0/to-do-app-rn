import React, {useState} from 'react';
import ButtonSubmit from '../../components/task/ButtonSubmit';
import Form from '../../components/task/Form';
import {NavigationProps} from '../../prototypes/navigation';
import {StyledContainerTab} from '../../styles/global';

const FormTask: React.FC<NavigationProps> = () => {
  const [form, setForm] = useState({
    title: '',
    deadline: '',
    startTime: '',
    endTime: '',
    remind: '',
    repeat: '',
  });

  return (
    <StyledContainerTab>
      <Form form={form} setForm={setForm} />
      <ButtonSubmit form={form} />
    </StyledContainerTab>
  );
};

export default FormTask;
