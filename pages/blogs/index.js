import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://127.0.0.1:1337/api/blogs');
    const data = response.data.data;

    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }
}

//no

export default function Blogs({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mi Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Bienvenido a nuestro Blog
        </h1>
        <ul>
        {
            data.map(({id, attributes})=>(
              <li key={id}>{id} - {attributes.title}</li>
            ))
          }
        </ul>
        </main>
    </div>
  );
}
