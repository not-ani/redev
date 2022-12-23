import {
  GridItem,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { Formik, useFormik } from "formik";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

const Profile = () => {
  const { data: sessionData } = useSession();
  if (!sessionData || !sessionData.user) {
    return <div>Please Login to see this content</div>;
  }
  const formik = useFormik({
    initialValues: {
      image: String(sessionData.user?.image),
      name: String(sessionData?.user?.name),

    },

    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <>
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Box width={400}></Box>

      </Flex>
    </>
  );
};

export default Profile;
