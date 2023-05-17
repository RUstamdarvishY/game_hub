import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "./NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
    <NavBar/>
    <Box paddingX={5}>
      <Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "this page doesn't exist"
            : "unexpected error"}
        </Text>
      </Heading>
    </Box>
    </>
  );
};

export default ErrorPage;
