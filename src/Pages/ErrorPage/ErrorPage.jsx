import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError() || {};

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/LRRdk9W/pexels-photo-4439425.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h2 className="text-2xl font-bold mt-5">
                        <span className="text-red-500">Error</span> {status || 404}
                    </h2>
                    <p className="text-lg">{error?.message}</p>
                    <Link to="/" className="mt-5 text-blue-500 hover:underline">
                        Back to homepage
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ErrorPage;