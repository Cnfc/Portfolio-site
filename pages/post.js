import Layout from "../components/Layout";

const Post = ({ url }) => (
  <Layout title={url.query.title}>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam itaque
      reprehenderit pariatur soluta voluptatem nihil et eveniet voluptatibus!
      Dolorem illo voluptas eos facere odio perferendis non eum dolor sit rerum,
      deserunt reprehenderit omnis dicta earum aperiam asperiores alias sequi
      sint?
    </p>
  </Layout>
);
export default Post;
