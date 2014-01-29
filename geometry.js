
module.exports = function (context) {
	var Buffer = require('wgl-buffer')(context);
	var gl = context;
	var Geometry = function () {
		Geometry.prototype.init.apply(this, arguments);
	};

	Geometry.prototype.init = function(options) {
		this.vertices = options.vertices;
		this.normals = options.normals;
		this.indices = options.indices;
		if (this.vertices) {
			this.VBO = Buffer.createVBO(this.vertices);
		}
		if (this.normals) {
			this.NBO = Buffer.createVBO(this.normals);
		}
		if (this.indices) {
			this.IBO = Buffer.createIBO(this.indices);
		}
	};

	return Geometry;
};

