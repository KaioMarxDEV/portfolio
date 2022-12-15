import { Transition } from "@headlessui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export default function Slideup({children}: Props) {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-all delay-150 duration-1000"
      enterFrom="opacity-0 translate-y-24"
      enterTo="opacity-100 translate-y-0"
      leave="transition-opacity duration-1000"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-24"
    >
      {children}
    </Transition>
  )
}