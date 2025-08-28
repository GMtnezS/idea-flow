import React from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'Your App Name',
  description: 'Description of your app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header>
          <h1>Idea Flow</h1>
        </header>
        <main className="p-0 m-0">{children}</main>
        <footer className="p-4 bg-gray-800 text-center text-white">
          <p>&copy; {new Date().getFullYear()} 50-Day CS Challenge</p>
        </footer>
      </body>
    </html>
  );
}
