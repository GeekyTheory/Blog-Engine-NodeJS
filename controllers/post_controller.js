// Load :postid
exports.load = function (req, res, next, id) {
    req.post = {id: id, title: "hola mundo"};
    next();
};

// GET /posts
exports.index = function (req, res, next) {
    res.end("Listado de todos los Posts");
};

// GET /posts/123
exports.show = function (req, res, next) {
    res.end("Ver el post " + req.params['postid']);
};

// GET /posts/new
exports.new = function (req, res, next) {
    res.end("Formulario para nuevo post");
};

// POST /posts
exports.create = function(req, res, next) {
    res.end("Crear nuevo post");
};

// GET /posts/123/edit
exports.edit = function(req, res, next) {
    res.end("Obtener formulario para post: " + req.params['postid']);
};

// PUT /posts/123
exports.update = function(req, res, next) {
    res.end("Actualizar el post " + req.params['postid']);
};

// DELETE /posts/123
exports.destroy = function(req, res, next) {
    res.end("Borrar el post " + req.params['postid']);
};