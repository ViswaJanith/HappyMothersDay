alert("Dedicated to my mom")
const hidePage= ()=>{
let fp=document.getElementsByClassName("page");
fp[0].style.left="-50%";
fp[1].style.visibility="visible";
setTimeout(()=>{
fp[0].style.visibility="hidden";
},1000)
};
