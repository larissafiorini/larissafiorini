
export function Skills() {
  return (
    <div id="skills" className="flex items-center gap-6 justify-center m-3 h-full sm:px-4 lg:px-8">
      <div className="sm:w-full lg:w-1/2 text-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-500 text-3xl lg:text-4xl font-bold leading-tight opacity-75">
          Skills
        </h1>
        <br />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:w-full lg:flex lg:flex-row lg:items-center justify-center">

          <div className="shadow-lg rounded-lg text-center p-8 grid grid-flow-row justify-center">
            <i class="fab fa-python text-5xl text-white " style={{ color: "#74C0FC" }} />
            <span class="text-white">Python</span>
          </div>

          <div className="shadow-lg rounded-lg text-center p-8 grid grid-flow-row justify-center">
            <i class="fab fa-react text-5xl text-white " style={{ color: "#74C0FC" }} />
            <span class="text-white">React</span>
          </div>

          <div className="shadow-lg rounded-lg text-center p-8 grid grid-flow-row justify-center">
            <i class="fab fa-html5 text-5xl text-white " style={{ color: "#74C0FC" }} />
            <span class="text-white">HTML</span>
          </div>

          <div className="shadow-lg rounded-lg text-center p-8 grid grid-flow-row justify-center">
            <i class="devicon-selenium-original text-5xl text-white" style={{ color: "#74C0FC" }} ></i>
            <span class="text-white">Selenium</span>
          </div>

          <div className="shadow-lg rounded-lg text-center p-8 grid grid-flow-row justify-center">
            <i class="devicon-go-original-wordmark text-5xl text-white" style={{ color: "#74C0FC" }} ></i>
            <span class="text-white">Go</span>
          </div>

          <div className="shadow-lg rounded-lg text-center p-8 grid grid-flow-row justify-center">
            <i class="devicon-mysql-original text-5xl text-white" style={{ color: "#74C0FC" }} ></i>
            <span class="text-white">MySQL</span>
          </div>

          <div className="shadow-lg rounded-lg text-center p-8 grid grid-flow-row justify-center">
            <i class="devicon-mongodb-plain text-5xl text-white" style={{ color: "#74C0FC" }} ></i>
            <span class="text-white">MongoDB</span>
          </div>

          <div className="shadow-lg rounded-lg text-center p-8 grid grid-flow-row justify-center">
            <i class="fab fa-node text-5xl text-white" style={{ color: "#74C0FC" }} ></i>
            <span class="text-white">Node.js</span>
          </div>

          <div className="shadow-lg rounded-lg text-center p-8 grid grid-flow-row justify-center">
            <i class="devicon-tailwindcss-original text-5xl text-white" style={{ color: "#74C0FC" }} ></i>
            <span class="text-white">Tailwind CSS</span>
          </div>

          <div className="shadow-lg rounded-lg text-center p-8 grid grid-flow-row justify-center">
            <i class="fab fa-js text-5xl text-white" style={{ color: "#74C0FC" }} ></i>
            <span class="text-white">Javascript</span>
          </div>

        </div>
      </div>

    </div>
  )
}