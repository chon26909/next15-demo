'use client';
import React, { useRef, useState } from 'react';
import './tooltip.css';

interface Dimension {
    triangleWidth: number;
    triangleHeight: number;
    radius: number;
}

const Tooltip = () => {
    const [value, setValue] = useState(10);

    const dimension = useRef<Dimension>({
        triangleWidth: 30,
        triangleHeight: 20,
        radius: 20,
    });

    const borderRadius = () => {
        const { triangleWidth, radius } = dimension.current;

        return [
            `min(${radius}px, ${value}% - ${triangleWidth}px / 2)`, //  border-top-left-radius
            `min(${radius}px, 100% - ${value}% - ${triangleWidth}px / 2)`, // border-top-right-radius
            `${radius}px`, // border-bottom-right-radius
            `${radius}px`, // border-bottom-left-radius
            `/`,
            `${radius}px`, // vertical radius
        ].join(' ');
    };

    return (
        <div>
            <input
                type='range'
                step='.01'
                min='0'
                max='1'
                value={value / 100}
                onChange={(e) => setValue(Number(e.target.value) * 100)}
            />
            <div
                className='w-full tooltip relative'
                style={{
                    borderRadius: borderRadius(),
                    marginTop: `${dimension.current.triangleHeight}px`,
                }}
            >
                <div
                    className='absolute left-0 right-0 bottom-0 bg-inherit triangle'
                    style={{
                        top: `${dimension.current.triangleHeight * -1}px`,
                    }}
                />
                <div className='content'>This is a simple Tooltip </div>
            </div>
        </div>
    );
};

export default Tooltip;
