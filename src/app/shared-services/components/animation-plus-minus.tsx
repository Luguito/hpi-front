'use client'
import { motion } from 'framer-motion';

export const Icon1 = () => {
    return (
        <>
            {/* plus */}
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" className="absolute bottom-5 right-5"> 
                <g transform="translate(-1492 -2148)">
                    <motion.circle cx="30.5" cy="30.5" r="30.5" transform="translate(1492 2148)"
                        variants={{
                            "banner": {
                                fill: "#002e6d",
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut",
                                }
                            },
                            "content": {
                                fill: "#fff",
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut",
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
                                    duration: 0.5,
                                    ease: "easeInOut",

                                }
                            },
                            'banner': {
                                d: "M5,16.508H28.017M16.508,28.017V5",
                                fill: "none",
                                stroke: "#fff",
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }
                            },
                        }}
                    />
                </g>
            </svg>
        </>
    )
}