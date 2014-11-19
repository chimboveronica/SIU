/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var panelSouth;
var msgForNormal;
var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.Loader.setConfig({
    enabled: true
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
    Ext.tip.QuickTipManager.init();
    arregloAviso();
    //Panel para Web
    var panelMenu = Ext.create('Ext.form.Panel', {
        region: 'north',
        deferreRender: false,
        activeTab: 0,
        items: [{
                layout: 'hbox',
                bodyStyle: {
                    background: 'black'
                },
                items: [
                    {
                        padding: '10 10 10 10',
                        height: 60,
                        xtype: 'label',
                        html: '<div id="encabezado"><p>SISTEMA DE INFORMACIÓN DEL USUARIO</p><br>'
                    }
                ]
            },
            {
                layout: 'hbox',
                bodyStyle: {
                    background: '#006dcc'
                },
                items: [
                    {
                        padding: '10 2 10 20',
                        xtype: 'label',
                        html: '<div id="encabezado"><p><b>PARADA:</b> Sauces Norte - Argelia</p>'

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
            {header: "<b>Ruta</b>", align: 'center', width: 180, sortable: true, dataIndex: 'ruta', filter: {type: 'string'}},
            {header: "<b>Reg_Municipal</b>", width: 150, align: 'center', sortable: true, dataIndex: 'regMunicipal', filter: {type: 'string'}},
            {header: "<b>Tiempo llegada</b>", width: 160, sortable: true, align: 'center', dataIndex: 'tiempoLlegada', format: 'H:i:s', },
            {header: "<b>Tiempo Restante</b>", width: 160, sortable: true, align: 'center', dataIndex: 'tiempoRestante', format: 'H:i:s'},
        ],
        stripeRows: true,
        width: '50%',
        region: 'west',
//        title: 'Registros de Buses',
    });
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
                        '<video onclick="init()" controls="" height="350" id="video" preload="auto" tabindex="0" type="video/mp4" width="1000">' +
                        '<source src="videos/noviembre_15_2014.mp4" type="video/mp4"></source>' +
                        'Hola, tu navegador no está actualizado y no puede mostrar este contenido.' +
                        '</video>' +
                        '</div>' +
                        '<ul id="vplaylist">' +
                        '<li class="active"><a href="videos/noviembre_15_2014.mp4">1</a></li>' +
//                        '<li><a href="http://ciudadblogger.hostzi.com/Make_a_Friend.mp4">Sweep</a></li>' +
//                        '<li><a href="http://ciudadblogger.hostzi.com/I_love_You.mp4">I Love You</a></li>' +
//                        '<li><a href="http://ciudadblogger.hostzi.com/I_love_You.mp4">I Love You</a></li>' +
//                        '<li><a href="http://ciudadblogger.hostzi.com/I_love_You.mp4">I Love You</a></li>' +
//                        '<li><a href="http://ciudadblogger.hostzi.com/I_love_You.mp4">I Love You</a></li>' +
//                        '<li><a href="http://ciudadblogger.hostzi.com/I_love_You.mp4">I Love You</a></li>' +
                        '<li><a href="videos/movie.mp4">Municipio</a></li>' +
                        '</ul>' +
                        '</div>'
            }]
    });
    var panelSur = Ext.create('Ext.panel.Panel', {
        region: 'south',
        height: '20%',
        bodyStyle: {
            background: 'white'
        },
        style: {
            borderColor: '#cecece',
            borderStyle: 'solid',
            borderTopWidth: '10px',
            borderRightWidth: '10px',
            borderBottomWidth: '10px',
            borderLeftWidth: '10px'
        },
        margins: '10 10 10 10',
        html:
                '<div class="carrusel">' +
                '<ul class="bloque-imagenes">' +
                msgForNormal +
                '</ul>' +
                '</div>'
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
function arregloAviso() {
    var dato = ['</t>Chiva novembrina visita hoy barrios Geranios, Sol de los Andes,Capulí Loma y Lote Bonito desde las 18H30', '</t> Les invitamos a participar del pregón de festividades por los 194 años de independencia y 466 años de fundación de Loja, este viernes 14 de noviembre.', 'En el parque Simón Bolívar, se desarrolla la presentación de titeres, que esta dirigida a los niños y niñas de las diferentes escuelas de la ciudad'];
    msgForNormal = '';
    for (var i = 0; i < dato.length; i++) {
        msgForNormal = msgForNormal + '<li>' + dato[i] + '</li>';
    }

}
function arregloVideos() {
    var dato = ['</t>Chiva novembrina visita hoy barrios Geranios, Sol de los Andes,Capulí Loma y Lote Bonito desde las 18H30', '</t> Les invitamos a participar del pregón de festividades por los 194 años de independencia y 466 años de fundación de Loja, este viernes 14 de noviembre.', 'En el parque Simón Bolívar, se desarrolla la presentación de titeres, que esta dirigida a los niños y niñas de las diferentes escuelas de la ciudad'];
    msgForNormal = '';
    for (var i = 0; i < dato.length; i++) {
        msgForNormal = msgForNormal + '<li>' + dato[i] + '</li>';
    }

}
