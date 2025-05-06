"use client";

import { login } from "@/lib/actions/auth";

export default function Home() {
  const fetchUsers = async () => {
    const res = await fetch("/api/users/cmabymts600001j0v5040zjuw");
    const data = res.json();

    return data;
  };

  fetchUsers();

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
