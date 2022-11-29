import "./Hero.css";


const Hero = () => {
  return (
    <header>
      <nav>
        <h2 className='logo'>Aytech</h2>
        <ul>
          <li>
            <a className="login-btn" href="GOOGLE">
              Login
            </a>
          </li>
          <li> 
            <a className="demo-btn" href="GOOGLE">
              Book demo
            </a>
          </li>
        </ul>
      </nav>

      <div className="main-text-container">
        <div className="title-container">
          <h1 className="title">My project</h1>
        </div>

        <div className="text-container">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
