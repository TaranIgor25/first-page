import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { store } from "../store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type swipeDirection = "left" | "right";

export interface IRequestBtnMessage {
  firstName: string;
  lastName: string;
  company: string;
  phoneNumber: string;
  country: country;
  details?: string;
  role?: role;
}

export interface IData {
  data: IRequestBtnMessage;
}

export interface IRequestBtnProps {
  data: IRequestBtnMessage;
  setData: React.Dispatch<React.SetStateAction<IRequestBtnMessage>>;
  sendMessage: any;
}

export type country = "United States" | "United Kingdom" | "Germany";
export type role = "CO-founder" | "Developer" | "Design / Marketing" | "Other";

export interface IInputAppy {
  data: IRequestBtnMessage;
  setData: React.Dispatch<React.SetStateAction<IRequestBtnMessage>>;
  label: string;
  placeHolder: string;
  required: boolean;
  type?: string;
  name: string;
  dataKey: string;
}

export interface ISelectAppy {
  optionArr: string[];
  required: boolean;
  label: string;
  data: IRequestBtnMessage;
  setData: React.Dispatch<React.SetStateAction<IRequestBtnMessage>>;
  name: string;
}

export interface IFormPropsAppy {
  data: IRequestBtnMessage;
  setData: React.Dispatch<React.SetStateAction<IRequestBtnMessage>>;
  name: string;
}

export interface ISliderProps {
  setTransitionDuration: React.Dispatch<React.SetStateAction<number>>;
  setActiveClass: React.Dispatch<React.SetStateAction<number>>;
  setRunSwipe: React.Dispatch<React.SetStateAction<number>>;
  activeClass: number;
  runSwipe: number;
  slideImgRef: React.MutableRefObject<any>;
}

export interface IVideoBlock {
  name: string;
  time: string;
  category: {
    firstCategory: string;
    secondCategory?: string;
  };
}

export interface IPremiumBlock {
  name: string;
  price: number;
  sale?: string;
  animationClass: string;
  borderClass?: string;
  btnClass?: string;
}

export interface IServerResponse {
  data: IUser[];
}

export interface IUser {
  img: string;
  name: string;
  link: string;
  row_id: number;
}

export interface iColumnContent {
  name: string;
  content: string[];
}

export interface VideoProps {
  video: IVideoBlock;
  setter: any;
}

export interface IInputProps {
  inputClass: string;
  btnClass: string;
  formId: string;
}

export interface ISwipes {
  imgSwipe: string;
}

export interface IColorBlock {
  class: string;
  img: string;
}

export interface ICommentArr {
  img: string;
  name: string;
  link: string;
}

export interface IThirdSectionBtnArr {
  text: string;
  img: string;
}
