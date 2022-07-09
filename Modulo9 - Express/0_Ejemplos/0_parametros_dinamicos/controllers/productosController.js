let productosController={

    listado: function(req,res) {},

    crear: function(req,res) {},

    detalle: function(req,res){
        res.send("Producto con id: "+req.params.idProducto);
    },

    comentarios: function(req,res){
        res.send("Comentarios del producto con id: "+req.params.idProducto);
    },
    
    detalleComentarios: function(req,res){
        if(req.params.idComentario == undefined){
            res.send("Comentarios del producto con id: "+req.params.idProducto);
        } else{
            res.send("Comentarios del producto con id: "+req.params.idProducto+" y estas enfocado en el comentario "+req.params.idComentario);
        }
    },
};



module.exports = productosController;