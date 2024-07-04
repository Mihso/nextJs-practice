'use client'
import Image from "next/image";
import LoginPage from "./login";
import Link from 'next/link';
import { useState } from "react";
export default function Home() {

  const [visibble, updateVisible] = useState(false);
  const styler = {
    visibility : 'hidden',
  }

  const handleVisible = () =>{
    updateVisible(!visibble);
  }

  return (
    <main>
    <ul>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
    </ul>
    <button onClick={handleVisible}>visibility</button>
    {visibble ? (
    <div >
      <LoginPage></LoginPage>
      Hello.
    </div>
): <div></div>}
    </main>
  );
}
