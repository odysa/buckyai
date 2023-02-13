import { Chat } from "../components/Chat";
import Layout from "@/components/Layout";
import { Intro } from "@/components/Intro";
import Head from "next/head";

function Home() {
  return (
    <Layout>
      <Head>
        <title>Bucky AI</title>
      </Head>
      <Intro />
      <Chat />
    </Layout>
  );
}

export default Home;
