import Heading from '../components/Heading';
import Input from '../components/Input';

const GenerateQR = () => {
  return (
    <div className="h-screen bg-[url(/qa-bg-small.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex h-full flex-col items-center">
        <Heading /> <Input />
      </div>
    </div>
  );
};

export default GenerateQR;
