import React from 'react';
import {Input} from 'react-native-elements';
// import {addTask} from '../../redux/tasks/actions';
import {
  StyledLabelInput,
  StyledTextInput,
  StyledViewFlexColumn,
  StyledViewW50,
  StyledViewWithOutFlexRow,
} from '../../styles/global';
import {colors, stylesSheet} from '../../styles/styles';
import {Select, CheckIcon} from 'native-base';
import {ItemSelect} from '../../prototypes/selects';

const FormTask: React.FC<any> = ({form, setForm}) => {
  const remindOptions = [
    {label: '10 minutes', value: '10'},
    {label: '20 minutes', value: '20'},
    {label: '30 minutes', value: '30'},
  ];
  const repeatOptions = [
    {label: 'daily', value: '1'},
    {label: 'weekly', value: '2'},
    {label: 'monthly', value: '3'},
  ];

  const handleForm = (value: string, field: string) => {
    let obj: any = {...form};
    obj[field] = value;
    setForm(obj);
  };

  const FormInput = (label: string, field: string, value: string) => {
    return (
      <>
        <StyledLabelInput>{label}</StyledLabelInput>
        <StyledTextInput
          onChangeText={(param: string) => handleForm(param, field)}
          value={value}
        />
      </>
    );
  };

  const FormInputTime = (label: string, field: string, value: string) => {
    return (
      <StyledViewW50>
        <StyledLabelInput>{label}</StyledLabelInput>
        <Input
          containerStyle={stylesSheet.inputFormClockContainer}
          inputContainerStyle={stylesSheet.inputFormClockinputContainer}
          inputStyle={stylesSheet.inputFormClockInput}
          rightIcon={{type: 'font-awesome-5', name: 'clock'}}
          onChangeText={(param: string) => handleForm(param, field)}
          value={value}
        />
      </StyledViewW50>
    );
  };

  const FormSelect = (
    label: string,
    field: string,
    value: string,
    rows: ItemSelect[],
  ) => {
    return (
      <>
        <StyledLabelInput>{label}</StyledLabelInput>
        <Select
          selectedValue={value}
          onValueChange={(param: string) => handleForm(param, field)}
          _selectedItem={{
            bg: colors.primary,
            endIcon: <CheckIcon size={3} />,
          }}>
          {rows.map((item: ItemSelect, index: number) => (
            <Select.Item
              key={`select-${field}-${index}`}
              label={item.label}
              value={item.value}
            />
          ))}
        </Select>
      </>
    );
  };

  return (
    <StyledViewFlexColumn>
      {FormInput('Tilte', 'title', form.title)}
      {FormInput('Deadline', 'deadline', form.deadline)}
      <StyledViewWithOutFlexRow>
        {FormInputTime('Start time', 'startTime', form.startTime)}
        {FormInputTime('End time', 'endTime', form.endTime)}
      </StyledViewWithOutFlexRow>
      {FormSelect('Remind', 'remind', form.remind, remindOptions)}
      {FormSelect('Repeat', 'repeat', form.repeat, repeatOptions)}
    </StyledViewFlexColumn>
  );
};

export default FormTask;
