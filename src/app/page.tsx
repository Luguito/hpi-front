import { RevealOnScrollComponent } from "./animations/reveal";
import Text, { B1, B2, H1, H2, H3, H5 } from "./components/text/text";
import VideoContainer from "./components/video-container/video-container";
import { SwipeCarousel } from "./components/carousel/carousel";
import { TechSolutionsComponent } from "./components/tech-sections/tech-section";

import { BlogsUI } from "./components/blog/blog";

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
          <BlogsUI />
        </section>
      </RevealOnScrollComponent>
    </section>
  );
}
