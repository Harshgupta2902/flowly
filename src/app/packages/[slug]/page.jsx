"use server";

require("dotenv").config();
import dynamic from "next/dynamic";
import Container from "@/components/Common/Container";
const StickyFooterCTA = dynamic(
  () => import("@/components/Footer/StickyFooterCTA"),
  {
    ssr: false,
  }
);
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import PopularTagsSection from "@/components/newsletter/PopularTagsSection";
import AuthorCard from "@/components/details/AuthorCard";
import { headers } from "next/headers";
import { marked } from "marked";

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

const Post = async () => {
  const headersList = headers();
  const completePathname = headersList.get("x-url");

  console.log(completePathname.replaceAll("/packages/", ""));

  let data = null;
  let readMecontent = null;

  try {
    const response = await getPackageDetails(
      completePathname.replaceAll("/packages/", "")
    );
    data = response;
    if (data?.data) {
      const response = await fetchRepoDetails(data?.data?.repositoryUrl);
      readMecontent = marked(atob(response.content));
    }
  } catch (err) {
    console.error(`error ${err}`);
  }

  return <ToolContent data={data} readMecontent={readMecontent} />;
};
export default Post;

const ToolContent = ({ data, readMecontent }) => {
  return (
    <>
      <div className="w-full mx-auto">
        <Container maxWidth="w-full z-10">
          <div className="grid grid-cols-3 lg:grid-cols-12 gap-3 xl:gap-7 max-w-[1320px] mx-auto md:px-0 h-full">
            <div className="col-span-3 overflow-hidden lg:col-span-9 flex flex-col gap-3 bg-white lg:h-fit">
              <div className={`order-1 col-span-3 lg:order-3 bg-white p-6 lg:pt-0 lg:pb-12 rounded-2xl flex justify-between`}>
                <div
                  className="tab-content detail-tab-readme-content -active markdown-body"
                  dangerouslySetInnerHTML={{ __html: marked(readMecontent) }}
                />
              </div>
            </div>
            <div className="col-span-3 h-fit lg:col-span-3 flex flex-col gap-3">
              <div className="p-1 pt-0.5 rounded-2xl h-fit border-gray-300/60">
                <div className="flex flex-row gap-12 mb-4 p-4 rounded-2xl bg-[#f4f4f4]/60">
                  <div className="text-gray-500 text-center">
                    <div className="text-[#0175c2] tracking-tight font-bold">
                      {data?.data?.likes}
                    </div>
                    <h3 className="text-sm tracking-tight">Likes</h3>
                  </div>
                  <div className="text-gray-500 text-center">
                    <div className="text-[#0175c2] tracking-tight font-bold">
                      {data?.data?.pubPoints}
                    </div>
                    <h3 className="text-sm tracking-tight">Points</h3>
                  </div>
                  <div className="text-gray-500 text-center">
                    <div className="text-[#0175c2] tracking-tight font-bold">
                      {`${data?.data?.popularity}%`}
                    </div>
                    <h3 className="text-sm tracking-tight">Popularity</h3>
                  </div>
                </div>
                <div className="order-1 p-4 mb-4 rounded-2xl bg-[#f4f4f4]/60">
                  <AuthorCard
                    title={"Publisher"}
                    value={data?.data?.publisher}
                    link={`https://pub.dev/publishers/${data?.data?.publisher}`}
                  />
                </div>
                <div className="flex flex-col gap-4 my-4 p-4 rounded-2xl bg-[#f4f4f4]/60">
                  <div className="text-gray-500">
                    <h3 className="text-sm tracking-tight">Published</h3>
                    <div className="text-gray-800 tracking-tight font-medium">
                      {data?.data?.publishedAgo}
                    </div>
                  </div>
                  <div className="text-gray-500 mt-1">
                    <h3 className="text-sm tracking-tight">Compatibility</h3>
                    <div className="text-gray-800 tracking-tight font-medium">
                      {data?.data?.compatibility}
                    </div>
                  </div>
                </div>
                <div className="order-1 p-4 mb-4 rounded-2xl bg-[#f4f4f4]/60">
                  <AuthorCard
                    title={"Meta Data"}
                    value={data?.data?.metadata}
                  />
                </div>
                <div className="order-1 p-4 mb-4 rounded-2xl bg-[#f4f4f4]/60">
                  <AuthorCard
                    title={"License"}
                    value={data?.data?.licenseName}
                    link={`https://pub.dev${data?.data?.licenseLink}`}
                  />
                </div>
              </div>
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
            <PopularTagsSection />
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
