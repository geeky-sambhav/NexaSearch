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
                {item.icon}
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
  icon: JSX.Element;
};

const suggestions: suggestionType[] = [
  {
    id: 1,
    name: "What is consciousness?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-leaf"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Explain the theory of relativity?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-brain"
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Explain stoic philosophy?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-flame"
      >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
];

export default Hero;
