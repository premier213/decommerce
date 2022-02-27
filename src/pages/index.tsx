import LightShapes from '@com/lightShapes';
import NavigationBar from 'src/views/navigationBar';
import type { NextPage } from 'next';
import Head from 'next/head';
import Content from 'src/views/content';

const Home: NextPage = () => (
  <div className='md:container mx-auto'>
    <Head>
      <title>DeCommerce.</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <LightShapes />
    <NavigationBar />
    <Content />
  </div>
);

export default Home;
