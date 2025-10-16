import React from "react";
export default function Section({ id, title, subtitle, children }) {
    return (
        <section id={id} className="container-hero py-20 md:py-28">
            <div className="mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
                {subtitle && (
                    <p className="mt-2 text-slate-400 max-w-2xl">{subtitle}</p>
                )}
            </div>
            {children}
        </section>
    )
}