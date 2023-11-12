// import React, { useState } from 'react';
// // import { useInView } from 'react-intersection-observer';

// interface LazyImageProps {
//   src: string;
//   alt: string;
//   className?: string;
// }

// const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
//   const [imageRef, inView] = useInView({
//     triggerOnce: true, // Load the image only once
//   });

//   const [loaded, setLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setLoaded(true);
//   };

//   return (
//     <div
//       ref={imageRef}
//       className={`relative ${className}`}
//       style={{ minHeight: '100px' }} // Set a height for the container
//     >
//       {inView && !loaded && (
//         <div className="absolute inset-0 flex items-center justify-center">
//           Loading...
//         </div>
//       )}
//       {inView && (
//         <img
//           // src={`${"/images"}${src}`}
//           src={src}
//           alt={alt}
//           onLoad={handleImageLoad}
//           className={`w-full h-auto ${loaded ? '' : 'hidden'}`}
//         />
//       )}
//     </div>
//   );
// };

// export default LazyImage;
