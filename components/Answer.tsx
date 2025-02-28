import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";

export default function Answer({ answer }: { answer: string }) {
  return (
    <div className="border-beam">
      <div className="container flex h-auto w-full shrink-0 gap-4 rounded-lg bg-dark-bg-secondary p-5 lg:p-10">
        <div className="hidden lg:block">
          <Image
            unoptimized
            src="/img/Info.svg"
            alt="footer"
            width={24}
            height={24}
            className="text-dark-accent-primary"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between pb-3">
            <div className="flex gap-4">
              <Image
                unoptimized
                src="/img/Info.svg"
                alt="footer"
                width={24}
                height={24}
                className="block text-dark-accent-primary lg:hidden"
              />
              <h3 className="text-base font-bold uppercase text-dark-accent-tertiary">
                Answer:{" "}
              </h3>
            </div>
            {answer && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(answer.trim());
                    toast("Answer copied to clipboard", {
                      icon: "✂️",
                    });
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-dark-bg-primary hover:bg-dark-accent-primary/10 transition-colors duration-200 group"
                >
                  <Image
                    unoptimized
                    src="/img/copy.svg"
                    alt="Copy answer"
                    width={16}
                    height={16}
                    className="opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-wrap content-center items-center gap-[15px]">
            <div className="w-full whitespace-pre-wrap text-base font-light leading-[152.5%] text-dark-text-primary">
              {answer ? (
                answer.trim()
              ) : (
                <div className="flex w-full flex-col gap-2">
                  <div className="h-6 w-full animate-pulse rounded-md bg-dark-accent-secondary/20" />
                  <div className="h-6 w-full animate-pulse rounded-md bg-dark-accent-secondary/20" />
                  <div className="h-6 w-full animate-pulse rounded-md bg-dark-accent-secondary/20" />
                  <div className="h-6 w-full animate-pulse rounded-md bg-dark-accent-secondary/20" />
                </div>
              )}
            </div>
          </div>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
      </div>
    </div>
  );
}
