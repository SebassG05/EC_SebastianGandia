export const validatePositiveInteger = (value) => {
  const number = Number(value);
  return Number.isInteger(number) && number > 0;
};

export const validateFormData = (formData) => {
  const newErrors = {};
  if (!validatePositiveInteger(formData.user_id)) {
    newErrors.user_id = 'User ID must be a positive integer.';
  }
  if (!validatePositiveInteger(formData.level)) {
    newErrors.level = 'Level must be a positive integer.';
  }
  if (!validatePositiveInteger(formData.ilvl)) {
    newErrors.ilvl = 'ILVL must be a positive integer.';
  }
  return newErrors;
};

export const validateForm = (formData, setErrors, setIsFormValid, setNotification) => {
  const newErrors = validateFormData(formData);
  setErrors(newErrors);
  setIsFormValid(Object.keys(newErrors).length === 0);
  if (Object.keys(newErrors).length > 0) {
    setNotification('Please correct the errors in the form.');
    setTimeout(() => setNotification(''), 5000);
  } else {
    setNotification('');
  }
};

export const validateFormDataForEdit = (formData) => {
  const newErrors = {};
  if (!validatePositiveInteger(formData.level)) {
    newErrors.level = 'Level must be a positive integer.';
  }
  if (!validatePositiveInteger(formData.ilvl)) {
    newErrors.ilvl = 'ILVL must be a positive integer.';
  }
  return newErrors;
};

export const validateFormForEdit = (formData, setErrors, setIsFormValid, setNotification) => {
  const newErrors = validateFormDataForEdit(formData);
  setErrors(newErrors);
  setIsFormValid(Object.keys(newErrors).length === 0);
  if (Object.keys(newErrors).length > 0) {
    setNotification('Please correct the errors in the form.');
    setTimeout(() => setNotification(''), 5000);
  } else {
    setNotification('');
  }
};

export const handleChange = (e, setFormData, members, setErrors, setNotification) => {
  const { name, value, type, checked } = e.target;
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: type === 'checkbox' ? checked : value,
  }));
  if (name === 'user_id') {
    const userIdExists = members.some(member => member.user_id === parseInt(value, 10));
    if (userIdExists) {
      setErrors(prevErrors => ({ ...prevErrors, user_id: 'User ID already exists.' }));
      setNotification('User ID already exists.');
    } else {
      setErrors(prevErrors => {
        const { user_id, ...rest } = prevErrors;
        return rest;
      });
      setNotification('');
    }
  }
};

export const handleBlur = (e, formData, members, setErrors, setNotification) => {
  if (e.target.name === 'user_id') {
    const userIdExists = members.some(member => member.user_id === parseInt(formData.user_id, 10));
    if (userIdExists) {
      setErrors(prevErrors => ({ ...prevErrors, user_id: 'User ID already exists.' }));
      setNotification('User ID already exists.');
    } else {
      setErrors(prevErrors => {
        const { user_id, ...rest } = prevErrors;
        return rest;
      });
      setNotification('');
    }
  }
};

export const handleSubmit = (e, formData, isFormValid, members, onSave, setNotification) => {
  e.preventDefault();
  if (isFormValid) {
    const userIdExists = members.some(member => member.user_id === parseInt(formData.user_id, 10));
    if (userIdExists) {
      setNotification('User ID already exists.');
      setTimeout(() => setNotification(''), 5000);
    } else {
      onSave(formData);
    }
  }
};
