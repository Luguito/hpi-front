'use client';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useEffect, useRef } from "react";
// import {} from "../../../../public/shared-services/point-map.svg"

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
        projection: am5map.geoMercator(),
    }));



    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color('#009BDE'),
        stroke: am5.color('#446694'),
    }));

    let cities = [
        {
            id: "Karachi",
            title: "Pakistan, Karachi",
            description: "ROC transforms struggling \n terminals into highly efficient \n operations, increasing \n productivity by 30% and \n reducing costs by 25%.",
            geometry: { type: "Point", coordinates: [67.01040000, 24.86080000] }
        },
        {
            id: "Jizan",
            title: "Saudi Arabia, Jazan",
            description: "From day one, ROC enabled \n the terminal to commence \n commercial operations 50% \n faster than traditional methods.",
            geometry: { type: "Point", coordinates: [42.70761070, 17.17381760] }
        },
        {
            id: "Spark",
            title: "Saudi Arabia, SPARK",
            description: "ROC is to serve both \n seaport terminals and \n intermodal hubs, with \n services expected to commence in Q2 2024.",
            geometry: { type: "Point", coordinates: [48.6207111, 26.106702] }
        },
        {
            id: "Shenzhen",
            title: "China, Hong Kong/Shenzhen",
            description: "Advanced solutions \n implemented through ROC \n not only enhanced efficiency \n and productivity, but also \n reduced human error by 60%.",
            geometry: { type: "Point", coordinates: [112.7082672, 22.881177] }
        },
        {
            id: "Mexico",
            title: "Mexico (ICAVE/EIT/LCT)",
            description: "The NOC consolidated \n operational planning functions,\n standardising and enhancing \n stowage planning services.",
            geometry: { type: "Point", coordinates: [-96.1332, 19.2116] }
        },
        {
            id: "Abu Qir",
            title: "Egypt (Abu Qir/Alexandria/Ain Sokhna)",
            description: "The forthcoming application \n of ROC promises to extend \n services and transform \n operations in the coming years.",
            geometry: { type: "Point", coordinates: [31.3166, 30.0666] }
        },
    ];

    
    let pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {})
    );

    pointSeries.bullets.push(function () {
        let circle = am5.Circle.new(root, {
            radius: 5,
            fill: am5.color("#FFFFFF"),
            stroke: am5.color("#002E6D"),
            strokeWidth: 1,
            tooltipHTML: `
            <section style="text-align: center;">
                <header>
                    <b>{title}</b>
                </header>
                <p style="white-space: pre-line;">{description}</p>
            </section>
        `,
        });

        return am5.Bullet.new(root, { sprite: circle });
    });

    // pointSeries.bullets.push(function() {
    //     var container = am5.Container.new(root, {});
    //     container.children.push(am5.Graphics.new(root, {
    //       svgPath: "M16,28c-6.62,0-12-5.38-12-12s5.38-12,12-12,12,5.38,12,12-5.38,12-12,12ZM16,6c-5.51,0-10,4.49-10,10s4.49,10,10,10,10-4.49,10-10-4.49-10-10-10Z",
    //       scale: 0.06,
    //       centerY: am5.p50,
    //       centerX: am5.p50,
    //       fill: am5.color(0x000000)
    //     }));
    //     return am5.Bullet.new(root, { sprite: container });
    //   });

    pointSeries.data.setAll(cities);

    // Make stuff animate on load
    chart.appear(1000, 100);
}


export const Maps = () => {
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
    }, [ref]);

    return (
        <>
            <div id="chartdiv" ref={ref} className="h-[40em]"></div>
        </>
    )
}

// M16,0C7.16,0,0,7.16,0,16s7.16,16,16,16,16-7.16,16-16S24.84,0,16,0ZM16,31c-8.28,0-15-6.72-15-15S7.72,1,16,1s15,6.72,15,15-6.72,15-15,15ZM16,11c-2.76,0-5,2.24-5,5s2.24,5,5,5,5-2.24,5-5-2.24-5-5-5ZM16,20c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4ZM16,4c-6.63,0-12,5.37-12,12s5.37,12,12,12,12-5.37,12-12-5.37-12-12-12ZM16,27c-6.08,0-11-4.92-11-11s4.92-11,11-11,11,4.92,11,11-4.92,11-11,11Z