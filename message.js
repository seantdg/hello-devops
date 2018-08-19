'use strict';

module.exports = {
    getMessage: function (name) {
        var message = "";
        if (name) {
            message = "Hello " + name + ".";
        } else {
            message = "Hello friend.";
        }
        return message;
    }

};
