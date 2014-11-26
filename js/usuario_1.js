/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var panelSouth;
var storeBuses;
var msgForNormal;
var mensajes;
var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.Loader.setConfig({
    enabled: true
});
var labelMensajes = Ext.create('Ext.form.Label', {
    text: '',
    margin: '0 0 0 0',
    height: '100',
    style: {
        color: 'black'
    }
});
Ext.Loader.setPath('Ext.ux', 'extjs-docs-5.0.0/extjs-build/build/examples/ux');
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.Action',
    'Ext.tab.*',
    'Ext.button.*',
    'Ext.form.*',
    'Ext.layout.container.Card',
    'Ext.layout.container.Border',
    'Ext.ux.PreviewPlugin',
    'Ext.state.*',
    'Ext.form.*',
    'Ext.ux.form.MultiSelect',
    'Ext.ux.form.ItemSelector',
    'Ext.ux.ajax.JsonSimlet',
    'Ext.ux.ajax.SimManager',
    'Ext.ux.grid.FiltersFeature',
    'Ext.selection.CellModel',
    'Ext.ux.CheckColumn',
    'Ext.ux.Spotlight'
]);
var spot = Ext.create('Ext.ux.Spotlight', {
    easing: 'easeOut',
    duration: 500
});
Ext.onReady(function () {
    
    //Panel para Web
    var panelMenu = Ext.create('Ext.form.Panel', {
        region: 'north',
        deferreRender: false,
        activeTab: 0,
        items: [{
                layout: 'hbox',
                bodyStyle: {
                    background: '#cecece'
                },
                items: [
                    {
                        padding: '5 5 5 5',
                        xtype: 'label',
                        html: '<img src="img/situ.png" width="100" height="80">'
                    },
                    {
                        padding: '30 10 10 160',
                        height: 40,
                        xtype: 'label',
                        html: '<div id="encabezado"><p><b>SISTEMA INTERMODAL DE TRANSPORTE URBANO</b></p><br>'
                    }
                ]
            },
            {
                layout: 'hbox',
                bodyStyle: {
                    background: '#006dcc'
                },
                items: [
//                    {
//                        xtype: 'label',
//                        html: '<img src="img/logo1.png" width="70" height="50">'
//                    },
                    {
                        padding: '10 10 10 10',
                        height: 40,
                        xtype: 'label',
                        html: '<div id="parada"><b>PARADA:</b> 10 de Agosto</div>'

                    }
                ]
            }
        ]
    }
    );
    var storeBuses = Ext.create('Ext.data.JsonStore', {
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'php/getbuses.php',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        fields: ['id', 'ruta', 'tiempoLllegada', 'tiempoRestante', 'regMunicipal']
    });
    var grid = Ext.create('Ext.grid.Panel', {
        height: '100%',
        margins: '10 10 10 10',
        store: storeBuses,
        style: {
            bborderColor: '#cecece',
            borderStyle: 'solid',
            borderTopWidth: '20px',
            borderRightWidth: '10px',
            borderBottomWidth: '20px',
            borderLeftWidth: '10px'
        },
        columns: [
            {header: "<b>Bus</b>", width: 150, align: 'center', sortable: true, dataIndex: 'regMunicipal'},
            {header: "<b>Ruta</b>", align: 'center', width: 180, sortable: true, dataIndex: 'ruta'},
            {header: "<b>Arribo</b>", width: 160, columns: [{header: "<b>Tiempo llegada</b>", width: 160, sortable: true, align: 'center', dataIndex: 'tiempoLlegada', format: 'H:i:s'},
                    {header: "<b>Tiempo Restante</b>", width: 160, sortable: true, align: 'center', dataIndex: 'tiempoRestante', format: 'H:i:s'}
                ]},
        ],
        width: '50%',
        region: 'west',
        stripeRows: true,
    });



    //para rest


//    Ext.Ajax.request({
//        url: 'http://190.12.61.30:5801/K-Bus/webresources/com.kradac.kbus.rest.entities.historic.informacionparadas/parada=6',
////        params: {
////            image: image,
////            direccion: direccion,
////            referencia: referencia,
////            latitud: latitud,
////            longitud: longitud
////        },
//        method: 'POST',
//        failure: function (form, action) {
//            Ext.MessageBox.show({
//                title: 'Error...',
//                msg: 'No se pudo obtener datos',
//                buttons: Ext.MessageBox.ERROR,
//                icon: Ext.MessageBox.ERROR
//            });
//        },
//        success: function (form, action) {
//
//            storeBuses = Ext.create('Ext.data.JsonStore', {
//                data: action.result.data,
//                proxy: {
//                    type: 'ajax',
//                    reader: 'array'
//                },
//                fields: ['regMunicipal', 'ruta', 'horaLlegada', 'horaArribo']
//            });
//        }
//    });
//
//
//
//
//
//    var grid = Ext.create('Ext.grid.Panel', {
//        height: '100%',
//        margins: '10 10 10 10',
//        store: storeBuses,
//        style: {
//            bborderColor: '#cecece',
//            borderStyle: 'solid',
//            borderTopWidth: '20px',
//            borderRightWidth: '10px',
//            borderBottomWidth: '20px',
//            borderLeftWidth: '10px'
//        },
//        columns: [
//            {header: "<b>Ruta</b>", align: 'center', width: 180, sortable: true, dataIndex: 'ruta'},
//            {header: "<b>Reg_Municipal</b>", width: 150, align: 'center', sortable: true, dataIndex: 'regMunicipal'},
//            {header: "<b>Tiempo llegada</b>", width: 160, sortable: true, align: 'center', dataIndex: 'horaLlegada', format: 'H:i:s'},
//            {header: "<b>Tiempo Restante</b>", width: 160, sortable: true, align: 'center', dataIndex: 'horaArribo', format: 'H:i:s'}
//        ],
//        width: '50%',
//        region: 'west',
//        stripeRows: true,
//    });

    var formVideo = Ext.create('Ext.form.Panel', {
        region: 'center',
        margins: '10 10 10 10',
        style: {
            borderColor: '#cecece',
            background: '#000',
            borderStyle: 'solid',
            borderTopWidth: '5px',
            borderRightWidth: '10px',
            borderBottomWidth: '5px',
            borderLeftWidth: '10px'
        },
//        style: {
//            borderColor: '#003F72',
//            borderStyle: 'solid'
//
//        },
        items: [{
//                xtype: 'video',
//                style: {
//                    borderColor: '#cecece',
//                    borderStyle: 'solid',
//                    borderTopWidth: '5px',
//                    borderRightWidth: '10px',
//                    borderBottomWidth: '5px',
//                    borderLeftWidth: '10px'
//                },
//                margins: '10 10 10 10',
//                height: 330,
//                poster: 'img/logo.png',
//                autobuffer: true,
//                autoplay: true,
//                controls: true,
//                src: [
//                    {src: 'videos/noviembre_15_2014.mp4', type: 'video/mp4', height: 500, autoplay: 'autoplay'},
//                    {src: 'videos/movie.mp4', type: 'video/mp4'}
//                ]
                xtype: 'label',
                height: '50%',
                style: {
                    background: '#000'
                },
                width: '100%',
                html:
//                        '<head>' +
//                        '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" type="text/javascript"></script>' +
//                        '<link type="text/css" rel="stylesheet" href="https://www.blogger.com/static/v1/widgets/3841957138-widget_css_bundle.css" />' +
//                        '<link type="text/css" rel="stylesheet" href="https://www.blogger.com/dyn-css/authorization.css?targetBlogID=3512129179211407069&zx=05b36f69-660c-40c4-a312-46501f8bfe09"/>' +
//                        '<link type="text/css" rel="stylesheet" href="css/video.css"/>' +
//                        '</head><body>'+
                        '<div class="navbar section" id="navbar"></div>' +
                        '<div class="margin">' +
                        '<div id="vplayer">' +
                        '<video onclick="init()" controls="" height="310" id="video" preload="auto" tabindex="0" type="video/mp4" width="1000">' +
                        '<source src="videos/noviembre_15_2014.mp4" type="video/mp4"></source>' +
                        'Hola, tu navegador no está actualizado y no puede mostrar este contenido.' +
                        '</video>' +
                        '</div>' +
                        '<ul id="vplaylist">' +
                        '<li class="active"><a href="videos/noviembre_15_2014.mp4">1</a></li>' +
                        '<li><a href="videos/Sistema_de_Recaudo_Electr_nico_Tecnolog_a_en_Bus.mp4">Municipio</a></li>' +
                        '</ul>' +
                        '</div>'
            }]
    });
    var panelSur = Ext.create('Ext.panel.Panel', {
     region: 'south',
     height: '18%',
        bodyStyle: {
                    background: '#cecece'
                },
                style: {
                    borderColor: '#cecece',
                    borderStyle: 'solid',
                    borderTopWidth: '4px',
                    borderRightWidth: '4px',
                    borderBottomWidth: '4px',
                    borderLeftWidth: '4px'
                },
                margins: '0 0 0 0',
        items: [labelMensajes              
               
        ]
    });
    var panelCentral = Ext.create('Ext.form.Panel', {
        region: 'center',
        layout: 'border',
        items: [
            formVideo, grid
        ]
    });
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        style: {
            background: '#cecece'
        },
        items: [
            panelMenu, panelCentral, panelSur]
    });
});

var store = Ext.create('Ext.data.JsonStore', {
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
    ponerMensajes();

function ponerMensajes() {
    store.reload();
    mensajes = "EL ÚNICO MEDIO DE PAGO ES LA TARJETA INTELIGENTE PREPAGO | ILUSTRE MUNICIPIO DE LOJA BUSCA MEJORAR LOS SERVIVIOS PARA LA CIUDADANÍA ";
    labelMensajes.setHtml('<marquee  style="bottom: 3px; top: 3px; " width="100%" height="90%" loop="-1" scrollamount="2"  ><font color="#083772" size="150"> </br><p width="100" height="100">' + mensajes + '</p> </font></marquee>');
}
