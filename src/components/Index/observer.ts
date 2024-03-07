export const observer = (targets : any, startAnim: any) => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  
  let callback : IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        startAnim(true);
      }
    })
  };
  
  let observer = new IntersectionObserver(callback, options);

  targets.forEach((target : any) => {
    observer.observe(target);
  });
}



