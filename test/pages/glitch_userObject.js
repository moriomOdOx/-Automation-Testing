class glitch_userObject{

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
    get filter(){
        return $("//select[@class='product_sort_container']")
    }
    get select(){
        return $("//option[@value='za']")
    }
    get add_product(){
        return $("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")
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
module.exports= new glitch_userObject();