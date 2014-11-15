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
                }, style: {
                    borderStyle: 'solid',
                    borderBottomColor: '#FFBF00'
                },
                items: [
                    {
                        padding: '10 2 2 60',
                        xtype: 'label',
                        html: '<div id="encabezado"><p>SISTEMA DE INFORMACIÓN DEL USUARIO</p>'
                    }
                ]
            }
        ]
    }
    );


    var grid = Ext.create('Ext.grid.Panel', {
//        store: gridStore,
//        columns: [
//            Ext.create('Ext.grid.RowNumberer', {text: 'Nº', width: 30, align: 'center'}),
//            {header: "<b>Acrónimo</b>", width: 100, align: 'center', sortable: true, dataIndex: 'acronimo', filter: {type: 'string'}},
//            {header: "<b>Organización</b>", align: 'center', width: 180, sortable: true, dataIndex: 'empresa', renderer: formatCompany, filter: {type: 'string'}},
//            {header: "<b>Dirección</b>", width: 130, sortable: true, align: 'center', dataIndex: 'direccion', filter: {type: 'string'}},
//            {header: "<b>Celular</b>", width: 350, sortable: true, align: 'center', dataIndex: 'telefono', filter: {type: 'string'}},
//            {header: "<b>Correo</b>", width: 200, sortable: true, dataIndex: 'correo', align: 'center', filter: {type: 'string'}},
//        ],
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
                    {src: 'videos/movie.mp4', type: 'video/mp4'}
                    /*{ src: 'http://dev.sencha.com/desktopvideo.mp4', type: 'video/mp4' },
                     { src: 'http://dev.sencha.com/desktopvideo.ogv', type: 'video/ogg' },
                     { src: 'http://dev.sencha.com/desktopvideo.mov', type: 'video/quicktime' }*/
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

        }, html: '<div id="wrapper">' +
                '<div id="myScroll">' +
                '<div class="scrollAviso" >2) ¿Cómo se dice guerra en turco? Balaban balabienen.</div>' +
                '<div class="scrollAviso" >3) ¿Como se dice "creo que estoy embarazada" en africano? Bombo supongo</div>' +
                '<div class="scrollAviso" >4) ¿Cómo se dice doctor en japonés? Utikuru utimato.</div>' +
                ' <div class="scrollAviso" >5) ¿Cómo se dice en árabe "chica súbete a mi moto"? Maja sube la almeja a la Yamaha.</div>' +
                '<div class="scrollAviso" >6) ¿Cómo se dice bochito en chino? Cachinoquepo.</div>'
                + '</div>' +
                '</div>'
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

$(function () {
    $("#myScroll").mbScrollable({
        width: 1400,
        elementsInPage: 1,
        elementMargin: 2,
        shadow: "#999 2px 2px 2px",
        height: "auto",
        controls: "#controls",
        slideTimer: 22000,
        autoscroll: true,
        scrollTimer: 0,
        changePageCallback: function () {
            var positiondisplay = $('#myScroll').get(0).idx + '/' + $('#myScroll').get(0).totalPages;
            $('#controls .positiondisplay').html(positiondisplay);
        },
        loadCallback: function () {
            var positiondisplay = $('#myScroll').get(0).idx + '/' + $('#myScroll').get(0).totalPages;
            $('#controls .positiondisplay').html(positiondisplay);
        }
    });

    $("#myScroll1").mbScrollable({
        dir: "vertical",
        width: 140,
        height: 400,
        elementsInPage: 3,
        elementMargin: 6,
        shadow: "#999 2px 2px 2px",
        controls: "#controls1",
        slideTimer: 600,
        autoscroll: false,
        scrollTimer: 6000
    });
    setTimeout(function () {
        $("#wrapper").fadeIn();
    }, 2000);
});
