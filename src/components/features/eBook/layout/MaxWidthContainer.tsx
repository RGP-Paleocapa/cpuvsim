const MaxWidthContainer = ({
  children,
  bgColor = 'bg-transparent',
  smallPadding = false,
  classname = '',
}: {
  children: React.ReactNode;
  bgColor?: string;
  smallPadding?: boolean;
  classname?: string;
}) => (
  <div className={`whitespace-pre-wrap max-w-4xl mx-fit ${smallPadding ? 'lg:p-4' : 'p-4'} rounded-lg ${bgColor} ${classname}`}>
    {children}
  </div>
);

export default MaxWidthContainer;
