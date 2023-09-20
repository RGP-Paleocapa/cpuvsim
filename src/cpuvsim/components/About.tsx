import useDocumentMetadata from "./UseDocumentMetadata";

const About = () => {
  useDocumentMetadata('About - My App', 'This is the information page.');

    return (
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 text-gray-800 dark:text-white">
          About Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
          Learn more about our mission and vision.
        </p>
        <div className="flex justify-center">
          <img
            src="/your-about-image.jpg" // Replace with the path to your about image
            alt="About Us"
            className="max-w-full h-auto"
          />
        </div>
        <div className="mt-8 text-lg text-gray-600 dark:text-gray-400">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fermentum venenatis justo, sit amet rhoncus metus volutpat vel.
            Phasellus vehicula semper libero, nec rhoncus quam volutpat vitae.
            Nullam aliquam, libero ac viverra ullamcorper, nunc augue semper
            lorem, id tristique felis quam vel arcu.
          </p>
          <p className="mt-4">
            Fusce pellentesque vehicula justo, nec scelerisque mauris suscipit
            nec. Sed in libero eu ex vehicula efficitur. Curabitur id mattis justo.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Cras nec libero ut ipsum semper hendrerit eget
            non orci.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;
  