$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Balaji/work space/Sample/src/main/java/mycucumber/Sample/addcustomer.feature");
formatter.feature({
  "name": "Add new customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Fill add customer details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The User  lanunch   guru demo site",
  "keyword": "Given "
});
formatter.step({
  "name": "The User  Enter userName and password and cilck Newcustomer",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "user",
        "mngr156940"
      ]
    },
    {
      "cells": [
        "password",
        "myjujEr"
      ]
    }
  ]
});
formatter.step({
  "name": "Add new customer  \"\u003ccoustomer\u003e\",\"\u003cgender\u003e\",\"\u003cdob\u003e\",\"\u003caddress\u003e\",\"\u003ccity\u003e\",\"\u003cstate\u003e\"\"\u003cpin\u003e\",\"\u003cphone\u003e\",\"\u003cemail\u003e\"and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user validate New customer Text",
  "keyword": "Then "
});
formatter.step({
  "name": "The user close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "coustomer",
        "gender",
        "dob",
        "address",
        "city",
        "state",
        "pin",
        "phone",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "vicky",
        "male",
        "29/12/91",
        "abc street",
        "chennai",
        "tamilnadu",
        "625513",
        "9003612257",
        "vicky@gamil",
        "123@34"
      ]
    },
    {
      "cells": [
        "siva",
        "male",
        "5/5/90",
        "bbvv street",
        "chennai",
        "tamil nadu",
        "625511",
        "90036122445",
        "siva@gmail",
        "343@45"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Fill add customer details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "The User  lanunch   guru demo site",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcustomerguru.the_User_lanunch_guru_demo_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User  Enter userName and password and cilck Newcustomer",
  "rows": [
    {
      "cells": [
        "user",
        "mngr156940"
      ]
    },
    {
      "cells": [
        "password",
        "myjujEr"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomerguru.the_User_Enter_userName_and_password_and_cilck_Newcustomer(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add new customer  \"vicky\",\"male\",\"29/12/91\",\"abc street\",\"chennai\",\"tamilnadu\"\"625513\",\"9003612257\",\"vicky@gamil\"and \"123@34\"",
  "keyword": "When "
});
formatter.match({
  "location": "Addcustomerguru.add_new_customer_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user validate New customer Text",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcustomerguru.the_user_validate_New_customer_Text()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomerguru.the_user_close_browsere()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fill add customer details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "The User  lanunch   guru demo site",
  "keyword": "Given "
});
formatter.match({
  "location": "Addcustomerguru.the_User_lanunch_guru_demo_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User  Enter userName and password and cilck Newcustomer",
  "rows": [
    {
      "cells": [
        "user",
        "mngr156940"
      ]
    },
    {
      "cells": [
        "password",
        "myjujEr"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomerguru.the_User_Enter_userName_and_password_and_cilck_Newcustomer(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add new customer  \"siva\",\"male\",\"5/5/90\",\"bbvv street\",\"chennai\",\"tamil nadu\"\"625511\",\"90036122445\",\"siva@gmail\"and \"343@45\"",
  "keyword": "When "
});
formatter.match({
  "location": "Addcustomerguru.add_new_customer_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user validate New customer Text",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcustomerguru.the_user_validate_New_customer_Text()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Addcustomerguru.the_user_close_browsere()"
});
formatter.result({
  "status": "passed"
});
});