import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={'/'} className="text-2xl font-bold text-(--primary)" style={{ color: 'var(--primary)' }}>
                Shortify
            </Link>
        </div>
    );
};

export default Logo;