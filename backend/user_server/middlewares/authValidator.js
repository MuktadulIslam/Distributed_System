async function registrationValidator(req, res) {
    res.send("Response from registrationValidator!!!!");
}

async function loginValidator(req, res) {
    res.send("Response from loginValidator!!!!");
}

async function checkAuthentication(req, res) {
    res.send("Response from checkAuthentication!!!!");
}

module.exports = {
    registrationValidator, loginValidator,checkAuthentication
}