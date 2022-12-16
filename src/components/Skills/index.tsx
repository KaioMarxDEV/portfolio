import { ArrowLeft, ArrowRight, HandPalm } from "phosphor-react";
import { useEffect, useState } from "react";

import { backend as BackendSkills, devops as DevopsSkills, frontend as FrontSkills } from './skills';


// TODO: search and implement flip card animation to hover on skill plate
export function Skills() {
  const [frontSkills, setFrontSkills] = useState([] as typeof FrontSkills)
  const [backendSkills, setBackendSkills] = useState([] as typeof BackendSkills)
  const [devopsSkills, setDevopsSkills] = useState([] as typeof DevopsSkills)

  useEffect(() => {
    setFrontSkills(FrontSkills)
    setBackendSkills(BackendSkills)
    setDevopsSkills(DevopsSkills)
  }, [])

  return (
    <div className="w-full">
      <div>
        <h2 className="font-semibold text-6xl">Skills</h2>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex-1 z-10 bg-slate-900 backdrop-blur my-10 p-4 rounded-xl flex items-center gap-2">
          <HandPalm className="text-red-600" size={32} />
          {backendSkills.map((skl) => (
            <span key={skl.id}>
              {skl.name}
            </span>
          ))}
        </div>
        <div className="flex-1 z-10 bg-slate-900 backdrop-blur my-10 p-4 rounded-xl -skew-y-6 flex gap-2">
          <ArrowLeft className="text-orange-400" size={32} />
          {frontSkills.map((skl) => (
            <span key={skl.id}>
              {skl.name}
            </span>
          ))}
        </div>
        <div className="flex-1 z-10 bg-slate-900 backdrop-blur my-10 p-4 rounded-xl skew-y-6 flex gap-2">
          {devopsSkills.map((skl) => (
            <span key={skl.id}>
              {skl.name}
            </span>
          ))}
          <ArrowRight className="text-orange-400" size={32} />
        </div>
        <div className="w-1 h-full absolute bg-gray-400" />
      </div>
    </div>
  );
}