import Link from "next/link";

export default function AuthorCard({ title, link, value }) {
  return (
    <div className="md:mb-0 block md:block rounded-lg">
      {link ? (
        <Link href={link}>
          <div className={`my-auto w-3/5`}>
            <p tabIndex={0} className="text-base text-gray-500">
              {title}
            </p>
            <h1 className="text-base mt-2 text-[#0175c2]">{value}</h1>
          </div>
        </Link>
      ) : (
        <div className={`my-auto`}>
          <p tabIndex={0} className="text-base text-gray-500">
            {title}
          </p>
          <h1 className="text-base mt-2 ">{value}</h1>
        </div>
      )}
    </div>
  );
}
