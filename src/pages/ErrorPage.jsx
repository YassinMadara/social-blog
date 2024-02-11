import { Link, Navigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  if (error.request.status === 500) return <Navigate to="/" />;
  if (error.request.status === 404) return <Navigate to="/" />;
  return (
    <>
      <h2>
        Error - Something went wrong - Go {}
        <Link className="btn" to={"/"}>
          Home
        </Link>
      </h2>
      {import.meta.env.MODE === "development" ? (
        <>
          <pre>{error.message}</pre>
          <pre>{error.response.data}</pre>
          <pre>{error.stack}</pre>
        </>
      ) : undefined}
    </>
  );
}
