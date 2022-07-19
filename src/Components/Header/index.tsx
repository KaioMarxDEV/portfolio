import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { List } from "phosphor-react";

const navigation = [
  {href: 'https://github.com/KaioMarxDEV', title: 'Github'},
  {href: 'https://www.linkedin.com/in/kaiomarxdev/', title: 'LinkedIn'},
  {href: '#projects', title: 'Projects'},
  {href: '#hello', title: 'Say Hello!'},
]

export function Header() {

  return (
    <header className="bg-[#ffffff7d] rounded-md sm:backdrop-blur-md sm:border-my-blue sm:border-b">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Menu as="div" className="relative flex items-center justify-between h-16">
          {/* Mobile Here */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Menu.Button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-my-blue hover:bg-gray-300 hover:outline-none hover:ring-2 hover:ring-inset hover:ring-my-blue" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <List size={24} />
            </Menu.Button>
            <Transition.Root
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Menu.Items className="sm:hidden absolute top-16 left-0 flex flex-1 flex-row w-screen backdrop-blur-md bg-[#ffffff7d] rounded">
                {navigation.map(({ href, title }) => (
                  <Menu.Item key={href}>
                    {({ active }) => (
                      
                      <Link href={href}>
                        <a className="focus:bg-gray-500/30 focus:text-my-blue focus:border-transparent flex items-center flex-1 justify-center border-[1px] border-my-blue px-4 py-2 whitespace-nowrap font-medium">
                          {title}
                        </a>
                      </Link>
                      
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition.Root>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <strong className="block font-monoton text-xl text-my-blue">
                Welcome.exe
              </strong>
            </div>
            <div className="hidden sm:block">
              <div>
                <ul className="flex  space-x-4">
                  {navigation.slice(0, navigation.length-1 ).map(({href, title}) => (
                    <li key={href}>
                      <Link href={href}>
                        <a className="transition-all text-my-blue border border-my-blue hover:bg-my-blue hover:translate-y-1 active:bg-my-blue/75 font-medium hover:text-white rounded-full px-4 py-2" rel="noreferrer">
                          {title}
                        </a>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="#hello">
                      <a className="transition-all bg-gradient-to-r from-my-blue to-indigo-600 rounded-full px-4 py-2 cursor-pointer font-medium active:translate-y-1 text-white">
                        Say Hello!
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </header>
  )
}