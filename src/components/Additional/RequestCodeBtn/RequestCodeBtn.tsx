import { Link } from "react-router-dom";
import style from "./requestCodeBtn.module.scss";

export const RequestCodeBtn = ({ disabledRequestBtn }: any) => {
  return (
    <Link className={style.requestLink} to="/appy">
      <div className={style.btnRequest}>Request code</div>
    </Link>
  );
};

export default RequestCodeBtn;
