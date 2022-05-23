//METODO DE FUNCION
// const objeto={}
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo ${id}`)
    }
    ,
    pausar: function(){
        console.log('Pausando...')
    }
    ,
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`)
    }
    ,
    reproducirPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`)
    }


}

reproductor.borrarCancion= function(id){
    console.log(`Eliminado la cancion ${id}`)
}

reproductor.reproducir(40);
reproductor.pausar();
reproductor.borrarCancion(35);
reproductor.crearPlaylist("Las favoritas");
reproductor.reproducirPlaylist(2);