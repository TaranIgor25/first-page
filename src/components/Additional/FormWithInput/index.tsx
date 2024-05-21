import { useEffect, useRef, useState } from "react";
import { IMaskInput } from "react-imask";

import { IInputProps } from "../../../types/interfaces";

import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../hooks/tsHooks";

import style from "../../Index/FirstSection/firstSection.module.scss";

export const FormWithInput: React.FC<IInputProps> = ({
  inputClass,
  btnClass,
  formId,
}) => {
  const refInput = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLElement>(null);

  const [disabledInput, setDisabledInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const { requestCode } = useActions();
  const open = useAppSelector((state) => state.open);

  useEffect(() => {
    if (open === true) {
      setDisabledInput((disabledInput) => !disabledInput);
      setInputValue("");
    }
  }, [open]);

  return (
    <>
      <IMaskInput
        id={formId}
        readOnly={disabledInput === false ? false : true}
        className={inputClass}
        mask={"+{375}(00)000-00-00"}
        radix="."
        value={inputValue}
        unmask={true}
        ref={ref}
        inputRef={refInput}
        onAccept={(value, mask) => setInputValue(value)}
        placeholder="+375(00)000-00-00"
      ></IMaskInput>
      <div
        onClick={() => {
          requestCode(inputValue);
        }}
        className={
          disabledInput === false
            ? btnClass
            : `${style.sentCodeBtn} ${btnClass}`
        }
      >
        {disabledInput === false ? "Request code" : "Code sent"}
      </div>
    </>
  );
};

export default FormWithInput;
