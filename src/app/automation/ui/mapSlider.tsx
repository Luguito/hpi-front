'use client'
/* Imports */
import am5_index from "@amcharts/amcharts5/index";
import am5_map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import { useRef, useEffect } from "react";
/* Chart code */
// Country data
let data = [
    { year: 1991, country: "AL" },
    { year: 1993, country: "AL" },
    { year: 1995, country: "AL" },
    { year: 2007, country: "AL" },
    { year: 2012, country: "AL" },
    { year: 2013, country: "AL" },
    { year: 2013, country: "AL" },
    { year: 2013, country: "AL" },
    { year: 2015, country: "AL" },
    { year: 2016, country: "AL" },
    { year: 2016, country: "AL" },
    { year: 2017, country: "AL" },
    { year: 2017, country: "AL" },
    { year: 2018, country: "AL" },
    { year: 2019, country: "AL" },
    { year: 2019, country: "AL" },
    { year: 2019, country: "AL" },
    { year: 2020, country: "AL" },
    { year: 2021, country: "AL" },
    { year: 2022, country: "AL" },
    { year: 2023, country: "AL" },
    { year: 2023, country: "AL" },
    { year: 2023, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
    { year: 2030, country: "AL" },
]

function map() {
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
        years[year].push(row.country);

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
        width: am5.percent(30),
        orientation: "horizontal",
        start: 0,
        centerY: am5.p50,
    }));

    slider.startGrip.get('background')?.set('fill', am5.color('#002E6D'))
    slider.thumb.setAll({
        fill: am5.color('#FFFF')
    })

    slider.startGrip.set("label", am5.Label.new(root, {
        text: firstYear + "",
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
    }));


    updateCountries(firstYear);

    slider.events.on("rangechanged", function (e) {
        console.log(e)
        let year = firstYear + Math.round(slider.get("start", 0) * (lastYear - firstYear));
        //   @ts-ignore
        slider.startGrip.get("label").set("text", year + "");
        updateCountries(year);
        console.log(year)
        // updateSeriesData(
        //   firstYear + Math.round(slider.get("start", 0) * (lastYear - firstYear))
        // );
    });

    function updateCountries(year: any) {
        am5.object.each(years, function (joinYear, countries) {
            console.log(countries)
            console.log(joinYear)
            // #009BDE
            am5.array.each(countries, function (country) {
                //   @ts-ignore
                let dataItem = polygonSeries.getDataItemById(country);
                // console.log(dataItem)
                if (dataItem) {
                    dataItem.get("mapPolygon").set("active", joinYear <= year)
                }
            })
        })
    }
}

export const MapSlider = () => {
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
            map();
        }
    }, []);

    return (
        <>
            <div id="chartdiv" ref={ref} className="h-[40em]"></div>
        </>
    )
}