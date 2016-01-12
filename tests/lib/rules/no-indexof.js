/**
 * @fileoverview Disallow using the method indexOf
 * @author Jordan Eldredge
 * @copyright 2016 Jordan Eldredge. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-indexof");
var RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var errors = [{ message: "Array.indexOf() is not supported in IE < 9. If this is not an array, it may be safely ignored." }];

ruleTester.run("no-indexof", rule, {
    valid: [
        "myArray.myMethod(x);",
        { code: "_.indexOf(myArray, x);", options: [{'exceptOn': ['_']}] },
        "indexOf(x);",
        "anotherFunction(x);"
    ],
    invalid: [ {
        code: "myArray.indexOf(x);",
        errors: errors
    }, {
        code: "myArray.indexOf(x, fromIndex);",
        errors: errors
    }, {
        code: "_.indexOf(bar, x);",
        errors: errors
    }, {
        code: "myString.indexOf('bar');",
        errors: errors
    }, {
        code: "this.indexOf('bar');",
        errors: errors
    }]
});
