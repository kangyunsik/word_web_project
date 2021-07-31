const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", () => {
    if(password.value !== confirmPassword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req = {
        id: id.value,
        name: name.value,
        pw: password.value,
    };

    console.log("register" + JSON.stringify(req));

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            console.log("CASE");
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
                location.href = "/register";
            }
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생."));
        });
});
