import { useNavigate, useRouteError } from "react-router";

export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="p-4">
      <h1>Something went wrong 😢</h1>
      <p>{error?.statusText || error?.message || "Unknown error"}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}
