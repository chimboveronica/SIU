/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var panelSouth;
var msgForNormal;
var mensaje;
var formMensaje;
var id;
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

var labelMensaje = Ext.create('Ext.form.Label', {
    text: '',
    margin: '5 5 5 5',
    height: '100',
    style: {
        color: 'black'
    }
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



    var grid = Ext.create('Ext.grid.Panel', {
        height: '50%',
        margins: '5 5 5 5',
        bodyStyle: 'padding: 10px; background-color: #DFE8F6',
        store: storeVideos,
//        style: {
//            bborderColor: '#cecece',
//            borderStyle: 'solid',
//            borderTopWidth: '10px',
//            borderRightWidth: '10px',
//            borderBottomWidth: '10px',
//            borderLeftWidth: '10px'
//        },
        columns: [
            {header: "<b>Orden</b>", align: 'center', width: 90, sortable: true, dataIndex: 'orden'},
            {header: "<b>Video</b>", width: 250, align: 'center', sortable: true, dataIndex: 'video', filter: {type: 'string'}},
        ],
        stripeRows: true,
        width: '30%',
        region: 'west',
        title: 'Registro de Videos',
    });
    var formVideo = Ext.create('Ext.form.Panel', {
        region: 'center',
        width: '30%',
        title: 'Administración de Videos',
        bodyStyle: 'padding: 10px; background-color: #DFE8F6',
        style: {
            borderColor: '#cecece',
            borderStyle: 'solid',
            borderTopWidth: '5px',
            borderRightWidth: '10px',
            borderBottomWidth: '5px',
            borderLeftWidth: '10px'
        },
        items: [
            {
                fieldLabel: 'Img',
                xtype: 'textfield',
                name: 'imagePerson',
                id: 'imagePerson',
                hidden: true
            },
            {
                xtype: 'form',
                layout: 'anchor',
                margin: '10 10 10 10',
                items: [
                    {
                        xtype: 'filefield',
                        name: 'imageFile',
                        emptyText: "Máximo 2Minutos",
                        labelSeparator: '',
                        fieldLabel: '<div id="camposForm">Video:</div>',
                        width: 250,
                        buttonConfig: {
                            iconCls: 'icon-upload',
                            text: '',
                            tooltip: '<div id="tooltip">Escoger video</div>'
                        },
                        listeners: {
                            change: function (thisObj, value, eOpts) {
                                var form = this.up('form').getForm();
                                form.submit({
                                    url: 'php/upload/uploadVideo.php',
                                    success: function (form, action) {
                                        formVideo.down('[name=labelImage]').setSrc('img/usuario/' + action.result['img']);
                                        formVideo.down('[name=imagePerson]').setValue('img/usuario/' + action.result['img']);
//                                        console.log(action.result['img']);
//                                        thisObj.setValue(action.result['img']);
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert('Error', 'No se pudo subir la imagen');
                                    }
                                });
                            }
                        }
                    }

                ]
            }],
        dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: ['->',
                    {style: {
                            background: '#006dcc'
                        }, iconCls: 'icon-updat', itemId: 'update', text: '<div id="botonesMenuForm">Actualizar</div>', scope: this, tooltip: '<div id="tooltip">Actualizar Datos</div>'},
                    {style: {
                            background: '#006dcc'
                        }, iconCls: 'icon-add', itemId: 'create', text: '<div id="botonesMenuForm">Crear</div>', scope: this, tooltip: '<div id="tooltip">Crear Persona</div>', },
                    {style: {
                            background: '#006dcc'
                        }, iconCls: 'icon-reset', itemId: 'delete', scope: this, tooltip: '<div id="tooltip">Eliminar Persona</div>', },
                    {style: {
                            background: '#006dcc'
                        }, iconCls: 'limpiar', tooltip: '<div id="tooltip">Limpiar Campos</div>', scope: this, },
                    {style: {
                            background: '#006dcc'
                        }}
                ]
            }

        ]
    });
    formMensaje = Ext.create('Ext.form.Panel', {
        region: 'east',
        title: 'Administración de Mensaje',
        width: '40%',
        style: {
            borderColor: '#cecece',
            borderStyle: 'solid',
            borderTopWidth: '5px',
            borderRightWidth: '10px',
            borderBottomWidth: '5px',
            borderLeftWidth: '10px'
        },
        bodyStyle: 'padding: 10px; background-color: #DFE8F6',
//        margins: '0 0 0 3',
        defaultType: 'textfield',
        layout: 'anchor',
        fieldDefaults: {
            msgTarget: 'side'
        },
        defaults: {
            anchor: '90%'
        },
        items: [
            {
                xtype: 'textarea',
                fieldLabel: 'Mensaje',
                name: 'mensaje',
                labelWidth: 95,
                height: 200,
                emptyText: 'Ingresar Mensaje...'
            }, labelMensaje
        ],
        dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: ['->', {
                        style: {
                            background: '#006dcc'
                        },
                        iconCls: 'icon-update',
                        itemId: 'update',
                        text: 'Actualizar',
                        tooltip: 'Actualizar',
                        handler: function () {
                            var valor = formMensaje.down('[name=mensaje]').getValue();
                            Ext.Ajax.request({
                                url: 'php/informacion/update.php',
                                params: {
                                    mensaje: valor
                                },
                                method: 'POST',
                                failure: function (form, action) {
                                    Ext.MessageBox.show({
                                        title: 'Error...',
                                        msg: 'No se pudo guardar',
                                        buttons: Ext.MessageBox.ERROR,
                                        icon: Ext.MessageBox.ERROR
                                    });
                                },
                                success: function (form, action) {
                                    storeInformacion.reload();
                                    formMensaje.down('[name=mensaje]').setValue('');
                                    labelMensaje.setHtml('Mensaje Actual:</br></br>' + '<marquee  style="bottom: 20px; " width="100%" height="50" loop="-1" scrollamount="2"  ><font color="#083772" size="90"> <p width="100" height="50">' + valor + '</p> </font></marquee>');
                                    Ext.example.msg("Mensaje", 'Datos insertados correctamente');
                                }
                            });
                        }
                    }]
            }]
    });
    ponerMensaje();

    var panelCentral = Ext.create('Ext.form.Panel', {
        region: 'center',
        layout: 'border',
        items: [
            formVideo, grid, formMensaje
        ]
    });
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        style: {
            background: '#cecece'
        },
        items: [
            panelMenu, panelCentral]
    });
});

function ponerMensaje() {
    storeInformacion.reload();
    id = storeInformacion.data.items[0].data.id;
    mensaje = storeInformacion.data.items[0].data.mensaje;
    labelMensaje.setHtml('Mensaje Actual:</br></br>' + '<marquee  style="bottom: 5px; " width="100%" height="100%" loop="-1" scrollamount="2"  ><font color="#083772" size="50"></br> <p width="100" height="150">' + mensaje + '</p> </font></marquee>');



}