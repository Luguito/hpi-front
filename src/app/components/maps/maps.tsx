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
        projection: am5map.geoNaturalEarth1(),
    }));



    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color('#009CDE'),
    }));

    let cities = [
        {
            id: "Karachi",
            title: "Pakistan, Karachi",
            description: "ROC transforms struggling  terminals into highly efficient operations, increasing  productivity by 30% and  reducing costs by 25%.",
            geometry: { type: "Point", coordinates: [67.01040000, 24.86080000] }
        },
        {
            id: "Jizan",
            title: "Saudi Arabia, Jazan",
            description: "From day one, ROC enabled  the terminal to commence  commercial operations 50%  faster than traditional methods.",
            geometry: { type: "Point", coordinates: [42.70761070, 17.17381760] }
        },
        {
            id: "Spark",
            title: "Saudi Arabia, SPARK",
            description: "ROC is to serve both  seaport terminals and intermodal hubs, with  services expected to commence in Q2 2024.",
            geometry: { type: "Point", coordinates: [48.6207111, 26.106702] }
        },
        {
            id: "Mexico",
            title: "Mexico (ICAVE/EIT/LCT)",
            description: "The NOC consolidated  operational planning functions, standardising and enhancing  stowage planning services.",
            geometry: { type: "Point", coordinates: [-96.1332, 19.2116] }
        },
        {
            id: "Abu Qir",
            title: "Egypt (Abu Qir/Alexandria/Ain Sokhna)",
            description: "The forthcoming application  of ROC promises to extend services and transform  operations in the coming years.",
            geometry: { type: "Point", coordinates: [31.3166, 30.0666] }
        },
        {
            id: "Shenzhen",
            title: "China, Hong Kong/Shenzhen",
            description: "Advanced solutions  implemented through ROC not only enhanced efficiency  and productivity, but also  reduced human error by 60%.",
            geometry: { type: "Point", coordinates: [112.7082672, 22.881177] }
        }
    ];

    let pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {})
    );


    pointSeries.bullets.push(function (root, series, item) {
        let circle = am5.Circle.new(root, {
            radius: 8,
            fill: am5.color("#FFC627"),
            stroke: am5.color("#FFFFFF"),
            cursorOverStyle: "pointer",
            strokeWidth: 2,
            showTooltipOn: 'hover',
            tooltipHTML: `
            <section class="text-center max-w-full text-[5px] w-[28%] xl:text-[10px] xl:w-[45%] xl:px-2 2xl:text-[16px] 2xl:w-[37%]">
            <header style="color: #002E6D; font-weight: bold;">
                <b>{title}</b>
            </header>
            <section class="flex items-center justify-center text-[#002E6D] break-words">
                <p>{description}</p>
            </section>
        </section>
        `,
        });

        return am5.Bullet.new(root, { sprite: circle })
    });

    pointSeries.events.once('datavalidated', (e) => {
        let l = pointSeries.dataItems.length
        let china = pointSeries.dataItems.at(l - 1);

        // @ts-ignore
        let chinaPoint = china?.bullets[0]?.get('sprite');
        // @ts-ignore
        let karachi = pointSeries.dataItems.at(0)?.bullets[0].get('sprite')


        // @ts-ignore
        karachi?.setAll({
            tooltipHTML: `
            <section class="text-center max-w-full text-[5px] w-[35%] xl:text-[10px] xl:w-[40%] xl:px-2 2xl:text-[16px] 2xl:w-[33%]">
                <header style="color: #002E6D; font-weight: bold;">
                    <b>{title}</b>
                </header>
                <section class="flex items-center justify-center text-[#002E6D] break-words">
                    <p>{description}</p>
                </section>
            </section>
            `
        })

        // @ts-ignore
        chinaPoint?.setAll({
            tooltipHTML: `
            <section class="text-center max-w-full text-[5px] w-[45%] xl:text-[10px] xl:w-[42%] xl:px-2 2xl:text-[16px] 2xl:w-[35%]">
                <header style="color: #002E6D; font-weight: bold;">
                    <b>{title}</b>
                </header>
                <section class="flex items-center justify-center text-[#002E6D] break-words">
                    <p>{description}</p>
                </section>
            </section>
            `
        })
        // @ts-ignore
        chinaPoint?.showTooltip();
    })
    pointSeries.data.setAll(cities);
    pointSeries.getTooltip()?.setAll({ width: am5.percent(23), getFillFromSprite: false })
    pointSeries.getTooltip()?.get('background')?.setAll({ fill: am5.color('#FFFFFF') })
    // Make stuff animate on load
    chart.appear(1000, 100)
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
            <div id="chartdiv" ref={ref} className="h-[10em] lg:h-[30em]"></div>
        </>
    )
}