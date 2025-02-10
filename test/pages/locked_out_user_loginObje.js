class locked_out_user_loginObject{

    get usernameField(){
        return $("//input[@placeholder ='Username']")
    }
    get passwordfield(){
        return $("//input[@placeholder ='Password']")
    }
    get loginfield(){
        return $("//input[@class='submit-button btn_action']")
    }
    
}
module.exports = new locked_out_user_loginObject();