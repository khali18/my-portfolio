import React, { useEffect, useState } from 'react';

export default function MouseGlow({ isDark }) {
    const [pos, setPos] = useState({ x: -200, y: -200 });

    useEffect(() => {
        const handleMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    if (!isDark) return null;

    return (
        <div
            className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(56, 189, 248, 0.08), transparent 80%)`
            }}
        />
    );
}
