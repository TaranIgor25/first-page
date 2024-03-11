export const observer = (targets : any, startAnim : React.Dispatch<React.SetStateAction<boolean>>) => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  
  let callback : IntersectionObserverCallback = (entries : IntersectionObserverEntry[], observer :  IntersectionObserver) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        startAnim(true);
      }
    })
  };
  
  let observer = new IntersectionObserver(callback, options);

  targets.forEach((target : HTMLElement) => {
    observer.observe(target);
  });
}



