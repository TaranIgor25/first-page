import { useEffect } from "react";

export const useClickOutside = (ref : React.RefObject<HTMLDivElement>, setter : boolean | undefined , callback : Function) => {
  

  const handleClick = (event : any) => {
    if (setter && !ref.current?.contains(event.target)) {
      callback();
    }
  }

useEffect(() => {
  document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};