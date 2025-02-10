class standard_userObject{
    get usernameField(){
        return $("//input[@placeholder ='Username']")
    }
    get passwordfield(){
        return $("//input[@placeholder ='Password']")
    }
    get loginfield(){
        return $("//input[@class='submit-button btn_action']")
    }
    get menu(){
        return $("//button[@id='react-burger-menu-btn']")
    }
    get Reset(){
        return $("//a[@id='reset_sidebar_link']")
    }
    get cross(){
        return $("//button[@id='react-burger-cross-btn']")
    }
    // home page 
    get home_product_name1(){
        return $("(//div[contains(@class, 'inventory_item_name')])[1]")
    }
    get home_product_name2(){
        return $("(//div[contains(@class, 'inventory_item_name')])[2]")
    }
    get home_product_name3(){
        return $("(//div[contains(@class, 'inventory_item_name')])[3]")
    }
    //price 
    get product_price1(){
        return $("(//div[contains(@class, 'inventory_item_price')])[1]")
    }
    get product_price2(){
        return $("(//div[contains(@class, 'inventory_item_price')])[2]")
    }
    get product_price3(){
        return $("(//div[contains(@class, 'inventory_item_price')])[3]")
    }
    
    // verify page 
   
    // ----
    get add_product(){
        return $("(//button[contains(@class,'btn_inventory')])[1]")
    }
    get add_product2(){
        return $("(//button[contains(@class,'btn_inventory')])[2]")
    }
    get add_product3(){
        return $("(//button[contains(@class,'btn_inventory')])[3]")
    }
    get cart_link(){
        return $("//a[@class='shopping_cart_link']")
    }
    get cheakout(){
        return $("//button[@id='checkout']")
    }
    get first_name(){
        return $("//input[@placeholder='First Name']")
    }
    get last_name(){
        return $("//input[@placeholder='Last Name']")
    }
    get postal_code(){
        return $("//input[@placeholder='Zip/Postal Code']")
    }
    get continue(){
        return $("//input[@id='continue']")
    }
    get finis(){
        return $("//button[@id='finish']")
    }
    get back_home(){
        return $("//button[@id='back-to-products']")
    }
    get menu(){
        return $("//button[@id='react-burger-menu-btn']")
    }
    get Reset(){
        return $("//a[@id='reset_sidebar_link']")
    }
    get log_out(){
        return $("//a[@id='logout_sidebar_link']")
    }
}
module.exports = new standard_userObject();