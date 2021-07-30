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

   console.log("stringify : " +JSON.stringify(req));
   fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(req)
   })
       .then((res) => res.json())
       .then((res) => {
          if(res.success){
             location.href="/";
          }else{
            alert(res.msg);
          }
       })
       .catch((err) => {
          console.error(new Error("로그인 중 에러 발생."));
       });
});