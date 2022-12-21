import { NextPage } from "next";
import Head from "next/head";

const Page404: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <h1>404 - Página não encontrada</h1>
    </div>
  );
};

export default Page404;