$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Customers.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Functionality",
  "description": "",
  "id": "customer-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7343664800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Following are common steps for every scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 139126900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "Steps.user_open_URL(String)"
});
formatter.result({
  "duration": 7653523500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 363575400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 8734646900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 11490300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Add new Customer",
  "description": "",
  "id": "customer-functionality;add-new-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User click on customer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on customer menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on Add new button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User can view Add new Customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enter customer info",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User can view information message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 2149214300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customer_menu_Item()"
});
formatter.result({
  "duration": 4895951400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_new_button()"
});
formatter.result({
  "duration": 4652532100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Add_new_Customer_page()"
});
formatter.result({
  "duration": 30648300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enter_customer_info()"
});
formatter.result({
  "duration": 12678317700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_save_button()"
});
formatter.result({
  "duration": 5028051300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully.",
      "offset": 35
    }
  ],
  "location": "Steps.user_can_view_information_message(String)"
});
formatter.result({
  "duration": 318696300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 779700500,
  "status": "passed"
});
formatter.before({
  "duration": 5410522500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Following are common steps for every scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 435700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "Steps.user_open_URL(String)"
});
formatter.result({
  "duration": 7241336500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 326369800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 6446868400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 6984800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search Customer by EmailId",
  "description": "",
  "id": "customer-functionality;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User click on customer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "click on customer menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "enter customer Email",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user should found Email in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 2124193200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customer_menu_Item()"
});
formatter.result({
  "duration": 4816869300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_Email()"
});
formatter.result({
  "duration": 548764500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Search_button()"
});
formatter.result({
  "duration": 5139755400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Email_in_the_Search_table()"
});
formatter.result({
  "duration": 114159700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 790168800,
  "status": "passed"
});
formatter.before({
  "duration": 5456783200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Following are common steps for every scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 324400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "Steps.user_open_URL(String)"
});
formatter.result({
  "duration": 7281895400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 338764100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 9390400900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 8921400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Search Customer by Name",
  "description": "",
  "id": "customer-functionality;search-customer-by-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "#\tGiven User launch Chrome browser"
    },
    {
      "line": 36,
      "value": "#\tWhen User open URL \"https://admin-demo.nopcommerce.com/login\""
    },
    {
      "line": 37,
      "value": "#\tAnd User enters Email as \"admin@yourstore.com\" and Password as \"admin\""
    },
    {
      "line": 38,
      "value": "#\tAnd Click on Login"
    },
    {
      "line": 39,
      "value": "#\tThen User can view Dashboard"
    }
  ],
  "line": 40,
  "name": "User click on customer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "click on customer menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "enter customer FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "enter customer LastName",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user should found Name in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 2144847800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customer_menu_Item()"
});
formatter.result({
  "duration": 5773628800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_FirstName()"
});
formatter.result({
  "duration": 215226300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_LastName()"
});
formatter.result({
  "duration": 335218300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Search_button()"
});
formatter.result({
  "duration": 5115496400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Name_in_the_Search_table()"
});
formatter.result({
  "duration": 106754700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 775708400,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5416742900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login-functionality;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on Log out Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 309100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "Steps.user_open_URL(String)"
});
formatter.result({
  "duration": 8271337200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 334094200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 8983662200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 51756700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_Link()"
});
formatter.result({
  "duration": 5286389500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 27450900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 760188300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login-functionality;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click on Log out Link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-functionality;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 27,
      "id": "login-functionality;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 28,
      "id": "login-functionality;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin@gmail.com",
        "kfbakd"
      ],
      "line": 29,
      "id": "login-functionality;successful-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5434169400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login-functionality;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click on Log out Link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 416300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "Steps.user_open_URL(String)"
});
formatter.result({
  "duration": 7722285500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 316736800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 8184124000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 62700200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_Link()"
});
formatter.result({
  "duration": 6512271700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 16933000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 781727500,
  "status": "passed"
});
formatter.before({
  "duration": 5392504900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login-functionality;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Email as \"admin@gmail.com\" and Password as \"kfbakd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click on Log out Link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 270900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "Steps.user_open_URL(String)"
});
formatter.result({
  "duration": 7201017200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@gmail.com",
      "offset": 22
    },
    {
      "val": "kfbakd",
      "offset": 56
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 310505100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 1332605700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 160596000,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat com.nonCommerce.stepDefinitions.Steps.page_Title_should_be(Steps.java:119)\r\n\tat ✽.Then Page Title should be \"Dashboard / nopCommerce administration\"(Login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});