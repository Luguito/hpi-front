'use client'
import { motion } from 'framer-motion';

export const Icon1 = () => {
    return (
        <>
            {/* plus */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 61" className="
            absolute bottom-3 right-3 h-[1em]
            xl:h-[3.5em]
            2xl:h-[4em] 2xl:right-7
            "> 
                <g transform="translate(-1492 -2148)">
                    <motion.circle cx="30.5" cy="30.5" r="30.5" transform="translate(1492 2148)"
                        variants={{
                            "banner": {
                                fill: "#002e6d",
                                transition: {
                                    duration: 0.3,
                                }
                            },
                            "content": {
                                fill: "#fff",
                                transition: {
                                    duration: 0.3,
                                }
                            }
                        }}
                    />
                    <motion.path
                        transform="translate(1505.992 2161.992)"
                        style={{
                            strokeWidth: 5,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        variants={{
                            'content': {
                                d: "M5,16.508H28.017",
                                fill: "none",
                                stroke: "#002e6d",
                                transition: {
                                    duration: 0.3,
                                }
                            },
                            'banner': {
                                d: "M5,16.508H28.017M16.508,28.017V5",
                                fill: "none",
                                stroke: "#fff",
                                transition: {
                                    duration: 0.3,
                                }
                            },
                        }}
                    />
                </g>
            </svg>
        </>
    )
}