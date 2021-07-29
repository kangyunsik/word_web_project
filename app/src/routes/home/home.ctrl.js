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
        res.json(verify(req).success);
    }
};

function verify (req){
    if(req.body.id === "root" && req.body.pw === "password")
        return {success:true};
    else
        return {success:false};
}

module.exports = {
    output,
    process,
};