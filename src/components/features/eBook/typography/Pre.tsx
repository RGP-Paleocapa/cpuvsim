import { ReactNode, FC } from "react";

const Pre: FC<{ content: ReactNode; className?: string }> = ({ content, className }) => (
  <pre className={className || "whitespace-pre overflow-auto text-sm bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded p-4"}>
    {content}
  </pre>
);

export default Pre;
