/**
 * @fileoverview Disallow using the method indexOf
 * @author Jordan Eldredge
 * @copyright 2016 Jordan Eldredge. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var config = context.options[0] || {};
    var exceptOn = config.exceptOn || [];

    return {
        CallExpression: function (node) {
            if(node.callee.property.name === 'indexOf'){
                if(exceptOn.indexOf(node.callee.object.name) < 0) {
                    context.report(node, "Unexpected indexOf");
                }
            }
        }
    };

};

module.exports.schema = [
    {
        "type": "object",
        "properties": {
            "exceptOn": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            }
        }
    }
];
