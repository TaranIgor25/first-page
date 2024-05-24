import InputAppy from "../InputAppy";
import RadioInput from "../RadioInput";
import RequestCodeBtnAppy from "../RequestCodeBtnAppy";
import SelectAppy from "../SelectAppy";
import TextAreaAppy from "../TextAreaAppy";
import Loader from "../../Additional/Loader";

import { useState } from "react";
import { IRequestBtnMessage } from "../../../types/interfaces";
import { defaultDataObj } from "./data";

import { useRequestCodeMutation } from "../../../store/backEndApi";

import style from "./formAppy.module.scss";

const selectAppyTextArr: string[] = [
  "United States",
  "United Kingdom",
  "Germany",
];

export const FormAppy = () => {
  const [data, setData] = useState<IRequestBtnMessage>({ ...defaultDataObj });
  const [sendMessage, { isError, isLoading }] = useRequestCodeMutation();

  return isLoading ? (
    <Loader />
  ) : isError ? (
    <>
      <p className={style.errorMessage}>429 TOO MANY REQUESTS.</p>
      <p className={style.errorMessage}>
        If you see this message, then the number of requests in my API today was
        excessive!
      </p>
    </>
  ) : (
    <form className={style.formWrap}>
      <div className={style.nameWrap}>
        <InputAppy
          name={"firstName"}
          data={data}
          dataKey={data.firstName}
          setData={setData}
          label={"First Name"}
          placeHolder={"Enter your first name"}
          required={true}
        ></InputAppy>
        <InputAppy
          name={"lastName"}
          data={data}
          dataKey={data.lastName}
          setData={setData}
          label={"Last Name"}
          placeHolder={"Enter your last name"}
          required={true}
        ></InputAppy>
      </div>
      <div className={style.columnWrap}>
        <InputAppy
          name={"company"}
          data={data}
          dataKey={data.company}
          setData={setData}
          label={"Company"}
          placeHolder={"Enter your company name"}
          required={true}
        ></InputAppy>
        <InputAppy
          name={"phoneNumber"}
          data={data}
          dataKey={data.phoneNumber}
          setData={setData}
          label={"Phone Number"}
          placeHolder={"Enter your phone number"}
          required={true}
          type={"tel"}
        ></InputAppy>
        <div className={style.selectWrap}>
          <SelectAppy
            name={"country"}
            data={data}
            setData={setData}
            required={true}
            optionArr={selectAppyTextArr}
            label={"Country"}
          ></SelectAppy>
        </div>
        <TextAreaAppy
          name={"details"}
          data={data}
          setData={setData}
        ></TextAreaAppy>
      </div>
      <RadioInput name={"role"} data={data} setData={setData}></RadioInput>
      <RequestCodeBtnAppy
        sendMessage={sendMessage}
        setData={setData}
        data={data}
      ></RequestCodeBtnAppy>
    </form>
  );
};

export default FormAppy;
