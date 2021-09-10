import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">
              I am a beginner in coding and I am really looking forward to learn
              as much as possible about it, and of course, meet new people with
              whom I could work on different projects in the future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
