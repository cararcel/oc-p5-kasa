import React from 'react';
import { useState, useEffect, useRef } from 'react';
import '../styles/collapsible.scss';
import ArrowDown from './icons/ArrowDown';

const Collapsible = ({ open, children, title }) => {
    const [isOpen, setIsOpen] = useState(open);
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    const handleFilterOpening = () => {
        //update isOpen, so if isOpen was true, it will become false-
        setIsOpen((prev) => !prev);
    };

    //Updating state based on previous state from an Effect
    useEffect(() => {
        if (isOpen) {
            setHeight(ref.current?.getBoundingClientRect().height);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <>
            <div className="collapsible" data-testid="collapsible">
                <button
                    type="button"
                    className={`collapsible-header ${
                        isOpen
                            ? 'collapsible-header--open'
                            : 'collapsible-header--close'
                    }`}
                    onClick={handleFilterOpening}
                >
                    <h6
                        className="collapsible-title"
                        data-testid="collapsible-title"
                    >
                        {title}
                    </h6>
                    <ArrowDown />
                </button>

                <div
                    className="collapsible-main"
                    data-testid="collapsible-main"
                    style={{ height }}
                >
                    <div
                        className="collapsible-content"
                        data-testid="collapsible-content"
                        ref={ref}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collapsible;
