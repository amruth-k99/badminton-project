const Sponsor = () => {
  return (
    <div className="relative mt-20 bg-gray-100">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* <!-- Testimonial card--> */}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-auto"
                src="https://storage.googleapis.com/production-domaincom-v1-0-4/104/392104/M8RoNQsF/7921eb6930314f3185f4d6f9b1c88d6c"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* <!-- Content area --> */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <p className="text-sm">
              Proud Sponsor of the US Eastern Intercollegiate Team Badminton
            </p>
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              Our Sponsor Durabird
            </h2>
            <div className="mt-3 text-gray-800 dark:text-gray-800 space-y-6">
              <p className="text-base leading-7">
                Duorabird is the official sponsor of the US Eastern
                Intercollegiate Team Badminton. One Aim- feather shuttles that
                last longer without a premium on price using our patented
                feather strengthening technology. Working with Duorabird means
                you can focus on your game.
              </p>
            </div>
          </div>

          {/* <!-- Stats section --> */}
          <div className="mt-10">
            <div className="mt-10">
              <a
                href="https://durabird.com/"
                target="_blank"
                rel="noreferrer"
                className="text-base font-medium text-rose-500"
              >
                Learn more about Durabird&rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sponsor;
