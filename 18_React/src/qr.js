import QRCode from 'qrcode';

const generateQRCode = async (url = 'hello') => {
  try {
    console.log(await QRCode.toDataURL(url));
  } catch (err) {
    console.error(err);
  }
};

export default generateQRCode;
