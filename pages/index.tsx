import { Chat } from "../components/Chat";
import Layout from "@/components/Layout";
import { Intro } from "@/components/Intro";
function Home() {
  return (
    <Layout>
      <Intro />
      <Chat />
    </Layout>
  );
}

export default Home;
