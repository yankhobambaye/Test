ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([568453.808235, 1475428.518120, 654435.762462, 1539842.705752]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_parcelle_non_enquete1_1 = new ol.format.GeoJSON();
var features_parcelle_non_enquete1_1 = format_parcelle_non_enquete1_1.readFeatures(json_parcelle_non_enquete1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_parcelle_non_enquete1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelle_non_enquete1_1.addFeatures(features_parcelle_non_enquete1_1);
var lyr_parcelle_non_enquete1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelle_non_enquete1_1, 
                style: style_parcelle_non_enquete1_1,
                popuplayertitle: "parcelle_non_enquete1",
                interactive: true,
                title: '<img src="styles/legend/parcelle_non_enquete1_1.png" /> parcelle_non_enquete1'
            });
var format_poly_par_individuel_2 = new ol.format.GeoJSON();
var features_poly_par_individuel_2 = format_poly_par_individuel_2.readFeatures(json_poly_par_individuel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_poly_par_individuel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poly_par_individuel_2.addFeatures(features_poly_par_individuel_2);
var lyr_poly_par_individuel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poly_par_individuel_2, 
                style: style_poly_par_individuel_2,
                popuplayertitle: "poly_par_individuel",
                interactive: true,
                title: '<img src="styles/legend/poly_par_individuel_2.png" /> poly_par_individuel'
            });
var format_poly_par_collectifma_couche1_modifiee_3 = new ol.format.GeoJSON();
var features_poly_par_collectifma_couche1_modifiee_3 = format_poly_par_collectifma_couche1_modifiee_3.readFeatures(json_poly_par_collectifma_couche1_modifiee_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_poly_par_collectifma_couche1_modifiee_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poly_par_collectifma_couche1_modifiee_3.addFeatures(features_poly_par_collectifma_couche1_modifiee_3);
var lyr_poly_par_collectifma_couche1_modifiee_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poly_par_collectifma_couche1_modifiee_3, 
                style: style_poly_par_collectifma_couche1_modifiee_3,
                popuplayertitle: "poly_par_collectif — ma_couche1_modifiee",
                interactive: true,
                title: '<img src="styles/legend/poly_par_collectifma_couche1_modifiee_3.png" /> poly_par_collectif — ma_couche1_modifiee'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_parcelle_non_enquete1_1.setVisible(true);lyr_poly_par_individuel_2.setVisible(true);lyr_poly_par_collectifma_couche1_modifiee_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_parcelle_non_enquete1_1,lyr_poly_par_individuel_2,lyr_poly_par_collectifma_couche1_modifiee_3];
lyr_parcelle_non_enquete1_1.set('fieldAliases', {'fid': 'fid', 'IDUP': 'IDUP', });
lyr_poly_par_individuel_2.set('fieldAliases', {'fid': 'fid', 'IDUP': 'IDUP', });
lyr_poly_par_collectifma_couche1_modifiee_3.set('fieldAliases', {'fid': 'fid', 'IDUP': 'IDUP', });
lyr_parcelle_non_enquete1_1.set('fieldImages', {'fid': 'TextEdit', 'IDUP': 'TextEdit', });
lyr_poly_par_individuel_2.set('fieldImages', {'fid': 'TextEdit', 'IDUP': 'TextEdit', });
lyr_poly_par_collectifma_couche1_modifiee_3.set('fieldImages', {'fid': 'TextEdit', 'IDUP': 'TextEdit', });
lyr_parcelle_non_enquete1_1.set('fieldLabels', {'fid': 'inline label - always visible', 'IDUP': 'inline label - always visible', });
lyr_poly_par_individuel_2.set('fieldLabels', {'fid': 'inline label - always visible', 'IDUP': 'inline label - always visible', });
lyr_poly_par_collectifma_couche1_modifiee_3.set('fieldLabels', {'fid': 'inline label - always visible', 'IDUP': 'inline label - always visible', });
lyr_poly_par_collectifma_couche1_modifiee_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});