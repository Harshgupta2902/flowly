import Link from "next/link";
import { Tag } from "@/components/Common/Icons";

const popularTags = [
  { title: "Tag 1", description: "Description for Tag 1" },
  { title: "Tag 2", description: "Description for Tag 2" },
  { title: "Tag 3", description: "Description for Tag 3" },
  { title: "Tag 4", description: "Description for Tag 4" },
  { title: "Tag 5", description: "Description for Tag 5" },
  { title: "Tag 6", description: "Description for Tag 6" },
  { title: "Tag 7", description: "Description for Tag 7" },
  { title: "Tag 8", description: "Description for Tag 8" },
];

const PopularTagsSection = () => {
  return (
    <div className="rounded-xl grid grid-cols-1 gap-y-6 gap-x-6 md:gap-y-8 md:gap-x-8 sm:grid-cols-2 xl:grid-cols-4">
      {popularTags.map((topic, i) => (
        <CategoriesIconCard withBackground={true} key={i} index={i} />
      ))}
    </div>
  );
};

export default PopularTagsSection;

const CategoriesIconCard = ({ withBackground, showCount }) => {
  return (
    <div>
      <Link href={`/topic/page/1`} className="flex">
        <div
          className={`${
            withBackground ? "bg-white rounded-xl p-4" : ""
          } shadow-sm border border-gray-200/70 border-1 w-full h-auto rounded-xl cursor-pointer flex flex-col`}
        >
          <div className="flex flex-row justify-between rounded-xl">
            <div className="flex flex-col pl-1 justify-center">
              <div className="capitalize overflow-hidden line-clamp-1 inline font-medium py-0 mb-0.5  text-base tracking-tight">
                {"topic?.name"}
              </div>
            </div>
            <div className="w-12 h-12 bg-gray-100/90 p-3 my-auto relative rounded-full  overflow-hidden">
              <img
                className="w-full h-full"
                src={
                  "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png"
                }
              />
              :
              <Tag
                weight="fill"
                className="my-auto mr-3 opacity-20"
                size={24}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
