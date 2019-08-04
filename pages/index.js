import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout title="Home">
    <h3>Starter Page</h3>
    <Link href="/about">
      <a>Go to about</a>
    </Link>
  </Layout>
);

export default Index;
