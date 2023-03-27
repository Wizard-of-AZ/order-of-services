import ActionButton from '../components/ActionButton';
import config from '../config/_about.json';

export default function MembersOnly() {
  const styles = {
    image: {
      height: '50vh',
      margin: '0 auto',
      padding: 16
    },
    text: {
      textAlign: 'center',
      fontWeight: '800',
      padding: 8
    },
    scheduleBtn: {
      paddingTop: 32,
      margin: '0 auto'
    }
  };

  return (
    <div style={styles.container}>
      <img style={styles.image} src="/images/church-logo.png" />
      <div style={styles.text}>
        <h2>The Dana Ranch Ward order of services is distributed weekly to ward members, and is accessible via email link only. Please check your email inbox or contact a member of the Bishopric for assistance.</h2>
      </div>
      <div style={styles.scheduleBtn}>
        <ActionButton link={config.scheduleLink} text="Schedule With Bishop" />
      </div>
    </div>
  );
}