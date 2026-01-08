"use client"

import Link from "next/link";


interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ children, href, onClick }) => {
  const className = 'px-6 py-2.5 rounded-md font-medium text-black transition-opacity duration-200 hover:opacity-90 bg-(--primary)';


  if (href) {
    return (
      <Link href={href} className={className} >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}; 

export default Button