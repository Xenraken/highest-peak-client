import React from 'react';

const FloatingLabelInput = ({
    type = "text",
    value,
    onChange,
    label,
    placeholder = " "
}) => {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`
                    w-full px-4 py-3 bg-gray-700 border border-gray-600 
                    rounded-lg text-white placeholder-transparent 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:border-transparent transition-all duration-300 peer
                `}
            />
            <label className={`
                absolute left-4 top-3 text-gray-400 
                transition-all duration-300 pointer-events-none 
                peer-focus:text-blue-500 peer-focus:-top-6 peer-focus:left-0 
                peer-focus:scale-75 
                peer-[-webkit-autofill]:-top-6 peer-[-webkit-autofill]:scale-75 peer-[-webkit-autofill]:left-0
                peer-[-webkit-autofill]:text-blue-500 
                peer-[&:not(:placeholder-shown)]:-top-6 
                peer-[&:not(:placeholder-shown)]:left-0  
                peer-[&:not(:placeholder-shown)]:scale-75 
                peer-[&:not(:placeholder-shown)]:text-blue-500
            `}>
                {label}
            </label>
        </div>
    );
};

export default FloatingLabelInput; 