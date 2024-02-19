import { useEffect } from "react";

export const useClicker = (ref: any, changer: any, setter: any) => {
  const clicker = (e: Event) => {
    if (e.target === ref.current) {
      setter(!changer);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clicker);
    return () => {
      document.removeEventListener("click", clicker);
    };
  }, [changer]);
}