import { useEffect } from "react";

export const useClicker = 
  (ref : React.RefObject<HTMLDivElement>,
  changer: boolean | undefined , 
  setter: React.Dispatch<React.SetStateAction<boolean | undefined>>
  ) => {
  const clicker = (event: MouseEvent) => {
    if (event.target === ref.current) {
      setter(!changer);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clicker);
    return () => {
      document.removeEventListener("click", clicker);
    };
  });
}