import Image from "next/image";

const SimilarTopics = ({
  similarQuestions,
  handleDisplayResult,
  reset,
}: {
  similarQuestions: string[];
  handleDisplayResult: (item: string) => void;
  reset: () => void;
}) => {
  return (
    <div className="container flex h-auto w-full shrink-0 gap-4 rounded-lg border border-solid border-dark-border bg-dark-bg-secondary p-5 lg:p-10">
      <div className="hidden lg:block">
        <Image
          unoptimized
          src="/img/similarTopics.svg"
          alt="footer"
          width={24}
          height={24}
          className="text-dark-accent-primary"
        />
      </div>
      <div className="flex-1 divide-y divide-dark-border">
        <div className="flex gap-4 pb-3">
          <Image
            unoptimized
            src="/img/similarTopics.svg"
            alt="footer"
            width={24}
            height={24}
            className="block text-dark-accent-primary lg:hidden"
          />
          <h3 className="text-base font-bold uppercase text-dark-accent-tertiary">
            Similar topics:{" "}
          </h3>
        </div>

        <div className="max-w-[890px] space-y-[15px] divide-y divide-dark-border">
          {similarQuestions.length > 0 ? (
            similarQuestions.map((item) => (
              <button
                className="flex cursor-pointer items-center gap-4 pt-3.5 hover:text-dark-accent-primary"
                key={item}
                onClick={() => {
                  reset();
                  handleDisplayResult(item);
                }}
              >
                <div className="flex items-center">
                  <Image
                    unoptimized
                    src="/img/arrow-circle-up-right.svg"
                    alt="footer"
                    width={24}
                    height={24}
                    className="text-dark-accent-secondary"
                  />
                </div>
                <p className="text-sm font-light leading-[normal] text-dark-text-primary [leading-trim:both] [text-edge:cap]">
                  {item}
                </p>
              </button>
            ))
          ) : (
            <>
              <div className="h-10 w-full animate-pulse rounded-md bg-dark-accent-secondary/20" />
              <div className="h-10 w-full animate-pulse rounded-md bg-dark-accent-secondary/20" />
              <div className="h-10 w-full animate-pulse rounded-md bg-dark-accent-secondary/20" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarTopics;
