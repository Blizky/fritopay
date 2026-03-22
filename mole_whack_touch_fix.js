(()=>{
const style=document.createElement('style');
style.textContent='.mole-runner.show{pointer-events:auto !important;touch-action:manipulation;}';
document.head.appendChild(style);

function handleTap(event){
  const target=event.target;
  if(!(target instanceof HTMLElement)) return;
  if(!target.classList.contains('mole-runner')) return;
  if(!target.classList.contains('show')) return;
  event.preventDefault();
  event.stopPropagation();
  try{ target.click(); }catch{}
}

moleRunner.addEventListener('pointerdown',handleTap,true);
moleRunner.addEventListener('touchstart',handleTap,{capture:true,passive:false});
})();
