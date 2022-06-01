import React from 'react';
import TextInputField from './elements/TextInputField';
import NumberInputField from './elements/NumberInputField';
import EmailInputField from './elements/EmailInputField';
import MultilineInputField from './elements/MultilineInputField';
import PhoneInputField from './elements/PhoneInputField';
import DateInputField from './elements/DateInputField';
import SelectInputField from './elements/SelectInputField';
import PasswordInputField from './elements/PasswordInputField';
import ConfirmPassInputField from './elements/ConfirmPassInputField';
/*
Structure Sample
[
  {
    "type": "text",
    "title": "Full Name",
    "name": "fullName",
    "placeholder": "Nama Lengkap",
    "value": "",
    "error": "",
    "validation": {
      "length": 50,
      "regex": "^[a-zA-Z_ ]{0,25}$",
      "required": true
    }
*/
const Element = ({item: {type, title, name, placeholder, value, error, validation, data}}) => {
  switch (type) {
    case 'text':
      return (
        <TextInputField
          title={title}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          validation={validation}
        />
      );
    case 'number':
      return (
        <NumberInputField
          title={title}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          validation={validation}
        />
      );
    case 'email':
      return (
        <EmailInputField
          title={title}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          validation={validation}
        />
      );
    case 'multilinetext':
      return (
        <MultilineInputField
          title={title}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          validation={validation}
        />
      );
    case 'phone':
      return (
        <PhoneInputField
          title={title}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          validation={validation}
        />
      );
    case 'date':
      return (
        <DateInputField
          title={title}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          validation={validation}
        />
      );
    case 'enum':
      return (
        <SelectInputField
          title={title}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          validation={validation}
          data={data}
        />
      );
    case 'password':
      return (
        <PasswordInputField
          title={title}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          validation={validation}
          data={data}
        />
      );
    case 'confirmPassword':
      return (
        <ConfirmPassInputField
          title={title}
          name={name}
          placeholder={placeholder}
          value={value}
          error={error}
          validation={validation}
          data={data}
        />
      );
    default:
      return null;
  }
};

export default Element;
