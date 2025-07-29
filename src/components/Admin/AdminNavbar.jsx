import React from "react";
import { Link } from "react-router-dom"; // Add this import

const AdminNavbar = () => {
    return (
        <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30">
            <Link to="/" className="max-md:flex-1">
                <h1 className="text-3xl font-semibold tracking-tight">
                    <span
                      style={{
                        fontFamily: "Algerian, serif",
                        color: "#e63946",
                      }}
                    >
                      M
                    </span>
                    <span
                      style={{
                        fontFamily: '"Baskerville Old Face", serif',
                        color: "#f1f1f1",
                      }}
                    >ovie 
                    </span>
                    <span
                      style={{
                        fontFamily: "Algerian, serif",
                        color: "#e63946",
                      }}
                    >
                    M
                    </span>
                    <span
                      style={{
                        fontFamily: '"Baskerville Old Face", serif',
                        color: "#f1f1f1",
                      }}
                    >agic
                    </span>
                </h1>
            </Link>
        </div>
    );
};

export default AdminNavbar;