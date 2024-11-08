import { InOrbitIcon } from './InOrbitIcon'

export function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center gap-6 justify-center h-full sm:px-4 lg:px-8">
      <div className="w-full text-center lg:flex lg:flex-col lg:items-center ">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-500 text-3xl sm:text-xl lg:text-4xl font-bold leading-normal opacity-75 py-1 mb-12">
          Projects
        </h1>
        <br />

        <div className="border-2 border-gray-500 hover:border-purple-500 transition-all rounded-lg p-8 flex flex-col items-center gap-4 sm:w-full lg:w-80 mb-6">
          <InOrbitIcon />
          <p class="text-center text-white w-60">Goal manager tool to register weekly goals and control scores in real time</p>

          <div className="flex flex-row items-center gap-2 text-2xl">
            <i class="devicon-javascript-plain text-zinc-300"></i>
            <i class="devicon-react-original text-zinc-300"></i>
            <i class="fab fa-node text-zinc-300"></i>
            <i class="devicon-postgresql-plain text-zinc-300"></i>
          </div>

          <a href="https://inorbit-react.vercel.app/" class="text-center sm:ml-1 text-white font-bold px-6 py-4 w-40 rounded outline-none focus:outline-none mr-1 mb-1 bg-purple-800 active:bg-cyan-300 uppercase text-sm shadow hover:shadow-lg"><span>Live Demo</span></a>
          <a href="https://github.com/larissafiorini/inorbit-react" class="sm:ml-1 text-white font-bold px-6 py-2 w-40 rounded outline-none focus:outline-none mr-1 mb-1 bg-cyan-700 active:bg-cyan-300 uppercase text-sm shadow hover:shadow-lg"><i class="fab fa-github text-lg mr-2"></i><span>Frontend</span></a>
          <a href="https://github.com/larissafiorini/inorbit-server" class="sm:ml-1 text-white font-bold px-6 py-2 w-40 rounded outline-none focus:outline-none mr-1 mb-1 bg-cyan-700 active:bg-cyan-300 uppercase text-sm shadow hover:shadow-lg"><i class="fab fa-github text-lg mr-2"></i><span>Backend</span></a>
        </div>
      </div>

    </div>
  )
}