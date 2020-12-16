import Head from 'next/head';
import React, { ReactNode } from 'react';

type LayoutProps = {
  title: string;
  children: ReactNode;
  isDay: boolean;
};

export const Layout = ({ title, children, isDay }: LayoutProps) => {
  return (
    <div className={`container mx-auto  ${isDay === true ? 'day' : 'night'}`}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </div>
  );
};
