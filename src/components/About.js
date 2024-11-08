
export function About() {
  return (
    <div id="about" className="flex items-center gap-8 justify-center h-full sm:grid-cols-1 lg:grid-cols-2 sm:px-4 lg:px-8">

      <div className="w-full">

        <div className="relative p-2 text-center">
          <h1 className="text-blue-300 text-3xl lg:text-4xl font-bold leading-tight opacity-75">Larissa Martins</h1>
          <p className="text-white text-2xl ">Software Engineer</p><br />
        </div>

        <div className="relative w-full max-w-xs sm:w-8 sm:h-8 lg:w-64 lg:h-64 mx-auto">
          <img className="rounded-full border-4 border-gray-700 w-full h-full object-cover" alt="Larissa Fiorini" src="https://avatars.githubusercontent.com/u/7658213?v=4" />
          <div className="absolute inset-0 bg-black opacity-35 rounded-full"></div>
        </div>

        <div className="relative p-2 text-center">
          <p className="text-white mt-4 text-lg leading-relaxed">🎓 Software Engineering - Bachelor's degree - PUCRS</p>
          <p className="text-white text-lg leading-relaxed">💻 Software Quality Engineer at HP Inc.</p><br />
          <div className="space-x-4">
            <a href="https://www.linkedin.com/in/larissa-fiorini/"><i class="fab fa-linkedin text-3xl" style={{ color: "#0077B5" }}></i></a>
            <a href="mailto:swengineerlarissa@gmail.com"><i class="fas fa-envelope text-3xl text-zinc-300" ></i></a>
          </div>
        </div>

      </div>
    </div>
  )

}