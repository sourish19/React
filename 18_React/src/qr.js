import QRCode from 'qrcode';

const generateQRCode = async (url) => {
  try {
    const qr = await QRCode.toDataURL(url);
    console.log(qr);
    return qr;
  } catch (err) {
    console.error(err);
  }
};

export default generateQRCode;
