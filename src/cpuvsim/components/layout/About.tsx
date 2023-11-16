import useDocumentMetadata from "../../hooks/useDocumentMetadata";

const About = () => {
  useDocumentMetadata('About - My App', 'Learn more about our mission and vision.');

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 font-bold text-gray-800 dark:text-white">
        About Us
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
        Discover the story behind our platform and what drives us.
      </p>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img
          src="/your-about-image.jpg" // Replace with the path to your about image
          alt="About Us"
          className="max-w-full h-auto rounded-lg shadow-lg"
          style={{ maxWidth: '600px' }} // Set a maximum width for the image
        />
      </div>

      {/* Content Section */}
      <div className="text-lg text-gray-600 dark:text-gray-400 space-y-4">
        <p>
          Welcome to [Your App Name], a platform dedicated to [briefly describe the purpose of the app]. Since our inception in [Year], our goal has been to [state main objectives, e.g., provide high-quality assembler resources, facilitate learning, etc.].
        </p>
        <p>
          Our journey began when [brief history or an interesting story about how the app was conceptualized or founded]. We realized the importance of [what problem your app solves or the need it addresses] and set out to create a solution.
        </p>
        <p>
          Today, [Your App Name] is [current status, achievements, or what the app is known for]. We are proud to have [any notable achievements, user milestones, or recognitions].
        </p>
        <p>
          As we look to the future, we are excited to [future plans, upcoming features, or visions]. We invite you to join us on this journey and experience the difference that [Your App Name] can make in [your field or area of focus].
        </p>
      </div>
    </div>
  );
}

export default About;
