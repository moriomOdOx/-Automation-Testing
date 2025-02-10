const standard_userObject = require("./standard_userObject");
class standard_userAction{
    async click_onusername(){
        await standard_userObject.usernameField.click();
        await standard_userObject.usernameField.setValue("standard_user");
        
    }
    
    async click_onpassword(){
        await standard_userObject.passwordfield.click();
        await standard_userObject.passwordfield.setValue("secret_sauce");
        
    }
   
    async loginfield_click(){
        await standard_userObject.loginfield.click();
        
    }
    async menu_click(){
        await standard_userObject.menu.click();
    }
    async click_Reset(){
        await standard_userObject.Reset.click();
        
    }
    async click_cross(){
        await standard_userObject.cross.click();
    }
    // home page 
    //name
    async get_home_product_name1(){
        return await standard_userObject.home_product_name1.getText();
    }
    async get_home_product_name2(){
        return await standard_userObject.home_product_name2.getText();
    }
    async get_home_product_name3(){
        return await standard_userObject. home_product_name3.getText();
    }
    //price
    async get_home_product_price1(){
        return await standard_userObject.product_price1.getText();
    }
    async get_home_product_price2(){
        return await standard_userObject.product_price2.getText();
    }
    async get_home_product_price3(){
        return await standard_userObject.product_price3.getText();
    }




    // verify page
    


    //-----------//
    async add_to_product(){
        await standard_userObject.add_product.click();
    }
    async add_to_product2(){
        await standard_userObject.add_product2.click();
    }
    async add_to_product3(){
        await standard_userObject.add_product3.click();
    }
    async click_cart_link(){
        await standard_userObject.cart_link.click();
    }
    async click_cheakout(){
        await standard_userObject.cheakout.click();
    }
    async click_first_name(){
        await standard_userObject.first_name.click();
        await standard_userObject.first_name.setValue("moriom");
    }
    async click_last_name(){
        await standard_userObject.last_name.click();
        await standard_userObject.last_name.setValue("akter");
    }
    async click_postal_code(){
        await standard_userObject.postal_code.click();
        await standard_userObject.postal_code.setValue("12345");
    }
    async click_continue(){
        await standard_userObject.continue.click();
    }
    async click_finis(){
        await standard_userObject.finis.click();
    }
    async back_to_home(){
        await standard_userObject.back_home.click();
    }
    async menu_click(){
        await standard_userObject.menu.click();
    }
    async click_Reset(){
        await standard_userObject.Reset.click();
        
    }
    async click_log_out(){
        await standard_userObject.log_out.click();
    }
}
module.exports = new standard_userAction();