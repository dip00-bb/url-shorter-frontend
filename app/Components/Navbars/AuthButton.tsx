"use client"

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  customColor?: string
}

const AuthButton: React.FC<ButtonProps> = ({ children, href, onClick, customColor }) => {
  const className = 'px-6 py-2.5 rounded-md font-medium text-black transition-opacity duration-200 hover:opacity-90 cursor-pointer';
  const style = { backgroundColor: customColor ? `${customColor}` :  `var(--primary)` };

  if (href) {
    return (
      <Link href={href} className={className} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
};

export default AuthButton