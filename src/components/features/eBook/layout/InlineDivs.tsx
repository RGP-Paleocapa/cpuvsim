const InlineDivs = ({
  children,
  containsTable,
  centerStart = false,
  isEven = false,
}: {
  children: React.ReactNode[];
  containsTable?: boolean;
  centerStart?: boolean;
  isEven?: boolean;
}) => {
  const lightBg = 'bg-blue-200 dark:bg-yellow-400';
  const darkBg = 'bg-green-200 dark:bg-indigo-400';
  const oddBackground = isEven ? darkBg : lightBg;
  const evenBackground = isEven ? lightBg : darkBg;

  return (
    <div
      className={`whitespace-pre-wrap flex flex-col ${
        containsTable ? 'lg:flex-row' : 'lg:flex-row'
      } ${
        isEven ? 'flex-col-reverse' : ''
      } justify-center items-stretch`}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className={`${
            containsTable ? 'w-full lg:w-1/2' : 'w-full md:w-full'
          } flex flex-col ${centerStart ? 'justify-start' : 'justify-center'} py-4 ${
            index % 2 === 0 ? evenBackground : oddBackground
          } overflow-auto`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default InlineDivs;
