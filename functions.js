/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cargaDatos() {
    storeInformacion.reload();
    var data = [];
    for (var i = 0; i < storeInformacion.data.length; i++) {
        data.push({
            id: storeInformacion.data.items[0].data.id,
            orden: storeInformacion.data.items[0].data.orden,
            text: storeInformacion.data.items[0].data.mensaje
        });
    }
    return data;
}