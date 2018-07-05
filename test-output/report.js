$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.Feature");
formatter.feature({
  "line": 1,
  "name": "demoqa regitrion",
  "description": "",
  "id": "demoqa-regitrion",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "demo page reg text box only",
  "description": "",
  "id": "demoqa-regitrion;demo-page-reg-text-box-only",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user navigates to demo page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user enters firstname\"\u003cfname\u003e\" and lastname\"\u003clname\u003e\"and phonenumber\"\u003cpnumber\u003e\"and username\"\u003cuname\u003e\" and email\"\u003cemail\u003e\"and password \"\u003cpassword\u003e\"and conpassword\"\u003cconpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user verify first name\"\u003cfname\u003e\" andlast name\"\u003clname\u003e\" and phonenumber \"\u003cpnumber\u003e\"and username \"\u003cuname\u003e\" and email \"\u003cemail\u003e\" and password \"\u003cpassword\u003e\"and conpassword\"\u003cconpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "demoqa-regitrion;demo-page-reg-text-box-only;",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "pnumber",
        "uname",
        "email",
        "password",
        "conpassword"
      ],
      "line": 9,
      "id": "demoqa-regitrion;demo-page-reg-text-box-only;;1"
    },
    {
      "cells": [
        "santhosh",
        "kumar",
        "9895949392",
        "san",
        "bala@gmail.com",
        "123456789",
        "123456789"
      ],
      "line": 10,
      "id": "demoqa-regitrion;demo-page-reg-text-box-only;;2"
    },
    {
      "cells": [
        "san1",
        "kumar1",
        "9790935323",
        "san1",
        "bala93@gmail.com",
        "15678978",
        "15678978"
      ],
      "line": 11,
      "id": "demoqa-regitrion;demo-page-reg-text-box-only;;3"
    },
    {
      "cells": [
        "san2",
        "kumar2",
        "9843536373",
        "san2",
        "bala95@gmail.com",
        "123456798",
        "123466798"
      ],
      "line": 12,
      "id": "demoqa-regitrion;demo-page-reg-text-box-only;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "demo page reg text box only",
  "description": "",
  "id": "demoqa-regitrion;demo-page-reg-text-box-only;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user navigates to demo page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user enters firstname\"santhosh\" and lastname\"kumar\"and phonenumber\"9895949392\"and username\"san\" and email\"bala@gmail.com\"and password \"123456789\"and conpassword\"123456789\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user verify first name\"santhosh\" andlast name\"kumar\" and phonenumber \"9895949392\"and username \"san\" and email \"bala@gmail.com\" and password \"123456789\"and conpassword\"123456789\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Demostepefinition.the_user_navigates_to_demo_page()"
});
formatter.result({
  "duration": 11687490857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh",
      "offset": 26
    },
    {
      "val": "kumar",
      "offset": 49
    },
    {
      "val": "9895949392",
      "offset": 71
    },
    {
      "val": "san",
      "offset": 95
    },
    {
      "val": "bala@gmail.com",
      "offset": 110
    },
    {
      "val": "123456789",
      "offset": 139
    },
    {
      "val": "123456789",
      "offset": 165
    }
  ],
  "location": "Demostepefinition.the_user_enters_firstname_and_lastname_and_phonenumber_and_username_and_email_and_password_and_conpassword(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1177913497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh",
      "offset": 27
    },
    {
      "val": "kumar",
      "offset": 50
    },
    {
      "val": "9895949392",
      "offset": 74
    },
    {
      "val": "san",
      "offset": 99
    },
    {
      "val": "bala@gmail.com",
      "offset": 115
    },
    {
      "val": "123456789",
      "offset": 145
    },
    {
      "val": "123456789",
      "offset": 171
    }
  ],
  "location": "Demostepefinition.the_user_verify_first_name_andlast_name_and_phonenumber_and_username_and_email_and_password_and_conpassword(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 193117818,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "demo page reg text box only",
  "description": "",
  "id": "demoqa-regitrion;demo-page-reg-text-box-only;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user navigates to demo page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user enters firstname\"san1\" and lastname\"kumar1\"and phonenumber\"9790935323\"and username\"san1\" and email\"bala93@gmail.com\"and password \"15678978\"and conpassword\"15678978\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user verify first name\"san1\" andlast name\"kumar1\" and phonenumber \"9790935323\"and username \"san1\" and email \"bala93@gmail.com\" and password \"15678978\"and conpassword\"15678978\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Demostepefinition.the_user_navigates_to_demo_page()"
});
formatter.result({
  "duration": 17921302380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "san1",
      "offset": 26
    },
    {
      "val": "kumar1",
      "offset": 45
    },
    {
      "val": "9790935323",
      "offset": 68
    },
    {
      "val": "san1",
      "offset": 92
    },
    {
      "val": "bala93@gmail.com",
      "offset": 108
    },
    {
      "val": "15678978",
      "offset": 139
    },
    {
      "val": "15678978",
      "offset": 164
    }
  ],
  "location": "Demostepefinition.the_user_enters_firstname_and_lastname_and_phonenumber_and_username_and_email_and_password_and_conpassword(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1283696220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "san1",
      "offset": 27
    },
    {
      "val": "kumar1",
      "offset": 46
    },
    {
      "val": "9790935323",
      "offset": 71
    },
    {
      "val": "san1",
      "offset": 96
    },
    {
      "val": "bala93@gmail.com",
      "offset": 113
    },
    {
      "val": "15678978",
      "offset": 145
    },
    {
      "val": "15678978",
      "offset": 170
    }
  ],
  "location": "Demostepefinition.the_user_verify_first_name_andlast_name_and_phonenumber_and_username_and_email_and_password_and_conpassword(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 180984994,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "demo page reg text box only",
  "description": "",
  "id": "demoqa-regitrion;demo-page-reg-text-box-only;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user navigates to demo page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user enters firstname\"san2\" and lastname\"kumar2\"and phonenumber\"9843536373\"and username\"san2\" and email\"bala95@gmail.com\"and password \"123456798\"and conpassword\"123466798\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user verify first name\"san2\" andlast name\"kumar2\" and phonenumber \"9843536373\"and username \"san2\" and email \"bala95@gmail.com\" and password \"123456798\"and conpassword\"123466798\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Demostepefinition.the_user_navigates_to_demo_page()"
});
formatter.result({
  "duration": 20222878124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "san2",
      "offset": 26
    },
    {
      "val": "kumar2",
      "offset": 45
    },
    {
      "val": "9843536373",
      "offset": 68
    },
    {
      "val": "san2",
      "offset": 92
    },
    {
      "val": "bala95@gmail.com",
      "offset": 108
    },
    {
      "val": "123456798",
      "offset": 139
    },
    {
      "val": "123466798",
      "offset": 165
    }
  ],
  "location": "Demostepefinition.the_user_enters_firstname_and_lastname_and_phonenumber_and_username_and_email_and_password_and_conpassword(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1216528875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "san2",
      "offset": 27
    },
    {
      "val": "kumar2",
      "offset": 46
    },
    {
      "val": "9843536373",
      "offset": 71
    },
    {
      "val": "san2",
      "offset": 96
    },
    {
      "val": "bala95@gmail.com",
      "offset": 113
    },
    {
      "val": "123456798",
      "offset": 145
    },
    {
      "val": "123466798",
      "offset": 171
    }
  ],
  "location": "Demostepefinition.the_user_verify_first_name_andlast_name_and_phonenumber_and_username_and_email_and_password_and_conpassword(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 185392473,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "demo page reg radiobutton and checkbox",
  "description": "",
  "id": "demoqa-regitrion;demo-page-reg-radiobutton-and-checkbox",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "the user click staus button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the user click check box",
  "keyword": "When "
});
formatter.match({
  "location": "Demostepefinition.the_user_click_staus_button()"
});
formatter.result({
  "duration": 134400334,
  "status": "passed"
});
formatter.match({
  "location": "Demostepefinition.the_user_click_check_box()"
});
formatter.result({
  "duration": 127562807,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "demo page dropdown selection",
  "description": "",
  "id": "demoqa-regitrion;demo-page-dropdown-selection",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "the user select the country",
  "rows": [
    {
      "cells": [
        "country"
      ],
      "line": 20
    },
    {
      "cells": [
        "Albania"
      ],
      "line": 21
    },
    {
      "cells": [
        "Angola"
      ],
      "line": 22
    },
    {
      "cells": [
        "Armenia"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the user select the DOoB",
  "rows": [
    {
      "cells": [
        "month",
        "day",
        "year"
      ],
      "line": 25
    },
    {
      "cells": [
        "1",
        "11",
        "1999"
      ],
      "line": 26
    },
    {
      "cells": [
        "2",
        "2",
        "2000"
      ],
      "line": 27
    },
    {
      "cells": [
        "5",
        "5",
        "2010"
      ],
      "line": 28
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Demostepefinition.the_user_select_the_country(DataTable)"
});
formatter.result({
  "duration": 450707518,
  "status": "passed"
});
formatter.match({
  "location": "Demostepefinition.the_user_select_the_DOoB(DataTable)"
});
formatter.result({
  "duration": 1488542055,
  "status": "passed"
});
});