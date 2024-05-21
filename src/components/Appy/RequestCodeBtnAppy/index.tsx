import { IRequestBtnProps } from "../../../types/interfaces";
import { defaultDataObj } from "../FormAppy/data";

import style from "./requestCodeBtn.module.scss";

export const RequestCodeBtnAppy = ({
  data,
  setData,
  sendMessage,
}: IRequestBtnProps) => {
  const requiredDataArr = [
    data.firstName,
    data.lastName,
    data.company,
    data.phoneNumber,
  ];

  const checkCompletion = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let field = 0;
    requiredDataArr.forEach((el) => {
      if (el.length > 2) {
        field++;
      }
    });
    if (field === 4) {
      event.preventDefault();
      handleClick();
    }
  };

  const checkDetails = () => {
    if (data.details === undefined || data.details === "") {
      return { ...data, details: "none" };
    } else {
      return { ...data };
    }
  };

  const handleClick = async () => {
    console.log(data);
    await sendMessage({
      data: checkDetails(),
    });
    setData({ ...defaultDataObj });
  };

  return (
    <button
      type="submit"
      onClick={(event) => checkCompletion(event)}
      className={style.btnRequest}
    >
      Request code
    </button>
  );
};

export default RequestCodeBtnAppy;
