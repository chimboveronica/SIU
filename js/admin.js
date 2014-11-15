/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var panelSouth;

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
//                style: {
//                    borderStyle: 'solid',
//                    borderBottomColor: '#FFBF00'
//                },
                items: [
                    {
                        padding: '10 2 2 60',
                        xtype: 'label',
                        html: '<img src="img/logo.png" width="250" height="80"><div id="encabezado"><p>SISTEMA DE INFORMACIÓN DEL USUARIO</p>'
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
        store: storeBuses,
        style: {
            borderColor: '#003F72',
            borderStyle: 'solid'

        },
        columns: [
            Ext.create('Ext.grid.RowNumberer', {text: 'Nº', width: 30, align: 'center'}),
            {header: "<b>Registro Municipal</b>", width: 150, align: 'center', sortable: true, dataIndex: 'regMunicipal', filter: {type: 'string'}},
            {header: "<b>Ruta</b>", align: 'center', width: 180, sortable: true, dataIndex: 'ruta', filter: {type: 'string'}},
            {header: "<b>Tiempo llegada</b>", width: 130, sortable: true, align: 'center', dataIndex: 'tiempoLlegada', format: 'H:i:s', },
            {header: "<b>Tiempo Restante</b>", width: 150, sortable: true, align: 'center', dataIndex: 'tiempoRestante', format: 'H:i:s'},
        ],
        stripeRows: true,
        width: '50%',
        margins: '0 2 0 0',
        region: 'west',
        title: 'Registros de Buses',
    });
    var formVideo = Ext.create('Ext.form.Panel', {
        height: '100%',
        padding: '10 10 10 10',
        items: [{
                xtype: 'video',
                src: [
                    // browser will pick the format it likes most:
                    {src: 'videos/noviembre_15_2014.mp4', type: 'video/mp4'},
//                    { src: 'videos/noviembre_15_2014.mp4', type: 'video/mp4' },
//                     { src: 'videos/noviembre_15_2014.mp4', type: 'video/ogg' },
//                     { src: 'videos/noviembre_15_2014.mp4', type: 'video/quicktime' }
                ],
                //poster: 'http://b.vimeocdn.com/ts/148/397/148397103_640.jpg',
//                poster: 'img/k-taxy.png',
                autobuffer: true,
                autoplay: true,
                controls: true
            }]
    });
    var panelCentro = Ext.create('Ext.panel.Panel', {
        region: 'center',
        height: '100%',
        padding: '10 10 10 10',
        style: {
            borderColor: '#003F72',
            borderStyle: 'solid'

        }, items: [formVideo]
    });
    var panelSur = Ext.create('Ext.panel.Panel', {
        region: 'south',
        height: '20%',
        style: {
            borderColor: '#003F72',
            borderStyle: 'solid'

        }, html:
                '<section class="rw-wrapper">' +
                '<h2 class="rw-sentence">' +
                '<br/>' +
                '<div class="rw-words rw-words-2">' +
                '<span>ADMINISTRACION DE SIU</span>' + '</div>' +
                '</h2>' +
                '</section>'
    });
    var panelCentral = Ext.create('Ext.form.Panel', {
        region: 'center',
        layout: 'border',
        items: [
            panelCentro, grid
        ]
    });

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        style: {
            background: '#FFBF00'
        },
        items: [
            panelMenu, panelCentral, panelSur]
    });
});
