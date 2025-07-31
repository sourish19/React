import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import generateQRCode from '../qr.js';
import Button from './Button';
import { urlContext } from '../context/urlContext.jsx';

const Input = () => {
  const [userURL, setUserURL] = useState();
  console.log(urlContext);

  const { qrData, setQrData } = useContext(urlContext);

  let navigate = useNavigate();
  const handleClick = async () => {
    const url = await generateQRCode(userURL);
    setQrData(url);
    const path = '/getqrcode';
    navigate(path);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    if (!val.trim()) return;
    setUserURL(val);
  };

  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-xl items-center justify-between overflow-hidden rounded-2xl border-2 border-blue-600 bg-black px-2 sm:px-4">
        <input
          onChange={handleChange}
          className="flex-1 bg-transparent px-2 py-4 text-white outline-none placeholder:text-white"
          type="text"
          placeholder="Enter a URL"
        />
        <Button handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Input;
