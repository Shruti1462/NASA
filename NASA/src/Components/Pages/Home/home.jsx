const Home = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Welcome to NASA Game</h1>
        <p style={styles.text}>Explore space with fun and interactive games!</p>
      </div>
    );
  };
  
  const styles = {
    container: {
      padding: '20px',
      color: 'white',
    },
    header: {
      color: 'turquoise',
    },
    text: {
      color: 'white',
    }
  };
  
  export default Home;
  