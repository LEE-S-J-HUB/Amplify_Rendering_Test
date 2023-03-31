function Home({ message }) {
  return <div>{message}</div>;
}

export async function getStaticProps() {
  return {
    props: {
      message: 'Hello Next',
    },
  };
}

export default Home;

