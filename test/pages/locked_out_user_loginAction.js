const locked_out_user_loginObject =require("./locked_out_user_loginObje.js");

class locked_out_user_loginAction{
    async click_onusername(){
        await locked_out_user_loginObject.usernameField.click();
        await locked_out_user_loginObject.usernameField.setValue("locked_out_user");
        
    }
    // async input_username(){
    //     await locked_out_user_loginObject.usernameFields.setValue("locked_out_user");
        
    // }
    async click_onpassword(){
        await locked_out_user_loginObject.passwordfield.click();
        await locked_out_user_loginObject.passwordfield.setValue("secret_sauce");
        
    }
    // async input_password(){
    //     await locked_out_user_loginObject.passwordfield.setValue("secret_sauce");
        
    // }
    async loginfield_click(){
        await locked_out_user_loginObject.loginfield.click();
        
    }
}
module.exports = new locked_out_user_loginAction();