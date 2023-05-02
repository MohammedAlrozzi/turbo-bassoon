import styles from '../styles/Home.module.css';
export default function Home() {
	const callAPI = async () => {
  try {
    const token = '0ef4f134-3396-4cda-aa85-5e5aebc4fc0f265b465f-0a98-43f2-b0d6-7df4e233465a';

    const res = await fetch(
      `https://api.toshl.com/me`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
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
