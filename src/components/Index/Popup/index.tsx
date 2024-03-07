import React, { useEffect, useRef, useState } from "react";
import ExitIcon from "./ExitIcon";
import style from "./popup.module.scss";
import { useClicker } from "../../../hoocks/useClicker";
import { useAppSelector } from "../../../hoocks/tsHoocks";

export const Popup = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const { open } = useAppSelector((state) => state);

  useClicker(popupRef, openPopup, setOpenPopup);

  useEffect(() => {
    if (open === true) {
      setOpenPopup(!openPopup);
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
