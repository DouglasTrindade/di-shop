"use client";

import { login } from "@/lib/actions/auth";

export default function Home() {
  return (
    <div>
      <p>Você não está logado</p>
      <button
        className="bg-indigo-500 px-3 py-2 rounded-2xl cursor-pointer"
        onClick={() => login()}
      >
        Logar com Github
      </button>
    </div>
  );
}
