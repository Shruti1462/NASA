const About = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>About NASA Game</h1>
        <p style={styles.text}>This game is designed to engage users in learning about space through interactive experiences.</p>
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
  
  export default About;