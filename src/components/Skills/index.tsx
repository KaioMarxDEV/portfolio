import { ArrowLeft, ArrowRight, HandPalm } from 'phosphor-react';
import { useEffect, useState } from 'react';

import {
  backend as BackendSkills,
  devops as DevopsSkills,
  frontend as FrontSkills,
} from './skills';

export function Skills() {
  const [frontSkills, setFrontSkills] = useState([] as typeof FrontSkills);
  const [backendSkills, setBackendSkills] = useState(
    [] as typeof BackendSkills
  );
  const [devopsSkills, setDevopsSkills] = useState([] as typeof DevopsSkills);

  useEffect(() => {
    setFrontSkills(FrontSkills);
    setBackendSkills(BackendSkills);
    setDevopsSkills(DevopsSkills);
  }, []);

  return (
    <div className="w-full">
      <div>
        <h2 className="text-6xl font-semibold">Skills</h2>
      </div>
      <div className="mt-2 flex flex-col items-center">
        <div className="z-10 my-6 flex flex-1 cursor-pointer items-center gap-2 rounded-xl bg-slate-900 p-4 backdrop-blur hover:animate-flip">
          <HandPalm className="text-red-600" size={32} />
          {backendSkills.map((skill) => (
            <span key={skill.id}>{skill.name}</span>
          ))}
        </div>
        <div className="z-10 my-6 flex flex-1 -skew-y-6 gap-2 rounded-xl bg-slate-900 p-4 backdrop-blur">
          <ArrowLeft className="text-orange-400" size={32} />
          {frontSkills.map((skill) => (
            <span key={skill.id}>{skill.name}</span>
          ))}
        </div>
        <div className="z-10 my-6 flex flex-1 skew-y-6 gap-2 rounded-xl bg-slate-900 p-4 backdrop-blur">
          {devopsSkills.map((skill) => (
            <span key={skill.id}>{skill.name}</span>
          ))}
          <ArrowRight className="text-orange-400" size={32} />
        </div>
        <div className="absolute h-full w-1 bg-gray-400" />
      </div>
    </div>
  );
}
