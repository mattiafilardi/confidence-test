import React from 'react';
import {Location} from "../../../model/Location";

interface LocationListItemProps {
    location: Location,
    lastElementRef : React.Ref<HTMLDivElement>
}

const LocationListItem: React.FC<LocationListItemProps> = ({location, lastElementRef}) => {
    return (
        <div
            ref={lastElementRef}
            style={{ display: 'flex', alignContent: 'center', margin: 10, justifyContent: 'center', height: 500, width: 500 }}
            key={location.locationId}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {location.locationDetails}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {location.locationType}
            </p>
        </div>
    );
};

export default LocationListItem;