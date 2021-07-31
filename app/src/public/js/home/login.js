const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", () => {
    const req = {
        id: id.value,
        pw: password.value,
    };
    console.log("login" + JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json())
        .then(async (res) => {
            console.log(res.success);
            if (await res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생."));
        });
});
