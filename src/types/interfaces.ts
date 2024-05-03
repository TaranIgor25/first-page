import { store } from "../components/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type swipeDirection = "left" | "right";

export interface VideoProps {
  video: IVideoBlock;
  setter: any;
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
