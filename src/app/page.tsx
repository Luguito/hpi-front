import { RevealOnScrollComponent } from "./animations/reveal";
import Text from "./components/text/text";
import VideoContainer from "./components/video-container/video-container";
import { SwipeCarousel } from "./components/carousel/carousel";
import { TechSolutionsComponent } from "./components/tech-sections/tech-section";


export default function HomePage() {

  return (
    <section>
      {/* Video Section */}
      <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Home%20Banner.mp4" bgColor="">
        <p className="absolute text-center text-[60px] text-hpi-white font-bold text-shadow-md">
          INNOVATIVE SOLUTIONS <br />
          FOR NEXT-GENERATION <br />
          PORT OPERATIONS
        </p>
      </VideoContainer>
      
      {/* @ts-ignore */}
      <RevealOnScrollComponent className="text-center mt-28">
        <article className="snap-center bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
          <Text type="bold" classes="text-[30px]">
            HUTCHISON PORTS IS AT THE FOREFRONT OF THE INDUSTRY, <br />
            DRIVING EFFICIENCY WITH ONGOING INVESTMENTS AND <br />
            INNOVATION IN PORT TECHNOLOGY.
          </Text>
        </article>
      </RevealOnScrollComponent>
      {/* Technological solutions */}
      {/* @ts-ignore */}
      <RevealOnScrollComponent className="flex justify-center">
        <section className="bg-hpi-celeste rounded-3xl mt-20 w-[60%]">
          <TechSolutionsComponent />
        </section>
      </RevealOnScrollComponent>

      {/* What's new ... section */}
      {/* @ts-ignore */}
      <RevealOnScrollComponent className="mt-56 mb-32">
        <section className="snap-center">
          <header className="text-center">
            <Text type="medium" classes="text-[16px] text-hpi-blue-light">
              Discover our latest technological advances
            </Text>
            <Text type="bold" classes="text-[30px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
               WHAT IS NEW AT HUTCHISON PORTS
            </Text>
          </header>
          <section className="flex gap-6 mx-36 mt-24">
            <SwipeCarousel></SwipeCarousel>
          </section>
        </section>
      </RevealOnScrollComponent>
    </section>
  );
}
