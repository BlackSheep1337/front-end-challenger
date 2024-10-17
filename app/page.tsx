"use client";
import Cadastro from "./cadastro/page";
import Login from "./login/page";
import RecoverPassword from "./recuperar-senha/page";

export default function Home() {
  return (
    <div className="m-16 text-center text-4xl">
      <Login />
    </div>
  );
}
