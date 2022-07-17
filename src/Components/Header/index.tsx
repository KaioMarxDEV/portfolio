
export function Header() {
  return (
    <header className="fixed top-0 z-10 shadow-lg backdrop-blur-lg bg-blend-overlay shadow-black/20 w-full bg-[#ffffff7d] px-4 drop-shadow-md rounded-xl">
      <div className="flex flex-row items-center sm:h-20 justify-between mx-auto max-w-7xl">
        <div>
          <strong className="font-monoton text-xl text-my-blue">
            Welcome.exe
          </strong>
        </div>
        <div>
          <ul className="m-0 p-0 list-none flex items-center bg-transparent">
            <li className="float-left mr-4 block">
              <a href="#top" className="text-my-blue border border-my-blue hover:bg-my-blue transition hover:text-white rounded-full px-4 py-2 h-full w-full">
                Home
              </a>
            </li>
            <li className="float-left mr-4 block">
              <a href="#projects" className=" text-my-blue border border-my-blue hover:bg-my-blue transition hover:text-white rounded-full px-4 py-2 h-full w-full">
                Projects
              </a>
            </li>
            <li className="float-left mr-4 block">
              <a href="#hello" className="flex flex-row items-center bg-my-blue rounded-full px-4 py-2 cursor-pointer hover:bg-my-blue font-semibold text-gray-100">
                <strong className="font-semibold">Say Hello</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}