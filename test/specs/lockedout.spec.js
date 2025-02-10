const locked_out_user_loginAction = require("../pages/locked_out_user_loginAction");
describe("swag lab demo", async() => {

it("locked_out_user_varification", async () =>{

await locked_out_user_loginAction.click_onusername();

await locked_out_user_loginAction.click_onpassword();

await locked_out_user_loginAction.loginfield_click();




});

});