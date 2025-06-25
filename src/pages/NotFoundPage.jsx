import { isRouteErrorResponse, useRouteError } from "react-router";

const NotFoundPage = () => {
  const error = useRouteError();

  let title = "Unexpected Error";
  let message = "Something went wrong.";

  // If it's a standard route error (like 404, 500), customize message
  if (isRouteErrorResponse(error)) {
    title = `Error ${error.status}`;
    message = error.statusText || "An error occurred.";
    console.log(error);
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}
export default NotFoundPage