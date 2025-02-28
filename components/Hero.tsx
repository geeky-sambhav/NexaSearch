import Image from "next/image";
import { FC } from "react";
import InputArea from "./InputArea";
import Footer from "./Footer";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
      <div className="mx-auto w-full max-w-[900px] px-4">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="gradient-text text-center text-4xl leading-[normal] lg:text-[3.5rem]">
            Unlock the Universe of Knowledge
          </h2>

          {/* input section */}
          <div className="w-full max-w-[708px]">
            <InputArea
              promptValue={promptValue}
              setPromptValue={setPromptValue}
              handleDisplayResult={handleDisplayResult}
            />
          </div>

          {/* Suggestions section */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 lg:flex-nowrap lg:justify-normal">
            {suggestions.map((item) => (
              <div
                className="flex h-[50px] cursor-pointer items-center justify-center gap-[5px] rounded border border-solid border-dark-border bg-dark-bg-secondary px-2.5 py-2 hover:border-dark-accent-primary transition-colors"
                onClick={() => handleClickSuggestion(item?.name)}
                key={item.id}
              >
                <Image
                  unoptimized
                  src={item.icon}
                  alt={item.name}
                  width={18}
                  
                  height={16}
                  className="w-[18px]"
                />
                <span className="text-sm font-light leading-[normal] text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Github link section */}
          <p className="text-center text-sm font-light leading-[normal] text-gray-300 pt-4">
            Made with ❤️ by{" "}
            <span className="text-sm font-medium underline">
              <a
                href="https://www.linkedin.com/in/sambhav-gandhi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sambhav Gandhi
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

type suggestionType = {
  id: number;
  name: string;
  icon: string;
};

const suggestions: suggestionType[] = [
  {
    id: 1,
    name: "What is consciousness?",
    icon: "/img/leaf.svg",
  },
  {
    id: 2,
    name: "Explain the theory of relativity?",
    icon: "/img/icon _dumbell_.svg",
  },
  {
    id: 3,
    name: "Explain stoic philosophy?",
    icon: "/img/icon _atom_.svg",
  },
];

export default Hero;
