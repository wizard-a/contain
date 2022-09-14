import * as React from 'react';
import { createElement } from 'react';
import { Input } from 'antd';
import { BaseWrapperProps, BaseWrapper, BaseField, BaseFieldStatus } from '../base';
import './fieldInput.scss';

export interface FieldInputProps extends BaseWrapperProps {
  placeholder: string;
  value: string;
  // status?:
}


export const FieldInput: React.FC<FieldInputProps> = function FieldInput(props) {
  const { placeholder,
    status,
    ...otherProps } = props;
  // const _style = style || {};
  // if (color) {
  //   _style.backgroundColor = color;
  // }
  // const _otherProps = otherProps || {};
  // _otherProps.style = _style;
  // otherProps.status
  return (
    <BaseWrapper {...props}>
      <Input
        disabled={status == BaseFieldStatus.disable}
        placeholder={placeholder}
      />
    </BaseWrapper>
  );
};

// export default FieldInput;
