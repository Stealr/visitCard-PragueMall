import { InputMask } from '@react-input/mask';
import { useState, useRef, useEffect } from 'react';

export default function Input({ children, textarea, value, onChange, name, options = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value || '');
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setSelectedOption(value);
    }, [value]);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        const optionValue = option.value || option;
        const optionLabel = option.label || option;

        setSelectedOption(optionLabel);
        setIsOpen(false);

        // Создаем событие изменения для передачи в onChange
        const event = {
            target: {
                name,
                value: optionValue
            }
        };

        onChange(event);
    };

    let type;
    if (name === "email") {
        type = 'email';
    }

    return (
        <div className="form-group">
            <label>{children}</label>
            {textarea ? (
                <textarea name={name} value={value} onChange={onChange} required />
            ) : name === "phone" ? (
                <InputMask
                    mask="+7 (___) ___-__-__"
                    replacement={{ _: /\d/ }}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder='+7 (___) ___-__-__'
                    required
                />
            ) : name === "topic" ? (
                <div className="custom-select-container" ref={dropdownRef}>
                    <div
                        className={`custom-select ${isOpen ? 'open' : ''}`}
                        onClick={handleToggleDropdown}
                    >
                        <div className="selected-option">
                            {selectedOption || ''}
                        </div>
                        <div className="select-arrow">
                            <svg
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                            >
                                <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className={`options-container ${isOpen ? 'show' : ''}`}>
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="option"
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option.label || option}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <input name={name} value={value} onChange={onChange} type={type} required />
            )}
        </div>
    );
}