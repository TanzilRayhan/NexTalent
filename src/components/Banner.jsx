const Banner = () => {
    return (
      <div>
        <div
          className="hero lg:min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/dPBgWxT/job-search-shutterstock-April-22-lr-aspect-ratio-1190-450.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <div className=" spaceGrotesk mx-auto px-5 lg:px-0 text-center">
                <h1 className="text-4xl lg:text-6xl text-center font-bold py-5 text-white">
                  NexTalent - Grab your job
                </h1>
                <p className="text-xs lg:text-base font-semibold pt-5 pb-10 text-gray-200">
                At the core of NexTalent is a vision of a seamless, user-friendly platform that bridges the gap between talent and opportunity. We believe in simplifying the talent acquisition process, making it efficient, transparent, and rewarding for both employers and candidates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  