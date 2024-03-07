import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as closeSectionActions } from "../components/store/slices/closeSection.slice";
import { actions as openPopupActions } from "../components/store/slices/openPopup.slice";
import { useAppDispatch } from "./tsHoocks";

const rootActions = {
  ...closeSectionActions, ...openPopupActions
}

export const useActions = () => {
  const dispatch = useAppDispatch();
 
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch), [dispatch]
  )
}