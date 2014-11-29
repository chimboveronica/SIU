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
]);
var storeMensajes;
var spot = Ext.create('Ext.ux.Spotlight', {
    easing: 'easeOut',
    duration: 500
});
Ext.onReady(function () {

    var panelMenu = Ext.create('Ext.form.Panel', {
        region: 'north',
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
                        html: '<img src="img/ic_situ - copia.png" width="80" height="90">'
                    },
                    {
                        padding: '15 10 10 15',
                        height: 40,
                        xtype: 'label',
                        html: '<div id="encabezado">Sistema intermodal de<br><br> <b>TRANSPORTE URBANO</b><br>'
                    }
                ]
            },
            {
                layout: 'hbox',
                bodyStyle: {
                    backgroundImage: 'url("img/img_principal - copia.png")',
                    background: '#006dcc'
                },
                items: [
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
//        mensajes = storeInformacion.data.items[0].data.mensaje;
    var grid = Ext.create('Ext.grid.Panel', {
        height: '100%',
        margins: '10 10 10 10',
        store: storeBuses,
        style: {
            borderColor: '#E0ECFF',
//            opacity: '0.5',
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
                ]}
        ],
        width: '50%',
        region: 'west',
        stripeRows: true
    });


    var formVideo = Ext.create('Ext.form.Panel', {
        region: 'center',
        margins: '10 10 10 10',
        style: {
            borderColor: '#E0ECFF',
            background: '#000',
            borderStyle: 'solid',
            borderTopWidth: '5px',
            borderRightWidth: '10px',
            borderBottomWidth: '5px',
            borderLeftWidth: '10px'
        },
        items: [{
                xtype: 'label',
                height: '50%',
                bodyStyle: {
                    backgroundImage: 'url("img/img_principal - copia.png")'
                },
                width: '100%',
                html:
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
//        margins: '0 0 0 0',
        items: [labelMensajes]
    });
    var panelCentral = Ext.create('Ext.form.Panel', {
        region: 'center',
        layout: 'border',
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
    labelMensajes.setHtml('<marquee  style="bottom: 3px; top: 3px; " width="100%" height="90%" loop="-1" scrollamount="2"  ><font color="#083772" size="150"> </br><p width="100" height="100">' + mensajes + '</p> </font></marquee>');
}

