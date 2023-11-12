import { FaArrowDown } from 'react-icons/fa';
import useDocumentMetadata from '@common/UseDocumentMetadata';

const Home = () => {
    const handleScroll = () => {
        // Scroll to the section with the specified ID
        const section = document.getElementById('discover-features');
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    useDocumentMetadata('HomePage', 'This is the main page.');

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 text-gray-800 dark:text-white">
                    A gentle introduction to the Central Processing Unit and Assembly language
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
                    Based on (and in support of) the complementary Educational CPU Visual Simulator
                </p>
                <a
                    href="#discover-features"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg"
                    onClick={handleScroll}
                >
                    Discover <FaArrowDown className="inline-block ml-2" />
                </a>
            </div>

            <hr className="flex flex-col my-16 border-t border-gray-300 dark:border-gray-700" />
        
            
            <section id="discover-features" className="flex flex-col justify-center h-96">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white">
                    Discover Our Features
                </h2>
                <p className="home-discovery-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam faucibus, risus non condimentum pretium, urna urna 
                    posuere mauris.
                </p>
                <p className="home-discovery-text">
                    Vestibulum fringilla nec leo et cursus. Integer auctor ante 
                    a orci eleifend, et blandit metus rhoncus.
                </p>
                <p className="home-discovery-text">
                    Aliquam a orci at nulla accumsan consectetur. Curabitur 
                    ullamcorper bibendum metus, id posuere nulla rhoncus sed.
                </p>
            </section>
        </>
    );
}

export default Home;
