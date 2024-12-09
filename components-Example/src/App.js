
import 'bulma/css/bulma.css';
import alexaImg from "./images/alexa.png";
import cortanaImg from "./images/cortana.png";
import siriImg from "./images/siri.png";

function App() {
  return (
    <div className="pdaLogo">
      <h1>Personal Digital Assistant</h1>
      <div className="container">
        <section className="section box">
          <div className="columns">

            <div className="column is-4">
              <img src={alexaImg} alt="pdaImage"/>
              <h2>Name : Alexa</h2>
              <p>Email : alexa@example.com</p>
            </div>

            <div className="column is-4">
              <img src={cortanaImg} alt="pdaImage"/>
              <h2>Name : Cortana</h2>
              <p>Email : cortana@example.com</p>
            </div>

            <div className="column is-4">
              <img src={siriImg} alt="pdaImage"/>
              <h2>Name : Siri</h2>
              <p>Email : siri@example.com</p>
            </div>

          </div>
          </section>
          </div>
      
      {/* <ProfileCard name="Alexa" email="alexa@example.com" image={alexaImg} /> */}
      {/* <ProfileCard name="Cortana" email="cortana@example.com" image={cortanaImg}/> */}
      {/* <ProfileCard name="Siri" email="siri@example.com" image={siriImg}/> */}
    </div>
  );
}

export default App;