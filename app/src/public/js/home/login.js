const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

console.log(id);
console.log(password);
console.log("client side test.");

loginBtn.addEventListener("click",()=>{
   console.log(id.value);
   console.log(password.value);
   const req = {
      id:id.value,
      pw:password.value,
   };
});