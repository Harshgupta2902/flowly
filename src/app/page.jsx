"use client";
import dynamic from "next/dynamic";
import Container from "@/components/Common/Container";
import ToolImageCard from "@/components/ToolBox/ToolsImageCard";
import ToolBoxHeroWithSignup from "@/components/ToolBox/ToolboxHeroWithEmailSignup";
const StickyFooterCTA = dynamic(
  () => import("@/components/Footer/StickyFooterCTA"),
  {
    ssr: false,
  }
);

const NewPagination = dynamic(() => import("@/components/ToolBox/pagination"));
const FilterCategory = dynamic(() =>
  import("@/components/ToolBox/FilterCategory")
);

const ToolboxIndexPage = ({
  title,
  pagination,
  urlRoot,
  pageSize,
  currentSlug,
  paginationRoot,
}) => {
  return (
    <>
      <ToolBoxHeroWithSignup />

      <Container
        padding={false}
        maxWidth="max-w-[1320px] px-6 mx-auto xl:px-3 grid grid-cols-12"
      >
        <Sidebar
          title={title}
          paginationRoot={paginationRoot}
          urlRoot={urlRoot}
          slug={currentSlug}
        />
        <div
          className={`w-full px-0 ${
            title == "All tools" && pagination?.page == 1
              ? ""
              : "-mt-28 lg:-mt-20"
          } pl-0 md:pl-8 mx-auto pb-20 gap-2 col-span-12 md:col-span-10 pb-10`}
        >
          <ToolImageCard />

          <NewPagination
            total={pagination?.total}
            pageSize={pageSize}
            currentPage={pagination?.page}
          />
        </div>
      </Container>
      <StickyFooterCTA
        buttonText={""}
        title="Welcome to Prototypr"
        description="Join today to make posts and grow with us."
      />
    </>
  );
};

export default ToolboxIndexPage;

const Sidebar = ({ paginationRoot, urlRoot, slug, title }) => {
  return (
    <div
      className={`${
        title !== "All tools" ? "mt-6" : ""
      } hidden md:block h-[fit-content] relative col-span-2 rounded-3xl`}
    >
      <div className="w-full min-h-screen flex flex-col">
        <FilterCategory
          urlRoot={urlRoot}
          paginationRoot={paginationRoot}
          key={"uxtools_item_"}
          slug={slug}
        />
      </div>
    </div>
  );
};
