import React from 'react';
import { exp_list } from '../data/data';

export default function Workexp() {

  return (
    <div className="flex flex-col w-full px-4 py-2 space-y-3 animate-fade-in">
      <h2 className="text-2xl pb-4 font-bold pt-4">Work Experience</h2>

      {exp_list.map((exp, idx) => (
        <div
          key={idx}
          className="flex flex-row items-center w-full justify-between md:px-10 bg-zinc-950 text-white p-2 rounded-xl border border-zinc-700 h-24 transition-transform duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:shadow-md"
        >
          <div className="flex flex-row items-center space-x-3 md:space-x-6">
            <img src={exp.logo} alt="logo" className="w-14 h-14 rounded-full" />
            <div>
              <p className="font-bold">{exp.role}</p>
              <p className="text-sm text-zinc-300">{exp.company}</p>
            </div>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm">{exp.date}</p>
        </div>
      ))}
    </div>
  );
}
