export const observer = (targets : any) => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  
  let callback = (entries : any, observer: any) => {
    entries.forEach((entry : any) => {
      if(entry.isIntersecting) {
        console.log('yes');
      }
    })
  };
  
  let observer = new IntersectionObserver(callback, options);

  targets.forEach((target : any) => {
    observer.observe(target);
  });
}



