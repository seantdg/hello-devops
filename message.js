module.exports = {
    getMessage: function (name) {
        if(name) {
            return "Hello " + name + ".";
        }
        else {
            return "Hello friend.";
        }
    }

};
