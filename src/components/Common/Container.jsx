export default function Container({
  children,
  padding,
  maxWidth = "max-w-[1440px]",
}) {
  return (
    <div
      className={`${maxWidth} ${
        padding == false ? "" : "mx-auto px-3 md:px-3"
      }`}
    >
      {children}
    </div>
  );
}
