import Layout from "../components/Layout";

export default ({ statusCode }) => (
  <Layout title="This is a broken Link!!!">
    {statusCode}
    <p>could not get this page, sorry</p>
  </Layout>
);
