type Props = {
  summary: string[];
};

const PostSummary = ({ summary }: Props) => {
  return (
    <div className="max-w-2xl mx-auto mb-8 md:mb-16  bg-gray-100 rounded-lg p-5">
      <h2 className="text-lg md:text-xl  mb-4 pb-1 leading-snug font-bold ">
        この記事の概要
      </h2>
      <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        {summary &&
          summary.map((item, index) => {
            return (
              <li key={index} className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 !text-orange-500 dark:text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{item}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PostSummary;
