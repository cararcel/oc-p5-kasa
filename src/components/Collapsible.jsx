import React from 'react';
import { useState, useEffect, useRef } from 'react';
import '../styles/collapsible.scss';
import ArrowDown from './icons/ArrowDown';
import ArrowUp from './icons/ArrowUp';

const Collapsible = ({ open, children, title }) => {
    const [isOpen, setIsOpen] = useState(open);

    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };
    useEffect(() => {
        if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
        else setHeight(0);
    }, [isOpen]);

    return (
        <>
            <div className="collapsible">
                <div className="collapsible-close">
                    <h6 className="collapsible-title">Title</h6>
                    <button
                        type="button"
                        className={
                            isOpen
                                ? 'open collapsible-btn '
                                : 'close collapsible-btn '
                        }
                        onClick={handleFilterOpening}
                    >
                        <ArrowDown />
                    </button>
                </div>

                <div className="collapsible-open" style={{ height }}>
                    <div className="collapsible-content" ref={ref}>
                        <ul>
                            <li>Climatisation</li>
                            <li>Wi-Fi</li>
                            <li>Cuisine</li>
                            <li>Espace de travail</li>
                            <li>Fer à repasser</li>
                            <li>Sèche-cheveux</li>
                            <li>Cintres</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collapsible;
