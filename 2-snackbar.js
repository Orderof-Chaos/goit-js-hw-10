import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector("fieldset"),o=document.querySelector("input[type=number]"),n=document.querySelector(".form");let t,e;i.addEventListener("change",function(s){s.target.value==="fulfilled"?t=!0:t=!1,console.log(t)});n.addEventListener("submit",function(s){s.preventDefault(),console.log(o),e=o.value,console.log(e),o&&(console.log("tes"),setTimeout(t?()=>new Promise(l=>{r.show({message:`✅ Fulfilled promise in ${e}ms`,messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight"})}):()=>new Promise(l=>{r.show({message:`❌ Rejected promise in ${e}ms`,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"})}),e),o.value="")});
//# sourceMappingURL=2-snackbar.js.map
