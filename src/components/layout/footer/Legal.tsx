import licenza from "/icons/by-nc-sa.svg";

const Legal = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2021;
    const isRange = currentYear > startYear;
    const copyrightText = `© ${startYear}${isRange ? `-${currentYear}` : ''}`;

    return (
        <footer className="text-center mt-8 border-t pt-4">
            <div className="flex justify-center items-center space-x-2 mt-2">
                <a
                    href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 flex items-center"
                >
                    <img src={licenza} alt="Creative Commons BY-NC-SA 4.0 License" className="h-10 w-auto" />
                </a>
            </div>
            <p className='pt-2'>
                {copyrightText}
            </p>
        </footer>
    );
};

export default Legal;
