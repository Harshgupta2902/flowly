import Image from "next/image";

const HeroCardSection = ({ featuredImage }) => {
  return (
    <div
      className={`relative col-span-12 h-full mx-auto relative overflow-hidden leading-tight w-full`}
    >
      <div className="relative w-full border-b border-gray-100/90 h-[150px] md:h-[250px]">
        {featuredImage ? (
          <Image
            alt={featuredImage}
            className="bg-gray-700  object-cover absolute top-0 left-0 w-full h-full z-0"
            width={400}
            height={400}
            style={{ objectFit: "cover" }} // Replace 'cover' with the desired value
            loading="eager"
            priority={true}
            key={featuredImage}
            src={featuredImage}
          />
        ) : null}
      </div>
      <div className="relative p-3 w-full max-w-[1320px] mx-auto">
        <div className="w-full z-10 grid grid-cols-12 lg:gap-8 flex pt-0 md:pt-4 p-4  justify-between ">
          <div className="flex order-2 md:order-1 col-span-12 w-full flex-col justify-between">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex justify-between w-full">
                    <div className="mb-0 -mt-[66px] md:-mt-[92px] flex-none w-[104px] h-[104px] md:w-[124px] md:h-[124px] my-auto shadow-sm rounded-2xl p-[3px] bg-white border border-gray-300">
                      <Image
                        data-gmlazy={false}
                        width="100"
                        height="100"
                        alt="Brand logo for external website's link"
                        className="rounded-xl h-full w-full object-cover bg-white"
                        src={
                          "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png"
                        }
                      />
                    </div>

                    <div className="absolute top-0 right-0 p-4 pr-6">
                      <div className="order-1 flex md:order-2 col-span-3 flex-col flex-none justify-end">
                        {/* hide on mobile */}
                        <div className="flex gap-4 flex-none">
                          <div className="flex justify-end">
                            <a
                              target={"_blank"}
                              href={"" + "?ref=prototypr.io"}
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-3 flex-col text-gray-900 justify-center">
                    <div className="flex flex-row">
                      <div className="flex flex-col w-full">
                        <h1 className="text-3xl md:text-4xl w-full line-clamp-2 mt-1 mb-2 tracking-tight font-semibold drop-shadow-xs text-gray-900">
                          {"post?.attributes?.title"}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardSection;
