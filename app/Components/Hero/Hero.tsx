import Button from "../CommonButton/CommonButton";
import HeroDescription from "./HeroDescription";
import HeroTitle from "./HeroTitle";
import UrlInput from "./UrlInput";

const Hero = () => {
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-4 py-20">
      <div className="text-center w-full">
        <HeroTitle textSize="text-4xl md:text-5xl lg:text-6xl">Shorten Your Long URL Instantly</HeroTitle>
        <HeroDescription />
        <UrlInput />
        <Button href="/register">Get Started For Free</Button>
      </div>
    </section>
  );
};

export default Hero