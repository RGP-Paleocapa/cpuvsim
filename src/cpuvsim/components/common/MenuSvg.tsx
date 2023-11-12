import { FaBars } from "react-icons/fa";

const MenuSvg = () => {
    return (
        <button
        className={'text-xl p-2 rounded-full dark:bg-gray-800 dark:text-white bg-white text-gray-80'}
        // onClick={handleThemeSwitch}
        >
            <FaBars />
        </button>
    );
}

export default MenuSvg;