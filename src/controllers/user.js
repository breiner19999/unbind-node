"use strict";

var User = require("../models/user");
var Error = require("../models/error/apiError");

function saveUser(req, res) {
    res.json({
        ok: true,
        message: "Creacion Exitosa",
    });
}

function unbind(req, res) {
    var params = req.params;
    let thirdPartyProviderId = req.params.thirdPartyProviderId;
    console.log(thirdPartyProviderId);

    console.log(thirdPartyProviderId.includes(" "));

    Error.ErrorSchema.errorParameters.name = "errorcito";

    if (thirdPartyProviderId.includes(" ")) {
        return res.status(400).json({
            ok: false,
            error: Error,
            message: "No se pudo actualizar al usuario",
        });
    }

    User.UserSchema.apellido = "correa";

    res.json({
        ok: true,
        user: User,
        message: "Creacion GAA Exitosa",
    });
}


module.exports = {
    saveUser,unbind
};