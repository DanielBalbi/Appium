const wdio = require("webdriverio");
const assert = require("assert");
const { default: $ } = require("webdriverio/build/commands/browser/$");


const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9.0.0",
    deviceName: "Android",
    app: "C:\\Users\\balbi\\OneDrive\\Escritorio\\testapp\\Android-NativeDemoApp-0.4.0.apk",
    appPackage: "com.wdiodemoapp",
    appActivity: ".SplashActivity",
    automationName: "UiAutomator2"
    
  }
  };

  async function sign() {
    const client = await wdio.remote(opts);
    const field = await client.$("//android.widget.Button[@content-desc='Login']");
    const value = await field.click();
    const field1 = await client.$("//android.view.ViewGroup[@content-desc='button-sign-up-container']/android.view.ViewGroup/android.widget.TextView");
    const value1 = await field1.click();
    const field2 = await client.$("//android.widget.EditText[@content-desc='input-email']");
    await field2.setValue("balbi@hotmail.com");
    const field3 = await client.$("//android.widget.EditText[@content-desc='input-password']");
    await field3.setValue("myclavede7caracteres");
    const field4 = await client.$("//android.widget.EditText[@content-desc='input-repeat-password']");
    await field4.setValue("myclavede7caracteres");
    const field5 = await client.$("//android.view.ViewGroup[@content-desc='button-SIGN UP']/android.view.ViewGroup");
    const value5 = await field5.click();
   
  
  }

sign();