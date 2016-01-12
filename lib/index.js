/**
 * @fileoverview Disallow using the method indexOf
 * @author Jordan Eldredge
 * @copyright 2016 Jordan Eldredge. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = {
    "no-indexof": require("./rules/no-indexof.js")
}



