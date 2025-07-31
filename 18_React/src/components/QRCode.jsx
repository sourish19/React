import { useContext } from 'react';
import Heading from './Heading';
import { urlContext } from '../context/urlContext';

const QRCode = () => {
  const { qrData } = useContext(urlContext);
  console.log('qrdata', qrData);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        {' '}
        <Heading />
        <div>
          <img
            src={
              qrData
                ? qrData
                : 'Loading...'
            }
            alt="QRCODE"
          />
        </div>
      </div>
    </>
  );
};

export default QRCode;
