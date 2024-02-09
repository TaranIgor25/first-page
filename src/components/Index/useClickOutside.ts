import { useRef, useEffect } from "react";

export const useClickOutside = (ref : any, setter : any, callback : Function) => {
  const handleClick = (e : any) => {
    if (setter && !ref.current?.contains(e.target)) {
      callback();
    }
  }

useEffect(() => {
  document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [setter]);
};