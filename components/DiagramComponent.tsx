"use client";

import React, { useEffect, useRef } from 'react';

interface DiagramComponentProps {
    code: string;
}

export default function DiagramComponent({ code }: DiagramComponentProps) {
    // In a real implementation with 'mermaid' installed, we would render the diagram here.
    // For now, to fix the build error without adding dependencies, we render the code.

    return (
        <div className="my-4 p-4 bg-gray-50 border rounded-md overflow-auto">
            <p className="text-sm text-gray-500 mb-2">Diagram (Mermaid):</p>
            <pre className="text-xs font-mono bg-gray-100 p-2 rounded">
                {code}
            </pre>
        </div>
    );
}
