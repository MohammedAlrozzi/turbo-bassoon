import styles from '../styles/Home.module.css';
export default function Home() {
	const callAPI = async () => {
  try {
    const token = 'api-key';

    const res = await fetch(
      `https://api.toshl.com/me`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
return (
		<div className={styles.container}>
			<main className={styles.main}>
				<button onClick={callAPI}>Make API Call</button>
			</main>
		</div>
	);
}
