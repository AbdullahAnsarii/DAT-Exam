import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import ContactCards from '../sections/ContactCards';
import Hero from '../sections/Hero';
import Menu from '../sections/Menu';
import SignUp from '../sections/SignUp';
import { ContactsInterface } from '../interfaces/ContactCards';
import { CategoriesInterface } from '../interfaces/Menu';
import styles from '../styles/Home.module.scss';

export const getStaticProps: GetStaticProps = async () => {
  let contacts = null;
  let categories = null;

  await fetch('http://54.169.31.224:3000/contact')
    .then(async (res) => {
      contacts = await res.json();
    })
    .catch((error) => {
      console.log(error.code, 'err')
    });
  await fetch('http://54.169.31.224:3000/category')
    .then(async (res) => {
      categories = await res.json();
    })
    .catch((error) => {
      console.log(error.code, 'err')
    });

  return {
    props: {
      contacts,
      categories
    }
  }
}

const Home: NextPage<{ contacts: ContactsInterface, categories: CategoriesInterface }> = ({ contacts, categories }) => {
  console.log(categories)
  return (
    <div className={styles.container}>
      <Head>
        <title>Fudo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <ContactCards contacts={contacts} />
      <SignUp />
      <Menu categories={categories} />


    </div>
  )
}

export default Home;
