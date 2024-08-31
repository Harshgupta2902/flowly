"use server";

<<<<<<< HEAD
require("dotenv").config();
import dynamic from "next/dynamic";
import Container from "@/components/Common/Container";
=======
import dynamic from "next/dynamic";
import Link from "next/link";
import Container from "@/components/Common/Container";
import SocialShare from "@/components/details/SocialShare";
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
const StickyFooterCTA = dynamic(
  () => import("@/components/Footer/StickyFooterCTA"),
  {
    ssr: false,
  }
);
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import PopularTagsSection from "@/components/newsletter/PopularTagsSection";
import AuthorCard from "@/components/details/AuthorCard";
<<<<<<< HEAD
import { headers } from "next/headers";
import { marked } from "marked";
=======
import HeroCardSection from "@/components/details/HeroCardSectionSimple";
import LikeButton from "@/components/details/LikeButton";
import { headers } from "next/headers";
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c

const getPackageDetails = async (packages) => {
  try {
    const response = await fetch(
      `https://fleetreeapi.vercel.app/details/${packages}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

<<<<<<< HEAD
const fetchRepoDetails = async (url) => {
  try {
    const [_, owner, repo] = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);

    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;
    console.log(apiUrl);

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching repository details:", error);
    return null;
  }
};

=======
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
const Post = async () => {
  const headersList = headers();
  const completePathname = headersList.get("x-url");

  console.log(completePathname.replaceAll("/packages/", ""));

  let data = null;
<<<<<<< HEAD
  let readMecontent = null;
=======
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c

  try {
    const response = await getPackageDetails(
      completePathname.replaceAll("/packages/", "")
    );
    data = response;
<<<<<<< HEAD
    if (data?.data) {
      const response = await fetchRepoDetails(data?.data?.repositoryUrl);
      readMecontent = marked(atob(response.content));
    }
=======
    console.log(response);
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
  } catch (err) {
    console.error(`error ${err}`);
  }

<<<<<<< HEAD
  return <ToolContent data={data} readMecontent={readMecontent} />;
};
export default Post;

const ToolContent = ({ data, readMecontent }) => {
=======
  return (
    <ToolContent
      date={data?.data?.publishedAgo}
      popularTags={"popularTags"}
      compatibility={data?.data?.compatibility}
      gallery={"gallery"}
      publisher={data?.data?.publisher}
      likes={data?.data?.likes}
      popularity={data?.data?.popularity}
      points={data?.data?.pubPoints}
      meta={data?.data?.metadata}
      license={data?.data?.licenseName}
      licenseLink={data?.data?.licenseLink}
    />
  );
};
export default Post;

const ToolContent = ({
  compatibility,
  gallery,
  popularTags,
  date,
  publisher,
  popularity,
  likes,
  points,
  meta,
  license,
  licenseLink,
}) => {
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
  return (
    <>
      <div className="w-full mx-auto">
        <Container maxWidth="w-full z-10">
          <div className="grid grid-cols-3 lg:grid-cols-12 gap-3 xl:gap-7 max-w-[1320px] mx-auto md:px-0 h-full">
<<<<<<< HEAD
            <div className="col-span-3 border border-gray-300/60 rounded-2xl overflow-hidden lg:col-span-9 flex flex-col gap-3 bg-white lg:h-fit">
=======
            <div className="hidden sticky top-6 h-fit lg:col-span-1 lg:block">
              <LikeButton />
            </div>
            <div className="col-span-3 border border-gray-300/60 rounded-2xl overflow-hidden lg:col-span-8 flex flex-col gap-3 bg-white lg:h-fit">
              <div className="grid gap-3 md:px-0 -mb-4">
                <HeroCardSection
                  featuredImage={
                    "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png"
                  }
                />
              </div>
              <div
                className={`relative mt-1 mb-3 z-20 pt-0 col-span-3 order-2 mx-4 lg:order-1 ${
                  gallery?.length ? "" : ""
                }`}
              ></div>
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
              <div
                className={`order-1 col-span-3 lg:order-3 bg-white p-6 lg:pt-0 lg:pb-12 rounded-2xl flex justify-between`}
              >
                <div className="max-w-[680px] w-full mx-auto">
<<<<<<< HEAD
=======
                  <h2 className="text-2xl font-medium mb-4 tracking-tight">
                    Overview
                  </h2>
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
                  <div className="blog-content toolbox-content">
                    <div
                      style={{
                        color: "#222",
                        fontSize: "18px",
                        lineHeight: "33px",
                      }}
                      className="mt-3 popup-modal-content"
                      dangerouslySetInnerHTML={{
<<<<<<< HEAD
                        __html: marked(readMecontent),
=======
                        __html: "post.attributes.content",
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 h-fit lg:col-span-3 flex flex-col gap-3">
              <div className="p-1 pt-0.5 rounded-2xl h-fit border-gray-300/60">
                <div className="flex flex-row gap-12 mb-4 p-4 rounded-2xl bg-[#f4f4f4]/60">
                  <div className="text-gray-500 text-center">
                    <div className="text-[#0175c2] tracking-tight font-bold">
<<<<<<< HEAD
                      {data?.data?.likes}
=======
                      {likes}
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
                    </div>
                    <h3 className="text-sm tracking-tight">Likes</h3>
                  </div>
                  <div className="text-gray-500 text-center">
                    <div className="text-[#0175c2] tracking-tight font-bold">
<<<<<<< HEAD
                      {data?.data?.pubPoints}
=======
                      {points}
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
                    </div>
                    <h3 className="text-sm tracking-tight">Points</h3>
                  </div>
                  <div className="text-gray-500 text-center">
                    <div className="text-[#0175c2] tracking-tight font-bold">
<<<<<<< HEAD
                      {`${data?.data?.popularity}%`}
=======
                      {`${popularity}%`}
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
                    </div>
                    <h3 className="text-sm tracking-tight">Popularity</h3>
                  </div>
                </div>
                <div className="order-1 p-4 mb-4 rounded-2xl bg-[#f4f4f4]/60">
                  <AuthorCard
                    title={"Publisher"}
<<<<<<< HEAD
                    value={data?.data?.publisher}
                    link={`https://pub.dev/publishers/${data?.data?.publisher}`}
=======
                    value={publisher}
                    link={`https://pub.dev/publishers/${publisher}`}
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
                  />
                </div>
                <div className="flex flex-col gap-4 my-4 p-4 rounded-2xl bg-[#f4f4f4]/60">
                  <div className="text-gray-500">
                    <h3 className="text-sm tracking-tight">Published</h3>
                    <div className="text-gray-800 tracking-tight font-medium">
<<<<<<< HEAD
                      {data?.data?.publishedAgo}
=======
                      {date}
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
                    </div>
                  </div>
                  <div className="text-gray-500 mt-1">
                    <h3 className="text-sm tracking-tight">Compatibility</h3>
                    <div className="text-gray-800 tracking-tight font-medium">
<<<<<<< HEAD
                      {data?.data?.compatibility}
=======
                      {compatibility}
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
                    </div>
                  </div>
                </div>
                <div className="order-1 p-4 mb-4 rounded-2xl bg-[#f4f4f4]/60">
<<<<<<< HEAD
                  <AuthorCard
                    title={"Meta Data"}
                    value={data?.data?.metadata}
                  />
=======
                  <AuthorCard title={"Meta Data"} value={meta} />
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
                </div>
                <div className="order-1 p-4 mb-4 rounded-2xl bg-[#f4f4f4]/60">
                  <AuthorCard
                    title={"License"}
<<<<<<< HEAD
                    value={data?.data?.licenseName}
                    link={`https://pub.dev${data?.data?.licenseLink}`}
                  />
                </div>
              </div>
=======
                    value={license}
                    link={`https://pub.dev${licenseLink}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-5 p-3 relative rounded-2xl">
                  <div className="z-10 col-span-5 xl:col-span-5 relative">
                    <h3 className="font-bold drop-shadow-sm text-lg tracking-[-0.018em] text-gray-800">
                      Get weekly handpicked tools
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Join the 1000s who receive curated products from Graeme @
                      Prototypr.
                    </p>
                  </div>

                  <div className="col-span-12 relative z-10"></div>
                </div>
              </div>
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
            </div>
          </div>
        </Container>
      </div>
      <br />
      <br />

      <Container maxWidth="w-full pb-16 bg-[#fefefe] relative z-10 pt-0">
        <div className="max-w-[1320px] pt-0 -mt-8 mb-8 mx-auto h-full">
          <div className="mb-20">
            <NewsletterSection
              padding={false}
              title="Get the best tools every week"
            />
          </div>

          <div className="mt-2">
            <h2 className="text-lg mb-4 font-semibold tracking-tight">
              Popular topics
            </h2>
<<<<<<< HEAD
            <PopularTagsSection />
=======
            <PopularTagsSection popularTags={popularTags} />
>>>>>>> b68b9a9ecbb9d1d6a255dad4f8b71fc0c2c8893c
          </div>
        </div>
      </Container>

      <StickyFooterCTA
        title="Welcome to Prototypr"
        description="Join today to make posts and grow with us."
      />
    </>
  );
};
