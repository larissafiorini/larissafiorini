import "@radix-ui/themes/styles.css";
import React from "react";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';


function App() {

  return (
    <div className="min-h-screen grid grid-cols-1 grid-flow-row justify-center bg-gray-900 items-stretch">

      <About />
      <Skills />
      <Projects />

    </div>
  );
}

export default App;
