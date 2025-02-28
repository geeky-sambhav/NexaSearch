import Image from "next/image";
import { FC } from "react";



type TInputAreaProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
  disabled?: boolean;
  reset?: () => void;
};

const InputArea: FC<TInputAreaProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
  disabled,
  reset,
}) => {
  return (
    <div className="relative">
      <div className="border-beam">
        <form
          className="relative mx-auto flex h-[66px] w-full items-center justify-between rounded-lg bg-dark-bg-secondary px-3 shadow-[2px_2px_38px_0px_rgba(0,0,0,0.25)]"
          onSubmit={(e) => {
            e.preventDefault();
            if (reset) reset();
            handleDisplayResult();
          }}
        >
          <input
            type="text"
            placeholder="Ask anything"
            className="focus-visible::outline-0 my-1 w-full bg-transparent pl-5 font-light not-italic leading-[normal] text-dark-text-primary placeholder:text-dark-text-secondary outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-xl"
            disabled={disabled}
            value={promptValue}
            required
            onChange={(e) => setPromptValue(e.target.value)}
          />
          <button
            disabled={disabled}
            type="submit"
            className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-lg bg-dark-accent-primary shadow-lg hover:bg-dark-accent-secondary hover:shadow-dark-accent-primary/20 hover:scale-105 transition-all duration-200 disabled:pointer-events-none disabled:opacity-75"
          >
          

            <Image
              unoptimized
              src={"/img/arrow-narrow-right.svg"}
              alt="search"
              width={24}
              height={24}
              className={`${disabled ? "invisible" : ""} transition-transform group-hover:translate-x-0.5`}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputArea;
