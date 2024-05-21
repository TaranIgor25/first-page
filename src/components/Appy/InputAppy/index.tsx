import { IInputAppy } from "../../../types/interfaces";

import style from "./input.module.scss";

export const InputAppy = ({
  name,
  label,
  placeHolder,
  required,
  type,
  data,
  setData,
  dataKey,
}: IInputAppy) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className={style.inputWrap}>
      <label htmlFor={label} className={style.labelName}>
        {label}
        <span className={style.spanStar}>{required ? " *" : ""}</span>
      </label>
      <input
        onChange={(event) => {
          handleChange(event);
        }}
        name={name}
        value={dataKey}
        required={required}
        id={label}
        placeholder={placeHolder}
        className={style.inputName}
        type={type ? type : "text"}
      />
    </div>
  );
};

export default InputAppy;
