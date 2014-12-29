/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var panelSouth;
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
]);
var storeMensajes;
var spot = Ext.create('Ext.ux.Spotlight', {
    easing: 'easeOut',
    duration: 500
});
Ext.onReady(function () {
    var panelMenu = Ext.create('Ext.form.Panel', {
        region: 'north',
        height: '10%',
        deferreRender: false,
        activeTab: 0,
        items: [
            {
                layout: 'hbox',
                bodyStyle: {
                    backgroundImage: 'url("img/img_principal - copia.png")'
                },
                items: [
                    {
                        padding: '2 2 2 2',
                        xtype: 'label',
                        html: '<img src="img/ic_situ - copia.png" width="60" height="60">'
                    },
                    {
                        padding: '15 2 2 320',
                        height: 15,
                        xtype: 'label',
                        html: '<div id="encabezado">Sistema intermodal de <b>TRANSPORTE URBANO</b>'
                    }
                ]
            },
        ]
    }
    );


    var grid = Ext.create('Ext.grid.Panel', {
        height: '100%',
        title: 'PARADA:</b>10 de Agosto',
        margins: '10 10 10 10',
        store: storeBuses,
        columns: [
            {header: "<b>Bus</b>", width: 100, align: 'center', sortable: true, dataIndex: 'regMunicipal'},
            {header: "<b>Ruta</b>", align: 'center', width: 280, sortable: true, dataIndex: 'ruta'},
            {header: "<b>Tiempo</b>", width: 300, columns: [
                    {header: "<b>Llegada</b>", width: 100, sortable: true, align: 'center', dataIndex: 'horaLlegada', format: 'H:i:s'},
                    {header: "<b>Arribo</b>", width: 100, sortable: true, align: 'center', dataIndex: 'horaArribo', format: 'H:i:s'}
                ]}
        ],
        width: '50%',
        region: 'west',
        stripeRows: true
    });


    var formVideo = Ext.create('Ext.form.Panel', {
        region: 'center',
        margins: '10 10 10 10',
        items: [{
                xtype: 'label',
                height: '100%',
                bodyStyle: {
                    backgroundImage: 'url("img/img_principal - copia.png")'
                },
                width: '100%',
                html:
                        '<div class="navbar section" id="navbar"></div>' +
                        '<div class="margin">' +
                        '<div id="vplayer">' +
                        '<video onclick="init()" controls="" height="410" id="video" preload="auto" tabindex="0" type="video/mp4" width="1200">' +
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
            backgroundImage: 'url("img/img_principal - copia.png")'
        },
        style: {
            borderColor: '#cecece',
            borderStyle: 'solid',
            borderTopWidth: '0px',
            borderRightWidth: '0px',
            borderBottomWidth: '0px',
            borderLeftWidth: '0px'
        },
        items: [labelMensajes]
    });
    var panelCentral = Ext.create('Ext.form.Panel', {
        region: 'center',
        layout: 'border',
        height: '80%',
        bodyStyle: {
            backgroundImage: 'url("img/img_principal - copia.png")',
            opacity: '4'
        },
        items: [
            formVideo, grid
        ]
    });
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        bodyStyle: {
            backgroundImage: 'url("img/img_principal - copia.png")'
        },
        items: [
            panelMenu, panelCentral, panelSur]
    });

    ponerMensajes();

});

function ponerMensajes() {
    mensajes = "EL ÚNICO MEDIO DE PAGO ES LA TARJETA INTELIGENTE PREPAGO | ILUSTRE MUNICIPIO DE LOJA BUSCA MEJORAR LOS SERVIVIOS PARA LA CIUDADANÍA ";
    labelMensajes.setHtml('<marquee  style="bottom: 3px; top: 3px; left: 3px; " width="100%" height="90%" loop="-1" scrollamount="2"  ><font color="#083772" size="150"> </br><p width="100" height="100">' + mensajes + '</p> </font></marquee>');
}

