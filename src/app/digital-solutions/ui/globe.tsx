'use client'

/* Imports */
import am5index from "@amcharts/amcharts5/index";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import { useEffect } from "react";

let data = [
    { year: 1991, geometry: { type: "Point", coordinates: [0.6817, 51.4348] } },
    { year: 1993, geometry: { type: "Point", coordinates: [4.0588, 51.9511] } },
    { year: 1995, geometry: { type: "Point", coordinates: [114.1284, 22.3323] } },
    { year: 2007, geometry: { type: "Point", coordinates: [4.0327, 51.9767] } },
    { year: 2012, geometry: { type: "Point", coordinates: [2.1461, 41.3101] } },
    { year: 2013, geometry: { type: "Point", coordinates: [114.1284, 22.3323] } },
    { year: 2013, geometry: { type: "Point", coordinates: [151.2018, -33.9636] } },
    { year: 2013, geometry: { type: "Point", coordinates: [153.1798, -27.3619] } },
    { year: 2015, geometry: { type: "Point", coordinates: [114.1284, 22.3323] } },
    { year: 2016, geometry: { type: "Point", coordinates: [4.0588, 51.9511] } },
    { year: 2016, geometry: { type: "Point", coordinates: [56.6076, 24.5146] } },
    { year: 2017, geometry: { type: "Point", coordinates: [-78.767, 26.5289] } },
    { year: 2017, geometry: { type: "Point", coordinates: [66.9843, 24.8019] } },
    { year: 2018, geometry: { type: "Point", coordinates: [100.8976, 13.0557] } },
    { year: 2019, geometry: { type: "Point", coordinates: [1.3074, 51.9573] } },
    { year: 2019, geometry: { type: "Point", coordinates: [-96.1332, 19.2116] } },
    { year: 2019, geometry: { type: "Point", coordinates: [1.3074, 51.9573] } },
    { year: 2020, geometry: { type: "Point", coordinates: [18.1269, 59.3415] } },
    { year: 2021, geometry: { type: "Point", coordinates: [18.1269, 59.3415] } },
    { year: 2022, geometry: { type: "Point", coordinates: [100.8976, 13.0557] } },
    { year: 2023, geometry: { type: "Point", coordinates: [31.3166, 30.0666] } },
    { year: 2023, geometry: { type: "Point", coordinates: [-96.1332, 19.2116] } },
    { year: 2023, geometry: { type: "Point", coordinates: [1.3074, 51.9573] } },
    { year: 2030, geometry: { type: "Point", coordinates: [106.8958, -6.1005] } },
    { year: 2030, geometry: { type: "Point", coordinates: [114.2727, 22.5729] } },
    { year: 2030, geometry: { type: "Point", coordinates: [100.8976, 13.0557] } },
    { year: 2030, geometry: { type: "Point", coordinates: [151.2018, -33.9636] } },
    { year: 2030, geometry: { type: "Point", coordinates: [18.1269, 59.3415] } },
    { year: 2030, geometry: { type: "Point", coordinates: [56.6076, 24.5146] } },
    { year: 2030, geometry: { type: "Point", coordinates: [1.3074, 51.9573] } },
    { year: 2030, geometry: { type: "Point", coordinates: [66.9843, 24.8019] } },
    { year: 2030, geometry: { type: "Point", coordinates: [0.6817, 51.4348] } },
    { year: 2030, geometry: { type: "Point", coordinates: [-96.1747, 19.2568] } },
    { year: 2030, geometry: { type: "Point", coordinates: [114.1284, 22.3323] } },
    { year: 2030, geometry: { type: "Point", coordinates: [114.1284, 22.3323] } },
    { year: 2030, geometry: { type: "Point", coordinates: [-78.767, 26.5289] } },
    { year: 2030, geometry: { type: "Point", coordinates: [4.0327, 51.9767] } },
    { year: 2030, geometry: { type: "Point", coordinates: [4.0588, 51.9511] } },
    { year: 2030, geometry: { type: "Point", coordinates: [4.0588, 51.9511] } },
    { year: 2030, geometry: { type: "Point", coordinates: [153.1798, -27.3619] } },
    { year: 2030, geometry: { type: "Point", coordinates: [2.1461, 41.3101] } },
    { year: 2030, geometry: { type: "Point", coordinates: [31.3166, 30.0666] } },
]

function map() {
    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("chartdiv");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    let chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        wheelX: 'none',
        wheelY: 'none',
        projection: am5map.geoOrthographic(),
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    }));


    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        fill: am5.color("#009BDE"),
        stroke: am5.color('#009BDE')
    }));

    // Create series for background fill
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    let backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
        fill: root.interfaceColors.get("alternativeBackground"),
        fillOpacity: 0.1,
        strokeOpacity: 0
    });

    backgroundSeries.data.push({
        geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });

    let pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {})
    );

    pointSeries.bullets.push(function () {
        return am5.Bullet.new(root, {
            sprite: am5.Circle.new(root, {
                radius: 5,
                fill: am5.color("#FFC627"),
                stroke: am5.color("#FFFFFF"),
            })
        });
    });


    pointSeries.data.setAll(data);

    // Create graticule series
    // https://www.amcharts.com/docs/v5/charts/map-chart/graticule-series/
    let graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
    graticuleSeries.mapLines.template.setAll({ strokeOpacity: 0.1, stroke: root.interfaceColors.get("alternativeBackground") })


    // Rotate animation
    chart.animate({
        key: "rotationX",
        from: 0,
        to: 360,
        duration: 30000,
        loops: Infinity
    });


    // Make stuff animate on load
    chart.appear(1000, 100);
}

export default function MapGlobe() {
    useEffect(() => {
        am5.array.each(am5.registry.rootElements, function (root) {
            if (root) {
                if (root.dom.id == "chartdiv") {
                    root.dispose();
                }
            }
        });
        map();
    }, []);

    return (
        <>
            <div id="chartdiv" className="w-2/3"></div>
        </>
    )
}