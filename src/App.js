import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Navigation from "./Components/Navigations/Navigation";
import Logo from "./Components/Logos/Logo";
import ImageLinkForm from "./Components/ImageLinkForms/ImageLinkForm";
import Rank from "./Components/Ranks/Rank";
import "./App.css";
import particlesConfig from "./particles.json";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, [init]);

  return (
    <div className="App">
      {init && <Particles options={particlesConfig} />}

      {<Navigation />}
      {<Logo />}
      {<Rank />}
      {<ImageLinkForm />}
      {/* Your other components */}
    </div>
  );
}

export default App;
