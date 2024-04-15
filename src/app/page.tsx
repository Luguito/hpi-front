import { RevealOnScrollComponent } from "./animations/reveal";
import Text from "./components/text/text";
import VideoContainer from "./components/video-container/video-container";
import { SwipeCarousel } from "./components/carousel/carousel";
import { TechSolutionsComponent } from "./components/tech-sections/tech-section";


export default function HomePage() {

  return (
    <section>
      {/* Video Section */}
      <VideoContainer videoSrc="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/landing.mp4" bgColor="bg-hpi-opacity-video">
        <Text type="medium" classes="absolute text-center text-[60px] text-hpi-white">
          Innovative Solutions <br />
          for Next-Generation <br />
          Port Operations
        </Text>
      </VideoContainer>
      {/* @ts-ignore */}

      <RevealOnScrollComponent className="text-center mt-28">
        <article className="snap-center bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
          <Text type="bold" classes="text-[40px]">
            HUTCHISON PORTS IS AT THE FOREFRONT OF THE INFUSTRY, DRIVING EFFICIENCY
          </Text>
          <Text type="bold" classes="text-[40px]">
            WITH ONGOING INVESTMENTS AND INNOVATION IN PORT TECHNOLOGY.
          </Text>
        </article>
      </RevealOnScrollComponent>
      {/* Technological solutions */}
      {/* @ts-ignore */}
      <RevealOnScrollComponent className="bg-hpi-celeste mx-56 rounded-3xl">
        <TechSolutionsComponent />
      </RevealOnScrollComponent>

      {/* What's new ... section */}
      {/* @ts-ignore */}
      <RevealOnScrollComponent className="mt-56">
        <section className="snap-center">
          <header className="text-center">
            <Text type="medium" classes="text-[26px] text-hpi-blue-light">
              Discover our latest technological advances
            </Text>
            <Text type="bold" classes="text-[40px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
              What’s New at Hutchison Ports
            </Text>
          </header>
          <section className="flex gap-6 mx-36 mt-24">
            <SwipeCarousel></SwipeCarousel>
            {/* {
              ['', ''].map((op, index) => (
                <section className="flex justify-between shadow rounded-3xl py-7 px-9" key={index}>
                  <section className="flex flex-col gap-3">
                    <Text type="bold" classes="text-[30px] text-hpi-blue-light">
                      New mobile app UBI for truck drivers
                    </Text>
                    <Text type="bold" classes="text-[20px] text-hpi-grey-dark">
                      Check whether the container is on the vessel, or ready for pickup or collected.
                    </Text>
                  </section>
                  <article className="w-2/4">
                    <Image src={BlogImages} alt="Blog Image" />
                  </article>
                </section>
              ))
            } */}
          </section>
        </section>
      </RevealOnScrollComponent>
    </section>
  );
}
