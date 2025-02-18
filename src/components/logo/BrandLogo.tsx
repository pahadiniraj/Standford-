import { useRouter } from "next/navigation";

interface logo {
  color?: string;
}
const BrandLogo = ({ color }: logo) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/")}>
      <h1 className="text-2xl lg:text-3xl  justify-start items-start font-bold  flex flex-col">
        <span className={`text-${color}`}> Stanford </span>
        <span className="text-amber-500">International</span>
      </h1>
    </button>
  );
};

export default BrandLogo;
