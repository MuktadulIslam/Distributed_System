const {abc} = require("./test2.js");
abc().then(() => {
    console.log("hello");

    function xyz() {
        console.log("hi")
    }
});

module.exports = {
    xyz
};