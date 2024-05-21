import { ISelectAppy } from "../../../types/interfaces";

import style from "./select.module.scss";

export const SelectAppy = ({
  data,
  setData,
  optionArr,
  required,
  label,
  name,
}: ISelectAppy) => {

  const optionRender = optionArr.map((option) => (
    <option key={option} className={style.countryOption}>
      {option}
    </option>
  ));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <>
      <label className={style.countryLabel}>
        {label}
        <span className={style.countrySpan}>{required ? " *" : ""}</span>
      </label>
      <select
        name={name}
        value={data.country}
        onChange={(event) => handleChange(event)}
        required={required}
        className={style.countrySelect}
      >
        {optionRender}
      </select>
    </>
  );
};

export default SelectAppy;
