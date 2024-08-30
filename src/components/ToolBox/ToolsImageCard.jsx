import Link from "next/link";
import { sql } from "@vercel/postgres";

const ToolImageCard = async () => {
  const { rows } = await sql`
    SELECT * FROM packages 
    ORDER BY 
        (scores->>'popularity')::int DESC,
        (scores->>'pubPoints')::int DESC,
        (scores->>'likes')::int DESC
    LIMIT 30`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full flex-wrap">
      {rows.map((post, i) => {
        const { name, link, compatibility, description } = post;

        return (
          <div key={i}>
            <Link
              href={`/packages/${link.replaceAll(
                "https://pub.dev/packages/",
                ""
              )}`}
            >
              <div className="flex flex-col pt-3 pb-1 grid grid-col-1 gap-4 flex-grow h-full rounded-t-2xl shadow-sm hover:shadow-xl border border-gray-300/60 transition transition-all duration-400 hover:scale-[1.02] group bg-white relative rounded-2xl fade-">
                <div className="px-[18px] mb-3 mt-3 flex">
                  <div className="pl-2 overflow-hidden my-auto">
                    <div className="text-xl line-clamp-1 tracking-tight font-medium">
                      {name}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5 capitalize">
                      {compatibility}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5 capitalize">
                      {description}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ToolImageCard;
