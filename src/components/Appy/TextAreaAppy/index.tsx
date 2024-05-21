import { IFormPropsAppy } from "../../../types/interfaces";

import style from "./textAreaAppy.module.scss";

export const TextAreaAppy = ({ data, setData, name }: IFormPropsAppy) => {

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({...data, [event.target.name] : event.target.value})
  }

  return (
    <div className={style.textAreaWrap}>
      <div className={style.descriptionWrap}>
        <label className={style.label}>Details</label>
        <span className={style.span}>Optional</span>
      </div>
      <textarea
        value={data.details}
        onChange={(event) => handleChange(event)}
        rows={4}
        placeholder="What do you want to build with Appy?"
        className={style.textArea}
        name={name}
        id=""
      ></textarea>
    </div>
  );
};

export default TextAreaAppy;
