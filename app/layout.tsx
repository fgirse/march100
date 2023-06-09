"use client";

import "../styles/globals.css";
import { ReactNode } from "react";

import '../styles/tailwind.css';
import '../styles/tooltip.css';

interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        
          
        <body>{children}</body>
        
      </body>
    </html>
  );
}