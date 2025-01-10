import { Link } from "react-router-dom"
import profileImage from '../assets/profile.png'

function Dashboard() {
    return (
        <div className="min-w-[17%] sticky top-0  bg-secondary min-h-screen max-h-screen flex flex-col justify-between">
            <div>
                <h1 className="text-3xl font-bold p-7 mb-10 text-white">Dashboard</h1>
                <nav>
                    <ul className="[&>*]:p-4 [&>*]:text-gray-300 [&>*]:font-semibold">
                        <Link
                        to="/Overview"
                        className="hover:text-gray-200 text-lg w-full flex hover:bg-[#2d3748]"
                        >
                            Overview
                        </Link>
                        <Link
                        to="/Village"
                        className="hover:text-gray-200 text-lg w-full flex hover:bg-[#2d3748]"
                        >
                            Village Management
                        </Link>
                        <Link
                        to="/ChatPage"
                        className="hover:text-gray-200 text-lg w-full flex hover:bg-[#2d3748]"
                        >
                            Chat
                        </Link>
                        <Link
                        to="/Gallery"
                        className="hover:text-gray-200 text-lg w-full flex hover:bg-[#2d3748]"
                        >
                            Gallery
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className="flex justify-between items-center p-5">
                <div className="flex items-center justify-center">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-16 h-16 rounded-full mr-2"
                    />
                    <p className="text-white text-lg">Mahmoud Shouli</p>
                </div>
                <Link to="/" className="text-red-600  text-xl  hover:text-red-500">
                    Logout
                </Link>
            </div>
        </div>
    )
}

export default Dashboard