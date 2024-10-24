import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const navDialog = document.getElementById("nav-dialog")
    const handleMenu = () => {
        navDialog.classList.toggle("hidden")
        // alert()
    }
    return (
        <nav className="px-6 py-4 bg-[#F9F9FF] flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
                <img src="favicon.png" className="max-h-10 max-w-10 object-cover" />

                <span className="text-lg font-semibold font-display">ToDesktop</span>
            </a>
            {/* nav-menu-items */}
            <div id="nav-menu-items" className="hidden lg:flex gap-12">

                <a href="#" className="font-semibold hover:text-primary">
                    Pricing
                </a>
                <a href="#" className="font-semibold hover:text-primary">
                    Docs
                </a>  <a href="#" className="font-semibold hover:text-primary">
                    Changelog
                </a>  <a href="#" className="font-semibold hover:text-primary">
                    Blogs
                </a>  <a href="#" className="font-semibold hover:text-primary">
                    Login
                </a>
            </div>
            <button className="hidden font-semibold   lg:flex items-center gap-4 border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
                <img src="/electron.svg" alt="ss" />
                <span>
                    Electron Developer
                </span>
                <FaArrowRightLong />
            </button>

            <button className="p-2 lg:hidden" onClick={handleMenu}>
                <IoMenu className="text-gray-600 text-xl" />
            </button>

            {/* mobile Navbar */}
            <div id="nav-dialog" className="fixed inset-0 bg-[#F9F9FF] z-10 md:hidden">
                <nav className="px-6 py-4 bg flex items-center justify-between">

                    <a href="#" className="flex items-center gap-2">
                        <img src="favicon.png" className="max-h-10 max-w-10 object-cover" />

                        <span className="text-lg font-semibold font-display">ToDesktop</span>
                    </a>


                    <button className="p-2 md:hidden" onClick={handleMenu}>
                        <IoMdCloseCircle className="text-gray-600 text-xl" />
                    </button>
                </nav>
                {/* nav-menu-items */}
                <div className="mt-4">

                    <a href="#" className="font-semibold rounded-lg m-3 p-3 block hover:bg-gray-100">
                        Pricing
                    </a>
                    <a href="#" className="font-semibold rounded-lg m-3 p-3 block hover:bg-gray-100">
                        Docs
                    </a>  <a href="#" className="font-semibold rounded-lg m-3 p-3 block hover:bg-gray-100">
                        Changelog
                    </a>  <a href="#" className="font-semibold rounded-lg m-3 p-3 block hover:bg-gray-100">
                        Blogs
                    </a>  <a href="#" className="font-semibold rounded-lg m-3 p-3 block hover:bg-gray-100">
                        Login
                    </a>
                </div>
                <div className="h-[1px] mx-6 bg-gray-300"></div>

                <button className="font-semibold mt-6 flex w-full items-center gap-4 px-6 py-2 rounded-lg hover:border-gray-600  hover:bg-gray-100 ">
                    <img src="/electron.svg" alt="ss" />
                    <span>
                        Electron Developer
                    </span>
                </button>


            </div>
        </nav>
    );
};

export default Navbar;
