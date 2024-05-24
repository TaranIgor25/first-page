import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";

import { actions as closeSectionActions } from "../store/slices/closeSection.slice";
import { actions as openPopupActions } from "../store/slices/openPopup.slice";
import { actions as isDisableInputActions } from "../store/slices/disableInput.slice";
import { useAppDispatch } from "./reduxHooks";

const rootActions = {
  ...closeSectionActions, ...openPopupActions, ...isDisableInputActions
}

export const useActions = () => {
  const dispatch = useAppDispatch();
 
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch), [dispatch]
  )
}