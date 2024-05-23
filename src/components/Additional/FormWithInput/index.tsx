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

  const [inputValue, setInputValue] = useState<string>("");

  const isDisableInputState = useAppSelector((state) => state.disableInput);
  const { isDisableInput, popup } = useActions();

  useEffect(() => {
    if (isDisableInputState === true) {
      setInputValue("");
    }
  }, [isDisableInputState]);

  return (
    <>
      <IMaskInput
        id={formId}
        readOnly={isDisableInputState === false ? false : true}
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
        onClick={() =>
          isDisableInputState ? "" : (isDisableInput(inputValue), popup("open"))
        }
        className={
          isDisableInputState === false
            ? btnClass
            : `${style.sentCodeBtn} ${btnClass}`
        }
      >
        {isDisableInputState === false ? "Request code" : "Code sent"}
      </div>
    </>
  );
};

export default FormWithInput;
