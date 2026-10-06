const openBtn=document.getElementById("openBtn");
const loader=document.getElementById("loader");
const invitation=document.getElementById("invitation");
const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");

openBtn.addEventListener("click",()=>{
  loader.style.opacity="0";
  loader.style.transition="opacity .6s ease";
  setTimeout(()=>{loader.classList.add("hidden");invitation.classList.remove("hidden");window.scrollTo(0,0)},600);
  music.play().catch(()=>{});
});

const target=new Date("2027-01-01T10:00:00+05:30").getTime();
function updateCountdown(){
  const d=target-Date.now();
  const values=d>0?[
    Math.floor(d/86400000),
    Math.floor(d/3600000)%24,
    Math.floor(d/60000)%60,
    Math.floor(d/1000)%60
  ]:[0,0,0,0];
  ["days","hours","minutes","seconds"].forEach((id,i)=>document.getElementById(id).textContent=values[i]);
}
updateCountdown();setInterval(updateCountdown,1000);

musicBtn.addEventListener("click",()=>{
  if(music.paused){music.play();musicBtn.textContent="♫ Music playing · Tap to pause"}
  else{music.pause();musicBtn.textContent="♪ Click to unmute"}
});
