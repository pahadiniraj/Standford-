interface logo {
  color?: string;
}
const BrandLogo = ({ color }: logo) => {
  return (
    <h1 className="md:text-3xl text-2xl font-bold text-black flex flex-col">
      <span className={`text-${color}`}> Stanford </span>
      <span className="text-amber-500">International</span>
    </h1>
  );
};

export default BrandLogo;
