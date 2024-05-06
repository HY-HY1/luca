import React from "react";

const Privacy = () => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">RYZENS LTD Data Policy</h1>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Personal Data Handling</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Data stored or processed electronically is kept within the EEA or may be transferred internationally through secure means to trusted third parties.</li>
                    <li>RYZENS LTD has contractual arrangements with third parties to maintain appropriate safeguards and protection for data.</li>
                    <li>Trusted third-party providers outside the EEA include Google LLC.</li>
                    <li>All physical media is securely retained by RYZENS  Wholesale Ltd. within the UK.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Data Retention</h2>
                <p>Data is retained for as long as reasonably necessary, depending on its nature.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-2">Cookies</h2>
                <p>Cookies are not utilized on this website.</p>
            </section>
        </div>
    );
};

export default Privacy;
