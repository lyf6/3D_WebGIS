﻿
var czml = [{
    "id": "document",
    "name": "Basic CZML billboard and label",
    "version": "1.0"
}, {
    "id": "some-unique-id",
    "name": "HHCH",
    "description": "<p><a href='http://www.baidu.com' target='_blank'>HHCH Location TEST</a> 123456.</p><img src='//www.baidu.com/img/baidu_jgylogo3.gif' alt='到百度首页' title='到百度首页'> ",
    "billboard": {
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACvSURBVDhPrZDRDcMgDAU9GqN0lIzijw6SUbJJygUeNQgSqepJTyHG91LVVpwDdfxM3T9TSl1EXZvDwii471fivK73cBFFQNTT/d2KoGpfGOpSIkhUpgUMxq9DFEsWv4IXhlyCnhBFnZcFEEuYqbiUlNwWgMTdrZ3JbQFoEVG53rd8ztG9aPJMnBUQf/VFraBJeWnLS0RfjbKyLJA8FkT5seDYS1Qwyv8t0B/5C2ZmH2/eTGNNBgMmAAAAAElFTkSuQmCC",
        "scale": 1.0
    },
    "label": {
        "fillColor": {
            "rgba": [0, 0, 255, 255]
        },
        "font": "12pt Lucida Console",
        "horizontalOrigin": "LEFT",
        "pixelOffset": {
            "cartesian2": [8, 0]
        },
        "style": "FILL",
        "text": "AGI",
        "showBackground": true,
        "backgroundColor": {
            "rgba": [112, 89, 57, 200]
        }
    },
    "position": {
        "cartesian": [
            1216361.4096947117, -4736253.175342511, 4081267.4865667094
        ]
    }
}];

var viewer = new Cesium.Viewer('cesiumContainer');
viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
