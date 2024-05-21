import { Link } from "react-router-dom";
import style from "./requestCodeBtn.module.scss";

export const RequestCodeBtn = ({ disabledRequestBtn } : any) => {
  return (
    <Link className={style.requestLink} to="/appy">
      <div
        className={
          disabledRequestBtn === false
            ? style.btnRequest
            : `${style.btnRequest} ${style.sentCodeBtn}`
        }
      >
        {disabledRequestBtn === false ? "Request code" : "Code sent"}
      </div>
    </Link>
  );
};

export default RequestCodeBtn;
