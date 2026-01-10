"use client"

import Button from "../CommonButton/CommonButton";
import useAuthContext from "../Hook/useAuthContext";
import HeroDescription from "./HeroDescription";
import HeroTitle from "./HeroTitle";
import UrlInput from "./UrlInput";

const Hero = () => {

  const { user } = useAuthContext()
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="text-center w-full space-y-14">
        <div>
          <HeroTitle textSize="text-4xl md:text-5xl lg:text-6xl">Shorten Your Long URL Instantly</HeroTitle>
        </div>
        <div>
          <HeroDescription />
        </div>
        <div>
          <UrlInput />
        </div>
        <div>
          <Button href={`${user ? '/dashboard' : "/register"}`}>Get Started For Free</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero