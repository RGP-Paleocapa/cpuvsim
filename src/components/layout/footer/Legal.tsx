import licenza from "/by-nc-sa.svg";


const Legal = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2021;

    return (
        <div className="text-center mt-8 border-t pt-4">
            <div className="flex justify-center items-center space-x-2 mt-2">
                <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 flex items-center"
                >
                <img
                    src={licenza}
                    alt=">CC BY-NC-SA 4.0"
                    className="h-10 w-25"
                />
                {/* <span className="ml-1">CC BY-NC-SA 4.0</span> */}
                </a>
            </div>
            <p className='pt-2'>
                &copy; {startYear}{currentYear > startYear ? `-${currentYear}` : ''} CPU E-Book
            </p>
        </div>
    );
}

export default Legal;