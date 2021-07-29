function home (req, res) {
    res.render("home/index");
};

function login (req,res) {
    res.render("home/login");
};

module.exports = {
    home,
    login,
};