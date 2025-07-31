import { Plus, Minus } from "lucide-react";

const SmallScreenCart = ({ item, price }) => {
  return (
    <div className="flex flex-col px-3 py-4 gap-2 w-9/12 mx-auto bg-stone-200 rounded-2xl h-80">
      <img className="rounded-xl h-30 object-contain" src={item} alt="" />
      <div className="flex flex-col mt-5 gap-5 justify-between">
        <span className="text-lg font-bold text-gray-700">Price: {price}</span>
        <div className="flex items-center gap-6">
          <label className="text-lg font-bold text-gray-700">Quantity:</label>
          <div className="flex items-center border border-neutral-800 rounded-md overflow-hidden">
            <button className="px-3 py-1.5 border-r border-neutral-800 hover:bg-neutral-100">
              <Minus />
            </button>
            <span className="px-4 text-sm font-medium">0</span>
            <button className="px-3 py-1.5 border-l border-neutral-800 hover:bg-neutral-100">
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MediumScreenCart = () => {
  return (
    <div className="hidden md:grid md:grid-cols-12 md:gap-12 border-b border-neutral-400 px-2 py-3 text-center">
      <div className="col-span-5">
        <span className="text-xl text-neutral-700 font-semibold">Items</span>
      </div>
      <div className="col-span-2">
        <span className="text-xl text-neutral-700 font-semibold">Price</span>
      </div>
      <div className="col-span-3">
        <span className="text-xl text-neutral-700 font-semibold">Quantity</span>
      </div>
      <div className="col-span-2">
        <span className="text-xl text-neutral-700 font-semibold">Total</span>
      </div>
    </div>
  );
};

const MediumScreenCartItems = ({ item, price }) => {
  return (
    <div className="hidden md:grid md:grid-cols-12 md:items-center border-b border-neutral-300 px-2 py-3">
      <div className="col-span-5 flex items-center gap-4">
        <img className="h-16 w-20 object-contain rounded" src={item} alt="" />
        <span className="text-md font-medium text-gray-700">{item}</span>
      </div>
      <div className="col-span-2 text-md font-semibold text-gray-700 text-center">
        {price}
      </div>
      <div className="col-span-3">
        <div className="flex items-center border  border-neutral-800 rounded-md w-fit">
          <button className="px-3 py-1.5 border-r border-neutral-800 hover:bg-neutral-100">
            <Minus />
          </button>
          <span className="px-4 text-sm font-medium">0</span>
          <button className="px-3 py-1.5 border-l border-neutral-800 hover:bg-neutral-100">
            <Plus />
          </button>
        </div>
      </div>
      <div className="col-span-2 text-md font-semibold text-gray-700 text-center">
        $0.00
      </div>
    </div>
  );
};

const Cart = ({
  items = [
    { item: "keyboard.jpg", price: "$469" },
    { item: "mouse.jpg", price: "$199" },
    { item: "Tshirt.jpg", price: "$99" },
  ],
}) => {
  return (
    <>
      <div className="hidden md:flex md:gap-2 md:flex-col w-10/12 mx-auto mb-5">
        <MediumScreenCart />
        {items.map((e, i) => (
          <MediumScreenCartItems key={i} item={e.item} price={e.price} />
        ))}
      </div>
      <div className="flex flex-col gap-5 mb-5 md:hidden">
        {items.map((e, i) => (
          <SmallScreenCart key={i} item={e.item} price={e.price} />
        ))}
      </div>
    </>
  );
};

export default Cart;
