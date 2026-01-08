import Button from "../CommonButton/CommonButton";
import HeroDescription from "./HeroDescription";
import HeroTitle from "./HeroTitle";
import UrlInput from "./UrlInput";

const Hero = () => {
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-4 py-20">
      <div className="text-center w-full">
        <HeroTitle />
        <HeroDescription />
        <UrlInput />
        <Button href="/register">Get Started For Free</Button>
      </div>
    </section>
  );
};

export default Hero