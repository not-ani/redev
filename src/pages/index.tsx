import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Redev</title>
        <meta name="description" content="Learn how to code with practical realworld application " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </>
  );
};

export default Home;

