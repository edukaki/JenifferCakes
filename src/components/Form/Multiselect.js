import Select from 'react-select';

const MultiSelect = ({
  field,
  form,
  options,
  isMulti = false,
  placeholder,
  handleChange,
}) => {
  function onChange(option) {
    form.setFieldValue(
      field.name,
      option ? option.map((item) => item.value) : [],
    );
  }

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : '';
    }
  };

  if (!isMulti) {
    handleChange && handleChange(field.name, getValue());
    return (
      <Select
        options={options}
        name={field.name}
        value={
          options ? options.find((option) => option.value === field.value) : ''
        }
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        onBlur={field.onBlur}
        placeholder={placeholder}
      />
    );
  } else {
    handleChange && handleChange(field.name, getValue());
    return (
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        name={field.name}
        value={getValue()}
        onChange={onChange}
        options={options}
        isMulti={true}
        placeholder={placeholder}
        instanceId={field.name}
      />
    );
  }
};

export default MultiSelect;
