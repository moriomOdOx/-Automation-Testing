const glitch_userObject=require("./glitch_userObject");
class glitch_userAction{
     async click_onusername(){
            await glitch_userObject.usernameField.click();
            await glitch_userObject.usernameField.setValue("performance_glitch_user");
            
        }
        
        async click_onpassword(){
            await glitch_userObject.passwordfield.click();
            await glitch_userObject.passwordfield.setValue("secret_sauce");
            
        }
       
        async loginfield_click(){
            await glitch_userObject.loginfield.click();
            
        }
         async menu_click(){
                await glitch_userObject.menu.click();
            }
            async click_Reset(){
                await glitch_userObject.Reset.click();
                
            }
            async click_cross(){
                await glitch_userObject.cross.click();
            }
            async click_filter(){
                await glitch_userObject.filter.click();
            }
            async click_select(){
                await glitch_userObject.select.click();
            }
            async click_add_product(){
                await glitch_userObject.add_product.click();
            }
            async click_cart_link(){
                    await glitch_userObject.cart_link.click();
                }
                async click_cheakout(){
                    await glitch_userObject.cheakout.click();
                }
                async click_first_name(){
                    await glitch_userObject.first_name.click();
                    await glitch_userObject.first_name.setValue("moriom");
                }
                async click_last_name(){
                    await glitch_userObject.last_name.click();
                    await glitch_userObject.last_name.setValue("akter");
                }
                async click_postal_code(){
                    await glitch_userObject.postal_code.click();
                    await glitch_userObject.postal_code.setValue("12345");
                }
                async click_continue(){
                    await glitch_userObject.continue.click();
                }
                async click_finis(){
                    await glitch_userObject.finis.click();
                }
                async back_to_home(){
                    await glitch_userObject.back_home.click();
                }
                async menu_click(){
                    await glitch_userObject.menu.click();
                }
                async click_Reset(){
                    await glitch_userObject.Reset.click();
                    
                }
                async click_log_out(){
                    await glitch_userObject.log_out.click();
                }

}
module.exports = new glitch_userAction();