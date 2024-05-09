'use client'
/* Imports */
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import { useRef, useEffect } from "react";
/* Chart code */
// Country data
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

function map(trigger: any) {
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
        projection: am5map.geoNaturalEarth1(),
        panX: "none",
        panY: "none",
        wheelX: 'none',
        wheelY: 'none',
    }));

    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        fill: am5.color('#002E6D'),
        stroke: am5.color('#002E6D'),
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
    }));

    let pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {})
    );

    pointSeries.bullets.push(createPoint);
    pointSeries.data.events.on('push', function (e) {
        console.log(e)
    })
    // polygonSeries.mapPolygons.template.setAll({
    //     tooltipText: "{name}",
    //     toggleKey: "active",
    //     interactive: true
    // });

    // polygonSeries.mapPolygons.template.states.create("hover", {
    //     fill: root.interfaceColors.get("primaryButtonHover")
    // });

    // polygonSeries.mapPolygons.template.states.create("active", {
    //     fill: root.interfaceColors.get("primaryButtonActive")
    // });

    // Set clicking on "water" to zoom out
    //   @ts-ignore
    // chart.chartContainer.get("background").events.on("click", function () {
    //     chart.goHome();
    // })

    // Make stuff animate on load
    chart.appear(1000, 100);

    // Aggregate data
    let years = {};
    let firstYear = 2030;
    let lastYear = 1991;

    for (var i = 0; i < data.length; i++) {
        let row = data[i];
        let year = row.year;
        //   @ts-ignore
        if (years[year] == undefined) {
            //   @ts-ignore
            years[year] = [];
        }
        //   @ts-ignore
        years[year].push(row);

        if (firstYear > year) {
            firstYear = year;
        }
        if (lastYear < year) {
            lastYear = year;
        }
    }

    // Create controls
    let container = chart.children.push(am5.Container.new(root, {
        y: am5.p100,
        centerX: am5.p50,
        centerY: am5.p100,
        x: am5.p50,
        width: am5.percent(90),
        layout: root.horizontalLayout,
        paddingBottom: 10,
    }));


    let slider = container.children.push(am5.Slider.new(root, {
        width: am5.percent(80),
        orientation: "horizontal",
        start: 0,
        centerY: am5.p50,
    }));

    slider.startGrip.get('background')?.set('fill', am5.color('#009BDE'))
    slider.thumb.setAll({
        fill: am5.color('#FFFF'),
    })

    slider.startGrip.set("label", am5.Label.new(root, {
        text: firstYear + "",
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
    }));


    updateCountries(firstYear);

    slider.events.on("rangechanged", function (e) {
        let year = firstYear + Math.round(slider.get("start", 0) * (lastYear - firstYear));
        //   @ts-ignore
        if (!years[year]) return;

        //   @ts-ignore
        slider.startGrip.get("label")?.setAll({
            text: year + '',
            fontSize: 20
        });

        setTimeout(() => {
            //   @ts-ignore
            slider.startGrip.get("label").set('fontSize', 15);
        }, 1000);
        
        updateCountries(year);
    })

    function updateCountries(year: any) {
        // @ts-ignore
        am5.object.each(years[year], function (joinYear, country) {
            if (!pointSeries.data.contains(country)) {
                pointSeries.data.push(country)
                trigger(year)
            } else {
                pointSeries.data.removeValue(country)
                trigger(year)
            }
        })
    }

    function createPoint() {
        let circle = am5.Circle.new(root, {
            radius: 5,
            fill: am5.color("#FFC627"),
            stroke: am5.color("#FFFFFF"),
            cursorOverStyle: "pointer",
            strokeWidth: 2,
        });

        return am5.Bullet.new(root, { sprite: circle });
    }
}

export const MapSlider = ({ changeSection }: any) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            am5.array.each(am5.registry.rootElements, function (root) {
                if (root) {
                    if (root.dom.id == "chartdiv") {
                        root.dispose();
                    }
                }
            });
            map(changeSection);
        }
    }, []);

    return (
        <>
            <div id="chartdiv" ref={ref} className="h-[40em]"></div>
        </>
    )
}