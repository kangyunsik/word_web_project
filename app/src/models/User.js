const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const body = this.body;
        const {id, pw} = await UserStorage.getUserInfo(body.id);

        if (id) {
            if (pw === body.pw) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 올바르지 않습니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    }

    async register() {
        try {
            return await UserStorage.save(this.body);
        } catch (err) {
            return {success: false, msg: err}
        };
    }
}

module.exports = User;