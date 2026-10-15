(() => {
  'use strict';
  const img=document.querySelector('#portrait-photo');
  if(!img) return;
  const portraits=['assets/portrait-01.jpg?v=3','assets/portrait-02.jpg?v=3','assets/portrait-03.jpg?v=3'];
  portraits.slice(1).forEach(src=>{const preload=new Image();preload.src=src;});
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let index=0, switching=false;
  const change=()=>{
    if(document.hidden || switching) return;
    switching=true;
    img.classList.add('is-switching');
    window.setTimeout(()=>{
      index=(index+1)%portraits.length;
      img.src=portraits[index];
      img.alt=`Lorenzo Martinelli — portrait ${index+1} of ${portraits.length}`;
      img.classList.remove('is-switching');
      switching=false;
    },470);
  };
  window.setInterval(change,10000);
})();
