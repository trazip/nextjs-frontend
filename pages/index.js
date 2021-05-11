import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Resume from '../components/Resume';

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>Pierre Penhard - Rails Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main />
      <Resume />
      <footer />
    </div>
  );
}
