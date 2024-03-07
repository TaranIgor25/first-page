import style from "../FirstSection/firstSection.module.scss";
import { IMaskInput } from "react-imask";

import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../hoocks/tsHoocks";
import { useActions } from "../../../hoocks/useActions";
import { IInputProps } from "../../store/models";

export const FormWithInput: React.FC<IInputProps> = ({
  inputClass,
  btnClass,
}) => {
  const [disabledInput, setDisabledInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const refInput = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLElement>(null);
  const { requestCode } = useActions();
  const { open } = useAppSelector((state) => state);

  useEffect(() => {
    setDisabledInput(!disabledInput);
    setInputValue("");
  }, [open]);

  return (
    <>
      <IMaskInput
        id="1"
        readOnly={disabledInput ? false : true}
        className={inputClass}
        mask={"+{375}(00)000-00-00"}
        radix="."
        value={inputValue}
        unmask={true}
        ref={ref}
        inputRef={refInput}
        onAccept={(value, mask) => setInputValue(value)}
        placeholder="Phone number"
      ></IMaskInput>
      <div
        onClick={() => {
          requestCode(inputValue);
        }}
        className={
          disabledInput ? btnClass : `${style.sentCodeBtn} ${btnClass}`
        }
      >
        {disabledInput ? "Request code" : "Code sent"}
      </div>
    </>
  );
};

export default FormWithInput;
