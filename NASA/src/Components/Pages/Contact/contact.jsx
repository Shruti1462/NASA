const Contact = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Contact Us</h1>
        <p style={styles.text}>Reach out to us at: contact@nasa-game.com</p>
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
  
  export default Contact;
  