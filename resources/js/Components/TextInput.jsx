import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});

// import React, { useEffect, useRef } from 'react';

// function TextInput({ type = 'text', className = '', isFocused = false, innerRef, ...props }) {
//     const inputRef = innerRef || useRef();

//     useEffect(() => {
//         if (isFocused && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [isFocused, inputRef]);

//     return (
//         <input
//             {...props}
//             type={type}
//             className={
//                 'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
//                 className
//             }
//             ref={inputRef}
//         />
//     );
// }

// export default TextInput;
