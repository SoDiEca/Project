import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">
              I am a beginner in coding and I am really looking forward to learn
              as much as possible about it, and of course, meet new people with
              whom I could work on different projects in the future.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: voinuecaterina@gmail.com</li>
              <li className="contact-item">Phone: +43 676 334 09 24</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
