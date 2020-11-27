import Head from 'next/head';
import React, { ReactNode } from 'react';

type LayoutProps = {
  title: string;
  children: ReactNode;
};

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className='container mx-auto px-10 py-10'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </div>
  );
};
