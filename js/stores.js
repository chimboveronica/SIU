var storeInformacion;
var storeVideos;
var storeBuses;
var datos;
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
    fields: ['id', 'mensaje']
});

$.ajax({
    type: 'GET',
    url: 'http://190.12.61.30:5801/K-Bus/webresources/com.kradac.kbus.rest.entities.historic.informacionparadas/parada=6',
    dataType: 'text',
    success: recuperar,
    error: function () {
        Ext.example.msg("Alerta", 'Problemas con el servidor');

    }
});

function recuperar(ajaxResponse, textStatus)
{
    datos = Ext.JSON.decode(ajaxResponse);
    cargar();
}
;
function cargar() {

    storeBuses = Ext.create('Ext.data.Store', {
        data: datos,
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
    console.log(datos);
    console.log(storeBuses);
}