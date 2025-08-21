import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  return <div className="text-gray-50 bg-gray-700 text-center text-2xl py-3">User: {params.userId}</div>;
};

export default User;
