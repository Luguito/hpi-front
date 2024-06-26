import { RevealOnScrollComponent } from "./animations/reveal";
import Text, { B1, B2, H1, H2, H3, H5 } from "./components/text/text";
import VideoContainer from "./components/video-container/video-container";
import { SwipeCarousel } from "./components/carousel/carousel";
import { TechSolutionsComponent } from "./components/tech-sections/tech-section";

import { BlogsUI } from "./components/blog/blog";
import { Metadata } from "next";
import Button from "./components/button/button";


export const metadata: Metadata = {
  title: 'Innovation | Hutchison Ports',
}
export default function HomePage() {
  // 720 resolution
  return (
    <section>
      {/* Video Section */}
      <VideoContainer videoSrc="videos/hpi-assets_Home Banner.mp4" bgColor="">
        <H1 color="absolute text-center text-hpi-white font-bold text-shadow-md leading-[26px] xl:leading-[65px] 2xl:leading-[80px]">
          INNOVATIVE SOLUTIONS FOR NEXT- <br />
          GENERATION PORT OPERATIONS
        </H1>
      </VideoContainer>

      {/* @ts-ignore */}
      <RevealOnScrollComponent className="flex flex-col items-center justify-center mt-10 xl:mt-9 2xl:mt-28">
        <H2 color="text-gradient leading-[20px] lg:leading-[65px] text-center w-[75%] xl:w-full 2xl:w-2/4">
          HUTCHISON PORTS IS AT THE
          FOREFRONT OF THE INDUSTRY
        </H2>
        <B1 color="text-hpi-blue-dark text-center font-medium mt-3 xl:mt-1 xl:text-[18px] 2xl:w-2/4">
          driving efficiency with ongoing investments and
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
      <RevealOnScrollComponent className="flex justify-center xl:my-10 2xl:mt-40 2xl:mb-32">
        <section className="w-[84%] mt-4">
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
      <footer>
        <section className="text-center mb-24 mt-10">
          <H3 color="text-gradient font-bold mx-24 2xl:mx-56">
            EXPLORE HOW WE CAN TRANSFORM CONTAINER
            TERMINAL OPERATIONS TOGETHER
          </H3>
          <article>
            <Button>
              <Text type="bold" classes="text-[16px] text-hpi-white">
                <a href="mailto:grp_ops_product_management_team@hutchisonports.com">Contact Us</a>
              </Text>
            </Button>
          </article>
        </section>
      </footer>
    </section>
  );
}
