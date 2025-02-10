const standard_userAction = require("../pages/standard_userAction");
//  const verifyproductAction = require("../pages/verifyproductAction");
// let HomePageproductName;
var HomePageproductName;
var HomePageproductName2;
var  HomePageproductName3;

describe("Add_to_cart_successful_massage_varification", async() => {

it("standard_user_login", async () =>{

await standard_userAction.click_onusername();

await standard_userAction.click_onpassword();

await standard_userAction.loginfield_click();
});

it("app_state_reset",async() =>{
    
await standard_userAction.menu_click();
await standard_userAction.click_Reset();
await standard_userAction.click_cross();
});

it(" product name & price",async() =>{
    //product-name
  HomePageproductName = await standard_userAction.get_home_product_name1();
  HomePageproductName2 = await standard_userAction.get_home_product_name2();
  HomePageproductName3 = await standard_userAction.get_home_product_name3();

//product-price
 home_page_product_price1 = await standard_userAction.get_home_product_price1();  
 home_page_product_price2 = await standard_userAction.get_home_product_price2();
 home_page_product_price3 = await standard_userAction.get_home_product_price3();

});
it("add to cart product", async() =>{
await standard_userAction.add_to_product();
await standard_userAction.add_to_product2();
await standard_userAction.add_to_product3();
await standard_userAction.click_cart_link();
});

it("cheak_out_page",async() =>{

await standard_userAction.click_cheakout();
await standard_userAction.click_first_name();
await standard_userAction.click_last_name();
await standard_userAction.click_postal_code();
await standard_userAction.click_continue();
});

// it("verify_product name & price", async() =>{
//   //expect(productsName).toHaveText(verifyProductsName);
//   await expect(HomePageproductName).toEqual(verifyproductAction.get_verify_product_name1);
//   await expect(HomePageproductName2).toEqualText(verifyproductAction.get_verify_product_name2);
//  await expect( HomePageproductName3).toEqual(verifyproductAction.get_verify_product_name3);
// //  //
// await expect(home_page_product_price1).toHaveText(verifyproductAction.get_verify_product_price1);
// await expect(home_page_product_price2).toHaveText(verifyproductAction.get_verify_product_price2);
// await expect(home_page_product_price2).toHaveText(verifyproductAction.get_verify_product_price3);


// });


it("app state reset & logout",async() =>{

await standard_userAction.click_finis();
await standard_userAction.back_to_home();
await standard_userAction.menu_click();
await standard_userAction.click_Reset();
await standard_userAction.click_log_out();


});

});