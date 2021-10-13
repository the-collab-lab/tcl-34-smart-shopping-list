const RadioInput = ({ onChange, styles, label, ...rest }) => {
  const id = label.toLowerCase().replaceAll(' ', '-');

  return (
    <label className={styles} htmlFor={id}>
      <input type="radio" id={id} onChange={onChange} {...rest} />
      {label}
    </label>
  );
};

export default RadioInput;
