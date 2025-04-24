import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            velit repellendus vel delectus iusto dolorum excepturi quae, quam
            eveniet harum.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
