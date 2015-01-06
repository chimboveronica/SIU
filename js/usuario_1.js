/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var panelSouth;
var msgForNormal;
var mensajes='';
  var formVideo ;
var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.Loader.setConfig({
    enabled: true
});
var labelMensajes = Ext.create('Ext.form.Label', {
    text: '',
    margin: '5 5 5 5',
    height: '100%',
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
                        html: '<img src="img/ic_situ - copia.png" width="60" height="100%">'
                    },
                    {
                        padding: '15 2 2 320',
                        height: 15,
                        xtype: 'label',
                        html: '<div id="encabezado"><b>Sistema intermodal de <b>Transporte Urbano</b>'
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


    formVideo = Ext.create('Ext.form.Panel', {
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
                        '<video onclick="init()" controls="" height="410" id="video" preload="auto" tabindex="0"  loop="loop" type="video/mp4" width="1200">' +
                        '<source src="videos/noviembre_15_2014.mp4" type="video/mp4"></source>' +
                        'Hola, tu navegador no está actualizado y no puede mostrar este contenido.' +
                        '</video>' +
                        '</div>' +
                        '<ul id="vplaylist">' +
                        '<li class="active"><a href="videos/noviembre_15_2014.mp4"  >1</a></li>' +
                        '<li><a href="videos/Sistema_de_Recaudo_Electr_nico_Tecnolog_a_en_Bus.mp4">Municipio</a></li>' +
                        '</ul>' +
                        '</div>'
            }]
    });
    var panelSur = Ext.create('Ext.panel.Panel', {
        region: 'south',
        bodyStyle: {
            backgroundImage: 'url("img/img_principal - copia.png")',
            opacity: '4'
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
            formVideo, grid,
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
    
    setTimeout(function () {
        var datos;
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
            console.log(datos);
           
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
    }, 1 * 1000);

});

function ponerMensajes() {
    formVideo.getForm().submit({
        url: 'php/getInformacion.php',
        method: 'POST',
        failure: function (form, action) {
            Ext.MessageBox.show({
                title: 'Error...',
                msg: 'No se pudo obtener',
                buttons: Ext.MessageBox.ERROR,
                icon: Ext.MessageBox.ERROR
            });
        },
        success: function (form, action) {
            for(var i=0; i<action.result.data.length; i++){
            mensajes=mensajes+String(action.result.data[i].mensaje)+' ';
            }
           labelMensajes.setHtml('<marquee  style="bottom: 50px; top: 30px; left: 3px; " width="100%" height="90%" loop="-1" scrollamount="2"  ><p width="100" height="100"><font color="#083772" size="250"> </br>' + mensajes + '</font></p> </marquee></br></br></br>');
        }
    });
}


