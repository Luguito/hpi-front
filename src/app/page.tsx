import { RevealOnScrollComponent } from "./animations/reveal";
import Text, { B1, B2, H1, H2, H3, H5 } from "./components/text/text";
import VideoContainer from "./components/video-container/video-container";
import { SwipeCarousel } from "./components/carousel/carousel";
import { TechSolutionsComponent } from "./components/tech-sections/tech-section";
import UBI from '../../public/home/ubi.png'
import Graphic from '../../public/home/graphic.png'
import Truck from '../../public/home/13.jpg'
import Image from 'next/image';

export default function HomePage() {

  return (
    <section >
      {/* Video Section */}
      <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Home%20Banner.mp4" bgColor="">
        <H1 color="absolute text-center text-[60px] text-hpi-white font-bold text-shadow-md leading-[80px]">
          INNOVATIVE SOLUTIONS <br />
          FOR NEXT-GENERATION <br />
          PORT OPERATIONS
        </H1>
      </VideoContainer>

      {/* @ts-ignore */}
      <RevealOnScrollComponent className="text-center mt-28">
        <H2 color="text-gradient leading-[65px]">
          HUTCHISON PORTS IS AT THE <br />
          FOREFRONT OF THE INDUSTRY
        </H2>
        <B1 color="text-hpi-blue-dark text-center font-medium mt-3">
          driving efficiency with ongoing investments and <br />
          innovation in port technology
        </B1>
      </RevealOnScrollComponent>
      {/* Technological solutions */}
      {/* @ts-ignore */}
      <RevealOnScrollComponent className="flex justify-center">
        <TechSolutionsComponent />
      </RevealOnScrollComponent>

      {/* What's new ... section */}
      {/* @ts-ignore */}
      <RevealOnScrollComponent className="flex justify-center mt-56 mb-32">
        <section className="snap-center">
          <header className="text-left">
            <H5 color="text-hpi-blue-light font-medium">
              Discover our latest technological advances
            </H5>
            <H2 color="text-gradient">
              WHAT IS NEW AT HUTCHISON PORTS
            </H2>
          </header>
          <section className="flex flex-col gap-10 mt-32">
            <section className="flex justify-center gap-10">
              <article className="bg-white rounded-3xl shadow-lg flex">
                <article className="py-10 px-14">
                  <H3 color="text-hpi-blue-light font-bold">
                    UBI, THE <br />
                    NEW APP <br />
                    FOR TRUCK <br />
                    DRIVERS
                  </H3>
                  <B2 color="text-hpi-body-grey font-medium mt-5">
                    Check whether the <br />
                    container is on the <br />
                    vessel, or ready for <br />
                    pickup or collected.
                  </B2>
                  <B2 color="text-hpi-blue-light font-semibold cursor-pointer mt-6">
                    Read More
                  </B2>
                </article>
                <Image src={UBI} alt={""} width={350} />
              </article>
              <article className="h-[30em] bg-white rounded-3xl shadow-lg flex ">
                <article className="p-10">
                  <H3 color="text-hpi-blue-light font-bold">
                    VERONICA <br />
                    WILL GET <br />
                    SMARTER
                  </H3>
                  <B2 color="text-hpi-body-grey font-medium mt-5">
                    New decision <br />
                    engines driven by <br />
                    real-time data <br />
                    provide flexibility to <br />
                    accommodate changes.
                  </B2>
                  <B2 color="text-hpi-blue-light font-semibold cursor-pointer mt-6">
                    Read More
                  </B2>
                </article>
                <Image src={Graphic} alt={""} width={300} />
              </article>
            </section>
            <article className="h-[30em] bg-white rounded-3xl shadow-lg flex justify-between">
              <article className="p-10">
                <H3 color="text-hpi-blue-light font-bold">
                  GATE OPERATIONS ARE <br />
                  POSSIBLE THROUGH <br />
                  GATE AUTOMATION
                </H3>
                <B2 color="text-hpi-body-grey font-medium mt-5">
                  These systems integrate advanced <br />
                  technologies such as Optical Characters <br />
                  Recognition (OCR), License Plate <br />
                  Recognition (LPR), CCTV, RFID tractor card  <br />
                  reader and remote reefer monitoring system.
                </B2>
                <B2 color="text-hpi-blue-light font-semibold cursor-pointer mt-6">
                  Read More
                </B2>
              </article>
              <Image src={Truck} alt={""} width={800} className="object-fill rounded-tr-2xl rounded-br-2xl" />
            </article>
          </section>
        </section>
      </RevealOnScrollComponent>
    </section>
  );
}
