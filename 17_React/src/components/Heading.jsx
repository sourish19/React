const Heading = ({ heading }) => {
  return (
    <div className="text-slate-300 text-2xl font-semibold text-center pb-2 flex justify-center w-full mt-20">
      <span>{heading}</span>
    </div>
  );
};

export default Heading;
