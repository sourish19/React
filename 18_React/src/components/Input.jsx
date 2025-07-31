import Button from './Button';

const Input = () => {
  return (
    <div className="relative w-full">
      <div className="mx-auto w-11/12">
        <input
          className="w-full rounded-2xl border-2 border-blue-600 bg-black px-3 py-4 text-white outline-none placeholder:text-white"
          type="text"
          placeholder="Enter a URL"
        />
      </div>
      <Button />
    </div>
  );
};

export default Input;
