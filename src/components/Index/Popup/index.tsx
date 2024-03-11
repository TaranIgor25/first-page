import React, { useEffect, useRef, useState } from "react";

import { useClicker } from "../../../hooks/useClicker";
import { useAppSelector } from "../../../hooks/tsHooks";
import ExitIcon from "./ExitIcon";

import style from "./popup.module.scss";

export const Popup = () => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  const [openPopup, setOpenPopup] = useState<boolean>();

  const open  = useAppSelector((state) => state.open);

  useClicker(popupRef, openPopup, setOpenPopup);

  useEffect(() => {
    if (open === true) {
      setOpenPopup(true);
    }
  }, [open]);

  return (
    <>
      {openPopup && (
        <div ref={popupRef} className={style.popup}>
          <div className={style.popupWrap}>
            <div onClick={() => setOpenPopup(false)} className={style.exit}>
              <ExitIcon />
            </div>
            <div className={style.contentWrap}>
              <h3 className={style.text}>Message sent!</h3>
              <div onClick={() => setOpenPopup(false)} className={style.btnOk}>
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
