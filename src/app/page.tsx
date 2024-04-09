import Button from "./components/button/button";
import Text from "./components/text/text";
import VideoPlayer from "./components/video/video";

export default function HomePage() {
  return (
    <section>

      <section className="relative">
        <VideoPlayer></VideoPlayer>
        <Text type="medium" classes="absolute top-1/4 left-1/4 text-[80px] text-hpi-white">Innovative Solutions for Next-Generation Port Operations</Text>
      </section>

      <section className="text-center my-40">
        <article className="bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
          <Text type="bold" classes="text-[60px]">
            Hutchison Ports is at the forefront of the industry,
          </Text>
          <Text type="medium" classes="text-[40px]">
            driving efficiency with ongoing investments and innovation in port technology.
          </Text>
        </article>
      </section>

      {/* Technological solutions */}
      <section className="bg-hpi-celeste mx-36 rounded-3xl">
        <header className="text-center py-20">
          <Text type="medium" classes="text-[40px] text-hpi-blue-light">Our Technological Solutions</Text>
        </header>
        <section className="pb-28">
          <nav className="flex justify-evenly gap-4">
            <Text type="bold" classes="text-[50px] text-hpi-blue-dark">Automation</Text>
            <Text type="bold" classes="text-[50px] text-hpi-grey-light">Shared Services</Text>
            <Text type="bold" classes="text-[50px] text-hpi-grey-light">Digital Solutions</Text>
          </nav>
          <section className="flex justify-between mt-28 px-28">
            <article className="w-1/3">
              {/* p, button*/}
              <Text type="medium" classes="text-[30px] text-hpi-grey-dark">
                Implementing AI and automation technologies, we elevate terminal productivity, safety, and quality through optimized scheduling, autonomous operations, and gate automation, leading to operational excellence.
              </Text>
              <div className="mt-14">
                <Button>
                  <Text type="bold" classes="text-[30px] text-hpi-white">
                    Learn More
                  </Text>
                </Button>
              </div>
            </article>
            <article className="flex justify-center">
              {/* img */}
              <img src="" alt="Img Here" />
            </article>
          </section>
        </section>
      </section>

      {/* What's new ... section */}

      <section className="mt-48">
        <header className="text-center">
          <Text type="bold" classes="text-[50px] bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">What’s New at Hutchison Ports</Text>
          <Text type="medium" classes="text-[35px] text-hpi-grey-dark">Discover our latest technological advances and features</Text>
        </header>
        <section className="flex gap-6 mx-36 mt-24">
          {
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
                  <img src="" alt="IMG" />
                </article>
              </section>
            ))
          }
        </section>
      </section>
    </section>
  );
}
