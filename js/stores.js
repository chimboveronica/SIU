var storeInformacion;
var storeVideos;
var storeBuses;
var datos;
 storeBuses = Ext.create('Ext.data.Store', {
     data:[],
        reader: {
            type: 'json',
            root: 'data'
        },
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        fields: ['id', 'ruta', 'horaLlegada', 'horaArribo', 'regMunicipal']

    });
storeVideos = Ext.create('Ext.data.JsonStore', {
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/getvideos.php',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    fields: ['id', 'orden', 'video']
});
storeInformacion = Ext.create('Ext.data.JsonStore', {
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'php/getInformacion.php',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    fields: ['id', 'orden', 'mensaje']
});

$.ajax({
    type: 'GET',
    url: 'http://190.12.61.30:5801/K-Bus/webresources/com.kradac.kbus.rest.entities.historic.informacionparadas/parada=6',
    dataType: 'text',
    success: recuperar,
    error: function () {
        Ext.example.msg("Alerta", 'No se ha conectado con el servidor');

    }
});

function recuperar(ajaxResponse, textStatus)
{
    datos = Ext.JSON.decode(ajaxResponse);
    cargar();
}
;
function cargar() {
var data = [];
    for (var i = 0; i < datos.data.length; i++) {
//        console.log(datos.data[i].regMunicipal);
        data.push({
            id: datos.data[i].id, ruta: datos.data[i].ruta, horaLlegada: datos.data[i].horaLlegada, horaArribo: datos.data[i].horaArribo, regMunicipal: datos.data[i].regMunicipal
        });
    }
//    console.log(data);
    storeBuses.setData(data);
}