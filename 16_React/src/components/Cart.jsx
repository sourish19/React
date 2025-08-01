import { Plus, Minus } from "lucide-react";
import { useRef, useState, forwardRef } from "react";

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

const SmallScreenCart = forwardRef(({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  total,
  item,
  itemImg,
  price,
}, ref) => {
  return (
    <div className="flex flex-col px-3 py-4 gap-2 w-9/12 mx-auto bg-stone-200 rounded-2xl h-80">
      <img className="rounded-xl h-30 object-contain" src={itemImg} alt="" />
      <div className="flex flex-col mt-5 gap-5 justify-between">
        <div className="text-lg font-bold text-gray-700">{item}</div>
        <span className="text-lg font-bold text-gray-700">
          Price: <span ref={ref}>{price}</span>
        </span>
        <div className="flex items-center gap-6">
          <label className="text-lg font-bold text-gray-700">Quantity:</label>
          <div className="flex items-center border border-neutral-800 rounded-md overflow-hidden">
            <button onClick={decreaseQuantity} className="px-3 py-1.5 border-r border-neutral-800 hover:bg-neutral-100">
              <Minus />
            </button>
            <span className="px-4 text-sm font-medium">{quantity}</span>
            <button onClick={increaseQuantity} className="px-3 py-1.5 border-l border-neutral-800 hover:bg-neutral-100">
              <Plus />
            </button>
          </div>
          <div>Total: ${total}</div>
        </div>
      </div>
    </div>
  );
});

const MediumScreenCartItems = forwardRef(({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  total,
  item,
  itemImg,
  price,
}, ref) => {
  return (
    <div className="hidden md:grid md:grid-cols-12 md:items-center border-b border-neutral-300 px-2 py-3">
      <div className="col-span-5 flex items-center gap-4">
        <img className="h-16 w-20 object-contain rounded" src={itemImg} alt="" />
        <span className="text-md font-medium text-gray-700">{item}</span>
      </div>
      <div className="col-span-2 text-md font-semibold text-gray-700 text-center">
        <span ref={ref}>{price}</span>
      </div>
      <div className="col-span-3">
        <div className="flex items-center border border-neutral-800 rounded-md w-fit">
          <button onClick={decreaseQuantity} className="px-3 py-1.5 border-r border-neutral-800 hover:bg-neutral-100">
            <Minus />
          </button>
          <span className="px-4 text-sm font-medium">{quantity}</span>
          <button onClick={increaseQuantity} className="px-3 py-1.5 border-l border-neutral-800 hover:bg-neutral-100">
            <Plus />
          </button>
        </div>
      </div>
      <div className="col-span-2 text-md font-semibold text-gray-700 text-center">
        ${total}
      </div>
    </div>
  );
});

const Cart = ({
  items = [
    { item: "keyboard", itemImg: "keyboard.jpg", price: "$469", itemKey: "0" },
    { item: "mouse", itemImg: "mouse.jpg", price: "$199", itemKey: "1" },
    { item: "Tshirt", itemImg: "Tshirt.jpg", price: "$99", itemKey: "2" },
  ],
}) => {
  const [quantities, setQuantities] = useState(Array(items.length).fill(0));
  const [totals, setTotals] = useState(Array(items.length).fill(0));
  const [totalPrice, setTotalPrice] = useState(0);

  const itemRefs = useRef([]);

  const parsePrice = (priceStr) => parseFloat(priceStr.replace("$", "")) || 0;

  const increaseQuantity = (index) => {
    const unitPrice = parsePrice(items[index].price);
    const newQuantities = [...quantities];
    const newTotals = [...totals];

    newQuantities[index]++;
    newTotals[index] = newQuantities[index] * unitPrice;

    setQuantities(newQuantities);
    setTotals(newTotals);
    setTotalPrice(newTotals.reduce((acc, val) => acc + val, 0));
  };

  const decreaseQuantity = (index) => {
    if (quantities[index] === 0) return;
    const unitPrice = parsePrice(items[index].price);
    const newQuantities = [...quantities];
    const newTotals = [...totals];

    newQuantities[index]--;
    newTotals[index] = newQuantities[index] * unitPrice;

    setQuantities(newQuantities);
    setTotals(newTotals);
    setTotalPrice(newTotals.reduce((acc, val) => acc + val, 0));
  };

  return (
    <>
      <div className="hidden md:flex md:gap-2 md:flex-col w-10/12 mx-auto mb-5">
        <MediumScreenCart />
        {items.map((e, i) => (
          <MediumScreenCartItems
            key={e.itemKey}
            item={e.item}
            itemImg={e.itemImg}
            price={e.price}
            quantity={quantities[i]}
            total={totals[i]}
            increaseQuantity={() => increaseQuantity(i)}
            decreaseQuantity={() => decreaseQuantity(i)}
            ref={(el) => (itemRefs.current[i] = el)}
          />
        ))}
      </div>
      <div className="flex flex-col gap-5 mb-5 md:hidden">
        {items.map((e, i) => (
          <SmallScreenCart
            key={e.itemKey}
            item={e.item}
            itemImg={e.itemImg}
            price={e.price}
            quantity={quantities[i]}
            total={totals[i]}
            increaseQuantity={() => increaseQuantity(i)}
            decreaseQuantity={() => decreaseQuantity(i)}
            ref={(el) => (itemRefs.current[i] = el)}
          />
        ))}
      </div>
      <div className="text-center text-xl font-bold text-gray-800 mt-4">
        Grand Total: ${totalPrice}
      </div>
    </>
  );
};

export default Cart;
