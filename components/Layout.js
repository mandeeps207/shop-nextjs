import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title : 'XM42 | Default'}</title>
        <meta
          name="description"
          content="XM42 is world's top flamethrower manufacturer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-20 justify-between shadow-md items-center px-4">
            <Link href="/">
              <span className="text-lg font-bold">XM42</span>
            </Link>
            <div>
              <Link href="/cart">
                <span className="p-2">Cart</span>
              </Link>
              <Link href="/login">
                <span className="p-2">Login</span>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright &copy; 2022 XM42 - ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </>
  );
}
