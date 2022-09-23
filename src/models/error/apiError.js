'use strict'

var ErrorParameters = require("../error/errorParameters");

var ErrorSchema = {
    code: String,
    message: String,
    nombre: String,
    /* errorParameters: ErrorParameters, */
    errorParameters: [ErrorParameters],
    type: String
};

module.exports = {
    ErrorSchema
};