import React from "react";
// import axios from "axios";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Ikon from "./components/pages/Ikon";
import Epic from "./components/pages/Epic";
import Weather from "./components/pages/Weather";
import ErrorPage from "./components/pages/ErrorPage";
import "font-awesome/css/font-awesome.min.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/ikon-mountains",
    element: <Ikon />,
  },
  {
    path: "/epic-mountains",
    element: <Epic />,
  },
  {
    // change to /mountainName/weather
    path: "/weather/:mountainName",
    element: <Weather />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  // const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/message")
  //     .then((response) => {
  //       response.json();
  //     })
  //     .then((data) => setMessage(data.message))
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setError("An error occurred while fetching data.");
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (error) {
  //   return <h1>{error}</h1>;
  // }

  return (
    <ApolloProvider client={client}>
      <div>
        <RouterProvider router={router} />
        <Outlet />
        {/* {message} */}
      </div>
    </ApolloProvider>
  );
}

export default App;
