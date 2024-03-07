export interface IVideoBlock { 
  name: string,
  time: string,
  category: {
    firstCategory: string,
    secondCategory?: string,
  }
};

export interface ServResponse {
  data: IUser[];
}

export interface IUser {
  img: string;
  name: string;
  link: string;
  row_id: number;
}

export interface iColumnContent {
  name: string,
  content: string[],
}

export interface IInputProps {
  inputClass: string;
  btnClass: string;
}

export interface ISwipesArr {
  imgSwipe : string,
}

export interface IColorBlockArr {
  class: string,
  img: string,
}

export interface ICommentArr {
  img: string,
  name: string,
  link: string,
}

export interface IThirdSectionLiArr {
  text: string,
  img: string,
}