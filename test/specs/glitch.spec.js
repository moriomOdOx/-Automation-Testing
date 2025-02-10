const glitch_userAction = require("../pages/glitch_userAction");

describe("add to cart product successful order massage", async() => {

    it("performance_glitch_user login", async () =>{

       await glitch_userAction.click_onusername();

       await glitch_userAction.click_onpassword();

       await glitch_userAction.loginfield_click();
    });
    it("app state reset", async () =>{
       await glitch_userAction.menu_click();
       await glitch_userAction.click_Reset();
       await glitch_userAction.click_cross();
    });
    it("go to filter and add_to_product", async() =>{
        await glitch_userAction.click_filter();
        await glitch_userAction.click_select();
        await glitch_userAction.click_add_product();


    });
    it("cheakout & cheak_the product", async() =>{
      
       await glitch_userAction.click_cart_link();
       await glitch_userAction.click_cheakout();
       await glitch_userAction.click_first_name();
       await glitch_userAction.click_last_name();
       await glitch_userAction.click_postal_code();
       await glitch_userAction.click_continue();
    });
    it("verify successful massage", async() =>{

       await glitch_userAction.click_finis();
       await glitch_userAction.back_to_home();
       await glitch_userAction.menu_click();
       await glitch_userAction.click_Reset();
       await glitch_userAction.click_log_out();


    });




}); 

