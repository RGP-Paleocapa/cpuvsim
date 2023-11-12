const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2023;

  return (
    <footer className="bg-white dark:bg-slate-800 text-black dark:text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {/* About Section */}
          <div>
            <h4 className="font-bold text-lg mb-2">About</h4>
            <p>Insights into assembler and programming concepts.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-2">References</h4>
            <ul>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">About</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Topics</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Resources</a></li>
            </ul>
          </div>

          {/* Additional Resources */}
          <div>
            <h4 className="font-bold text-lg mb-2">Resources</h4>
            <p>Explore additional resources and materials to deepen your understanding of assembler and programming.</p>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="text-center mt-8 border-t pt-4">
          &copy; {startYear}{currentYear > startYear ? `-${currentYear}` : ''} Your eBook Platform
          {/* Additional legal links if necessary */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
