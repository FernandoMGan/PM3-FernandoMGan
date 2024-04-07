exports.success = function (req, res, mensaje = '', status = 200) {
    res.status(status).send({
        status: statusCode,
        body: mensaje,
        error: false,
    });
} 
exports.error = function (req, res, mensaje = '', status = 500) {
    res.status(status).send({
        status: statusCode,
        body: mensaje,
        error: false,
    });
} 