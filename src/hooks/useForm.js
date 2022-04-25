import { useState } from 'react';

export const useForm = (initialValue) => {

  const [formValue, setFormValue] = useState(initialValue);

  const onFormChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value
    });
  }

  return [formValue, onFormChange];
}
