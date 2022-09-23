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

    let tsec = req.headers.tsec;

    let bodyThirdPartyUserId = req.body.thirdPartyUserId;

    Error.ErrorSchema.errorParameters.name = "errorcito";

    if (tsec == null || tsec == "") {
        return res.status(400).json({
            code: "unauthorized",
            message: "unauthorized",
            parameters: [],
            type: "FATAL"
        });
    }

    if (thirdPartyProviderId == null) {
        return res.status(400).json({
            code: "functionalError",
            message: "",
            parameters: [],
            type: "FATAL"
        });
    }

    if (thirdPartyProviderId.includes(" ")) {
        return res.status(400).json({
            code: "functionalError",
            message: "00000001#PARAMETROS OBLIGATORIOS",
            parameters: [],
            type: "FATAL"
        });
    }

    if (bodyThirdPartyUserId == null) {
        return res.status(400).json({
            code: "El valor obligatorio no se ha informado: thirdPartyUserId no puede ser null",
            message: "00000001#PARAMETROS OBLIGATORIOS",
            parameters: [{name: "thirdPartyUserId no puede ser null"}],
            type: "FATAL"
        });
    }

    console.log(bodyThirdPartyUserId);

    User.UserSchema.apellido = "correa";

    res.status(204).json({
        
    });
}


module.exports = {
    saveUser, unbind
};