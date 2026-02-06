export default function BangladeshIcon({ size = "6" }) {
  const sizeMap = {
    4: "w-4 h-4",
    6: "w-6 h-6",
    8: "w-8 h-8",
    10: "w-10 h-10",
    12: "w-12 h-12",
  };

  const sizeClass = sizeMap[size] || "w-6 h-6";

  return <span className={`fi fi-bd ${sizeClass}`}></span>;
}
