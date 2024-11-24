import React, { ReactNode } from 'react';

const Regular = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <div className={className}>{children}</div>;
};

const Bold = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <div className={[className, 'font-bold'].join(' ')}>{children}</div>;
};

const Header = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <div className={[className, 'font-bold text-2xl'].join(' ')}>{children}</div>;
};

const Text = {
    Header: Header,
    Bold: Bold,
    Regular: Regular,
};

export default Text;
