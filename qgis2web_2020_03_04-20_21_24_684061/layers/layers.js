var wms_layers = [];

var format_ParadLIma_0 = new ol.format.GeoJSON();
var features_ParadLIma_0 = format_ParadLIma_0.readFeatures(json_ParadLIma_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParadLIma_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParadLIma_0.addFeatures(features_ParadLIma_0);
var lyr_ParadLIma_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParadLIma_0, 
                style: style_ParadLIma_0,
                interactive: true,
                title: '<img src="styles/legend/ParadLIma_0.png" /> ParadLIma'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DistritoLima_2 = new ol.format.GeoJSON();
var features_DistritoLima_2 = format_DistritoLima_2.readFeatures(json_DistritoLima_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritoLima_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritoLima_2.addFeatures(features_DistritoLima_2);
var lyr_DistritoLima_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistritoLima_2, 
                style: style_DistritoLima_2,
                interactive: true,
                title: '<img src="styles/legend/DistritoLima_2.png" /> DistritoLima'
            });
var format_RedLima_3 = new ol.format.GeoJSON();
var features_RedLima_3 = format_RedLima_3.readFeatures(json_RedLima_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedLima_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedLima_3.addFeatures(features_RedLima_3);
var lyr_RedLima_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedLima_3, 
                style: style_RedLima_3,
                interactive: true,
                title: '<img src="styles/legend/RedLima_3.png" /> RedLima'
            });
var format_ParadLImaGeo_4 = new ol.format.GeoJSON();
var features_ParadLImaGeo_4 = format_ParadLImaGeo_4.readFeatures(json_ParadLImaGeo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParadLImaGeo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParadLImaGeo_4.addFeatures(features_ParadLImaGeo_4);
var lyr_ParadLImaGeo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParadLImaGeo_4, 
                style: style_ParadLImaGeo_4,
                interactive: true,
                title: '<img src="styles/legend/ParadLImaGeo_4.png" /> ParadLImaGeo'
            });
var format_ManLIma_5 = new ol.format.GeoJSON();
var features_ManLIma_5 = format_ManLIma_5.readFeatures(json_ManLIma_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManLIma_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManLIma_5.addFeatures(features_ManLIma_5);
var lyr_ManLIma_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ManLIma_5, 
                style: style_ManLIma_5,
                interactive: true,
                title: '<img src="styles/legend/ManLIma_5.png" /> ManLIma'
            });

lyr_ParadLIma_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_DistritoLima_2.setVisible(true);lyr_RedLima_3.setVisible(true);lyr_ParadLImaGeo_4.setVisible(true);lyr_ManLIma_5.setVisible(true);
var layersList = [lyr_ParadLIma_0,lyr_OpenStreetMap_1,lyr_DistritoLima_2,lyr_RedLima_3,lyr_ParadLImaGeo_4,lyr_ManLIma_5];
lyr_ParadLIma_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_DistritoLima_2.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'DATA': 'DATA', 'COD_DPTO': 'COD_DPTO', 'COD_PROV': 'COD_PROV', 'COD_DIST': 'COD_DIST', 'UBIGEO': 'UBIGEO', 'NOMBRE': 'NOMBRE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'POBLACION': 'POBLACION', 'CONOS': 'CONOS', 'ZONA': 'ZONA', });
lyr_RedLima_3.set('fieldAliases', {'ID': 'ID', 'LENGTH': 'LENGTH', 'DIR': 'DIR', 'TIPO': 'TIPO', 'CODIGO': 'CODIGO', 'NOMBRE_VIA': 'NOMBRE_VIA', 'NOMBRE_ALT': 'NOMBRE_ALT', 'LINK_MODE': 'LINK_MODE', 'WALKT': 'WALKT', 'SPEEDBUS': 'SPEEDBUS', 'IVTT': 'IVTT', 'SPEEDWALK': 'SPEEDWALK', 'DD': 'DD', 'PP': 'PP', 'DI': 'DI', 'UBIGEO': 'UBIGEO', 'AB_TP': 'AB_TP', 'BA_TP': 'BA_TP', 'AB_AUTO': 'AB_AUTO', 'BA_AUTO': 'BA_AUTO', 'AB_CARGA': 'AB_CARGA', 'BA_CARGA': 'BA_CARGA', 'AB_PEATON': 'AB_PEATON', 'BA_PEATON': 'BA_PEATON', 'ORDENA341': 'ORDENA341', 'LONGITUD': 'LONGITUD', 'CONECTOR': 'CONECTOR', 'UNIDADESBU': 'UNIDADESBU', 'UNIDADESB1': 'UNIDADESB1', 'COMBIREVHP': 'COMBIREVHP', 'COMBIREVH1': 'COMBIREVH1', 'ZONA': 'ZONA', 'NUEVO': 'NUEVO', 'OBS': 'OBS', 'CALCULO': 'CALCULO', 'BORRAME': 'BORRAME', 'CLEAR': 'CLEAR', 'ABRUTAS': 'ABRUTAS', 'BARUTAS': 'BARUTAS', });
lyr_ParadLImaGeo_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_ManLIma_5.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'DATA': 'DATA', 'IDMANZANA': 'IDMANZANA', 'CODDPTO': 'CODDPTO', 'CODPROV': 'CODPROV', 'CODDIST': 'CODDIST', 'CODZONA': 'CODZONA', 'CODMZNA': 'CODMZNA', 'CLASIFICAC': 'CLASIFICAC', 'UBIGEO': 'UBIGEO', });
lyr_ParadLIma_0.set('fieldImages', {'OBJECTID': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_DistritoLima_2.set('fieldImages', {'ID': '', 'AREA': '', 'DATA': '', 'COD_DPTO': '', 'COD_PROV': '', 'COD_DIST': '', 'UBIGEO': '', 'NOMBRE': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', 'POBLACION': '', 'CONOS': '', 'ZONA': '', });
lyr_RedLima_3.set('fieldImages', {'ID': '', 'LENGTH': '', 'DIR': '', 'TIPO': '', 'CODIGO': '', 'NOMBRE_VIA': '', 'NOMBRE_ALT': '', 'LINK_MODE': '', 'WALKT': '', 'SPEEDBUS': '', 'IVTT': '', 'SPEEDWALK': '', 'DD': '', 'PP': '', 'DI': '', 'UBIGEO': '', 'AB_TP': '', 'BA_TP': '', 'AB_AUTO': '', 'BA_AUTO': '', 'AB_CARGA': '', 'BA_CARGA': '', 'AB_PEATON': '', 'BA_PEATON': '', 'ORDENA341': '', 'LONGITUD': '', 'CONECTOR': '', 'UNIDADESBU': '', 'UNIDADESB1': '', 'COMBIREVHP': '', 'COMBIREVH1': '', 'ZONA': '', 'NUEVO': '', 'OBS': '', 'CALCULO': '', 'BORRAME': '', 'CLEAR': '', 'ABRUTAS': '', 'BARUTAS': '', });
lyr_ParadLImaGeo_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'TextEdit', 'LabelID': 'TextEdit', });
lyr_ManLIma_5.set('fieldImages', {'ID': '', 'AREA': '', 'DATA': '', 'IDMANZANA': '', 'CODDPTO': '', 'CODPROV': '', 'CODDIST': '', 'CODZONA': '', 'CODMZNA': '', 'CLASIFICAC': '', 'UBIGEO': '', });
lyr_ParadLIma_0.set('fieldLabels', {'OBJECTID': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_DistritoLima_2.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'DATA': 'no label', 'COD_DPTO': 'no label', 'COD_PROV': 'no label', 'COD_DIST': 'no label', 'UBIGEO': 'no label', 'NOMBRE': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'POBLACION': 'no label', 'CONOS': 'no label', 'ZONA': 'no label', });
lyr_RedLima_3.set('fieldLabels', {'ID': 'no label', 'LENGTH': 'no label', 'DIR': 'no label', 'TIPO': 'no label', 'CODIGO': 'no label', 'NOMBRE_VIA': 'no label', 'NOMBRE_ALT': 'no label', 'LINK_MODE': 'no label', 'WALKT': 'no label', 'SPEEDBUS': 'no label', 'IVTT': 'no label', 'SPEEDWALK': 'no label', 'DD': 'no label', 'PP': 'no label', 'DI': 'no label', 'UBIGEO': 'no label', 'AB_TP': 'no label', 'BA_TP': 'no label', 'AB_AUTO': 'no label', 'BA_AUTO': 'no label', 'AB_CARGA': 'no label', 'BA_CARGA': 'no label', 'AB_PEATON': 'no label', 'BA_PEATON': 'no label', 'ORDENA341': 'no label', 'LONGITUD': 'no label', 'CONECTOR': 'no label', 'UNIDADESBU': 'no label', 'UNIDADESB1': 'no label', 'COMBIREVHP': 'no label', 'COMBIREVH1': 'no label', 'ZONA': 'no label', 'NUEVO': 'no label', 'OBS': 'no label', 'CALCULO': 'no label', 'BORRAME': 'no label', 'CLEAR': 'no label', 'ABRUTAS': 'no label', 'BARUTAS': 'no label', });
lyr_ParadLImaGeo_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_ManLIma_5.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'DATA': 'no label', 'IDMANZANA': 'no label', 'CODDPTO': 'no label', 'CODPROV': 'no label', 'CODDIST': 'no label', 'CODZONA': 'no label', 'CODMZNA': 'no label', 'CLASIFICAC': 'no label', 'UBIGEO': 'no label', });
lyr_ManLIma_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});