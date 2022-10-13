import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;