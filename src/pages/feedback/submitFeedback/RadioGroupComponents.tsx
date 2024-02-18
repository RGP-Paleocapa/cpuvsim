import React from 'react';

type RadioGroupComponentProps = {
    options: { id: string; value: string; label: string }[];
    name: string;
    selectedValue: string;
    onValueChange: (value: string) => void;
    label: string;
    required?: boolean; // Adding the required prop
};

export const RadioGroupComponent: React.FC<RadioGroupComponentProps> = ({
    options,
    name,
    selectedValue,
    onValueChange,
    label,
    required // Destructuring required prop
}) => {
    return (
        <div className="flex flex-col">
            <span className="text-xl font-semibold text-blue-700 dark:text-green-400 mb-2">
                {label}
                :
                {' '}{required && <span className="text-red-500">*</span>} {/* Render asterisk if required prop is true */}
            </span>
            <div className="flex items-center mb-2 dark:text-gray-100">
                {options.map((option) => (
                    <div key={option.id} className="mr-4 flex items-center">
                        <input
                            type="radio"
                            id={option.id}
                            name={name}
                            value={option.value}
                            className="mr-2"
                            onChange={() => onValueChange(option.value)}
                            checked={selectedValue === option.value}
                            // Conditionally add the required attribute to the input element
                            {...(required ? { required: true } : {})}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};
