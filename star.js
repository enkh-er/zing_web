function stars(){
  let count=50;
  let scene=document.querySelector('.scene');
  let i=0;
  while(i<count){
      let star=document.createElement('i');
      let x=Math.floor(Math.random()*window.innerWidth);
      let y=Math.floor(Math.random()*window.innerHeight/2);
      let duration=Math.random()*10;
      let size=Math.random()*6;
      star.style.left=x+'px';
      star.style.top=y+'px';
      star.style.width=1+size+'px';
      star.style.height=1+size+'px';
      star.style.animationDuration=5+duration+'s';
      star.style.animationDelay=duration+'s';

      scene.appendChild(star);
      i++;
  }
}
stars(); 

