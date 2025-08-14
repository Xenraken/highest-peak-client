import SearchBar from "./SearchBar"
import ButtonCreate from "./ButtonCreate";
import { useAuth } from "../contexts/AuthContext";
import { Outlet, Link, useNavigate } from "react-router-dom";


function Layout() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col">
            {/* Header */}
            <header className="bg-gray-800 shadow-lg border-b border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Navigation */}
                    <div className="flex justify-between items-center py-4">
                        <Link to="/" className="text-white text-xl sm:text-2xl font-bold hover:text-blue-400 transition-colors duration-200 no-underline">
                            <h1>Highest Peak</h1>
                        </Link>

                        <nav className="flex items-center gap-3 sm:gap-4">
                            {user ? (
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <Link to={`/user/${user.id}`} className="text-white text-sm sm:text-lg hover:text-blue-400 transition-colors duration-200 no-underline">
                                        <span>{user.name}</span>
                                    </Link>
                                    <ButtonCreate className="button" text="Logout" onClick={handleLogout} />
                                </div>
                            ) : (
                                <div className="flex gap-2 sm:gap-3">
                                    <Link to="/signup">
                                        <ButtonCreate className="button" text="Signup" />
                                    </Link>
                                    <Link to="/login">
                                        <ButtonCreate className="button" text="Login" />
                                    </Link>
                                </div>
                            )}
                        </nav>
                    </div>

                    {/* Search Bar */}
                    <div className="pb-4">
                        <SearchBar />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;