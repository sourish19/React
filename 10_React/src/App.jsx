import { useState } from "react";
import Input from "./components/Input";
import Weather from "./components/Weather";

export const App = () => {
  return (
    <div className="min-h-screen w-full bg-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      <div className="flex justify-center items-center min-h-screen relative z-10">
        <div className="w-[400px] h-[500px] rounded-3xl bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] font-['Roboto'] ">
          <Input />
          <Weather />
        </div>
      </div>
    </div>
  );
};
