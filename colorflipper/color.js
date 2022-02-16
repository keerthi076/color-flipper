const colors=[1,2,3,4,5,6,"A","B","C","D","F"];
const butt=document.getElementById("click");
const text= document.querySelector(".color");

butt.addEventListener("click",function(){
	let hex="#";

for( let i=0;i<6;i++){
      hex += colors[getrandomnumber()];}
      text.textContent=hex;
      document.body.style.backgroundColor=hex;

      

});
function getrandomnumber(){
	return Math.floor(Math.random() * colors.length);
}
