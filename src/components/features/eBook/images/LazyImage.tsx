type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const LazyImage = ({ loading = "lazy", ...props }: LazyImageProps) => {
  return <img loading={loading} {...props} />;
};

export default LazyImage;
