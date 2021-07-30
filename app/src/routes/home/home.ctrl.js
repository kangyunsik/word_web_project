const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        console.log(req.body);
        res.json(verify(req));
    }
};

function verify (req){
    if(req.body.id === "root" && req.body.pw === "password")
        return {
            success:true,
        };
    else
        return {
            success:false,
            msg:"로그인에 실패했습니다.",
        };
}

module.exports = {
    output,
    process,
};