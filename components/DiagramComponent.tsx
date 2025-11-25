"use client";

import React, { useEffect, useRef } from 'react';

interface DiagramComponentProps {
    code: string;
}

export default function DiagramComponent({ code }: DiagramComponentProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = React.useState<string>('');

    useEffect(() => {
        if (ref.current) {
            import('mermaid').then((mermaid) => {
                mermaid.default.initialize({ startOnLoad: false });
                mermaid.default.render(`mermaid-${Date.now()}`, code).then(({ svg }) => {
                    setSvg(svg);
                });
            });
        }
    }, [code]);

    return (
        <div className="my-4 p-4 bg-gray-50 border rounded-md overflow-auto flex justify-center">
            <div ref={ref} dangerouslySetInnerHTML={{ __html: svg }} />
        </div>
    );
}
