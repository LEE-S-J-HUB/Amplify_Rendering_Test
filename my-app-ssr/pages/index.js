function Home({ message }) {
  return <div>{message}</div>;
}

export async function getServerSideProps() {
  return {
    props: {
      message: 'Hello Next',
    },
  };
}

export default Home;

