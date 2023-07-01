import { useState, useCallback } from "react";

const useForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputValues({
      ...inputValues,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });

    setIsFormValid(event.target.closest("#form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setInputValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setInputValues, setErrors, setIsFormValid]
  );

  return {
    inputValues,
    handleChange,
    isFormValid,
    errors,
    resetForm,
  };
};

export default useForm;
