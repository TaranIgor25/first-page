import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";

import { actions as closeSectionActions } from "../components/store/slices/closeSection.slice";
import { actions as openPopupActions } from "../components/store/slices/openPopup.slice";
import { useAppDispatch } from "./tsHooks";

const rootActions = {
  ...closeSectionActions, ...openPopupActions
}

export const useActions = () => {
  const dispatch = useAppDispatch();
 
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch), [dispatch]
  )
}