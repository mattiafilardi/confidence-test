import React from 'react';

interface ErrorAlertProps {
    error: string
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({error}) => {
    return (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 mx-10" role="alert">
            <span className="font-medium">Oops, failed to fetch!</span>
            <span className="font-medium">{error}</span>
        </div>
    );
};

export default ErrorAlert;
