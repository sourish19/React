import useApi from "../../hooks/useApi.js";

const Github = () => {
  const { response, loading, error } = useApi("sourish19");

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error occured</div>
      ) : (
        <div className="text-gray-50 bg-gray-700 text-center text-2xl py-3">
            <img className="h-20 w-20 rounded-full" src={response.avatar_url} alt="" />
            <span>Github: {response.followers}</span></div>
      )}
    </>
  );
};

export default Github;
