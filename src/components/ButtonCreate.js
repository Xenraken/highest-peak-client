function ButtonCreate({ className, text, onClick }) {
    return (
        <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default ButtonCreate;
