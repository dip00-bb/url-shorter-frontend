import { ReactNode } from "react";

interface HeroTitle{
  children:ReactNode,
  textSize:string
}

const HeroTitle = ({children,textSize}:HeroTitle) => (
  <h1 className={`${textSize} font-bold mb-6 text-(--primary)`}>
    {children}
  </h1>
);

export default HeroTitle