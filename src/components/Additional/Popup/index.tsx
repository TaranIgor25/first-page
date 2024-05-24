import ExitIcon from "./img/ExitIcon";

import React, { useRef } from "react";

import { useAppSelector } from "../../../hooks/reduxHooks";
import { useActions } from "../../../hooks/useActions";

import style from "./popup.module.scss";

export const Popup = () => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const isPopupOpen = useAppSelector((state) => state.open);
  const { popup } = useActions();

  return (
    <>
      {isPopupOpen && (
        <div ref={popupRef} className={style.popup}>
          <div className={style.popupWrap}>
            <div onClick={() => popup("close")} className={style.exit}>
              <ExitIcon />
            </div>
            <div className={style.contentWrap}>
              <h3 className={style.text}>Message sent!</h3>
              <div onClick={() => popup("close")} className={style.btnOk}>
                Ok
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
