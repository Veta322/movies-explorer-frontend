import { useState, useCallback } from 'react';

const useForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [enteredValues, setEnteredValues] = useState({});
  const [errors, setErrors] = useState({});
 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEnteredValues({
      ...enteredValues,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });

    console.log(event.target.closest('#form').checkValidity());
    console.log(event.target.closest('#form'));
    setIsFormValid(event.target.closest('#form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setEnteredValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setEnteredValues, setErrors, setIsFormValid],
  );

  return {
    enteredValues,
    handleChange,
    isFormValid,
    errors,
    resetForm,
  };
};

export default useForm;
