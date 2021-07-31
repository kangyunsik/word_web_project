const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const {id, pw} = UserStorage.getUserInfo(body.id);

        if (id) {
            if (pw === body.pw) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 옳바르지 않습니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    }

    register(){
        const body = this.body;
        const userResponse = UserStorage.save(body);
        if(userResponse){
            return {success:true,msg:"회원가입에 성공했습니다."};
        }
        return {success:false,msg:"회원가입에 실패했습니다."};
    }
}

module.exports = User;