import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ label, options, selectedOption, onSelectedOptionChange }) => {

    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false)
        }
        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }

    }, [])

    const sortedOptions = options.map((sortedOption) => {
        if (sortedOption.value === selectedOption.value) {
            return null
        }
        return (
            <div onClick={() => onSelectedOptionChange(sortedOption)} key={sortedOption.value} className="item">
                {sortedOption.label}
            </div>
        )
    })

    return (
        <div className="ui segment">
            <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label">{label}</label>
                    <div onClick={() => {
                        setOpen(!open)
                    }} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selectedOption.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {sortedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;

