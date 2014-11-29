var storeInformacion ;
var storeVideos;
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