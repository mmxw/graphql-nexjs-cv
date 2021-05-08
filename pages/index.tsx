import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const CVQuery = gql`
  query xuan {
    bio {
      name
      email
      linkedin
      twitter
      tagline
    }
    position(id: "1") {
      title
      company
      startDate
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(CVQuery);

  if (loading) {
    return (
      <header>
        <h1>xuan wang</h1>
        <h2>loading...</h2>
      </header>
    );
  }

  const { bio, position } = data;

  return (
    <div className={styles.container}>
      <Head>
        <title>Hi~ya~</title>
        <meta name="description" content="learning by building" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>{bio.name}</h1>

        <p className={styles.description}>
          <code className={styles.code}>my dabble with graphql & nextjs</code>
        </p>
      </header>
      <main>
        <section className={styles.card}>
          <h2>contact</h2>
          <p>email: {bio.email}</p>
          <p>linkedin: {bio.linkedin}</p>
        </section>
        <section className={styles.card}>
          <h2>experience</h2>
          <p>
            {position.company} {position.startDate} - present{" "}
          </p>
          <p>{position.title}</p>
        </section>
        <section className={styles.card}>
          <h2>gql query for this page</h2>
          <figure>
            <pre>
              <code>
                {`
            query xuan {
              bio {
                name
                email 
                linkedin
                twitter
                tagline
              }
              position(id: "1") {
                title
                company
                startDate
              }
            }
            `}
              </code>
            </pre>
          </figure>
        </section>
      </main>
    </div>
  );
}
