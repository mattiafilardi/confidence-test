import React from 'react';
import {Location} from "../../../model/Location";

interface LocationListItemProps {
    location: Location,
    lastElementRef: React.Ref<HTMLDivElement>
}

const LocationListItem: React.FC<LocationListItemProps> = ({location, lastElementRef}) => {
    return (
        <div className="rounded-2xl overflow-hidden shadow-md bg-blue m-16" ref={lastElementRef}>
            <div className="px-10 py-10">
                <div className="font-bold text-2xl mb-4 text-white">
                    {location.locationDetails.length ? location.locationDetails : location.locationName}
                </div>
                <p className="text-white italic">
                    {location.address.city} ({location.address.state}), {location.address.addressLine1}, {location.address.zip}
                </p>
            </div>
            <div className="px-10 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue mr-2 mb-2">
                    {location.locationType}
                </span>
            </div>
        </div>
    );
};

export default LocationListItem;