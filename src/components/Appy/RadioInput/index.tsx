import { IFormPropsAppy } from "../../../types/interfaces";

import style from "./RadioInput.module.scss";

const radioTextArr = ["CO-founder", "Developer", "Design / Marketing", "Other"];

export const RadioInput = ({ data, setData, name }: IFormPropsAppy) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.id });
  };

  const radioRender = radioTextArr.map((text) => (
    <div key={text} className={style.radioWrap}>
      <label className={style.label} htmlFor={text}>
        <input
          className={style.input}
          type="radio"
          id={text}
          name={name}
          value={data.role}
          onChange={(event) => handleChange(event)}
        />
        {text}
      </label>
    </div>
  ));

  return (
    <fieldset className={style.fieldset}>
      <legend className={style.legend}>Tell us about your role</legend>
      {radioRender}
    </fieldset>
  );
};

export default RadioInput;
