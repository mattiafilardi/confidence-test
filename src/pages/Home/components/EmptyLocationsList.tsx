import React from 'react';

const EmptyLocationsList = () => {
    return (
        <div className="p-8 text-center border border-gray-200 rounded-lg mx-20">
            <h2 className="text-2xl font-medium">
                There's nothing here...
            </h2>

            <p className="mt-4 text-sm text-gray-500">
                Locations will appear here, try refresh page!
            </p>
        </div>
    );
};

export default EmptyLocationsList;
