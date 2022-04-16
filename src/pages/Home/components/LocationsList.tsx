import React from 'react';
import {Location} from "../../../model/Location";
import LocationListItem from "./LocationListItem";

interface LocationsListProps {
    locations: Location[],
    lastElementRef: React.Ref<HTMLDivElement>
}

const LocationsList: React.FC<LocationsListProps> = ({locations, lastElementRef}) => {
    return (
        <>
            <div className='lg:w-1/2 m-auto'>
                {locations.map((location, index) => {
                        return <LocationListItem location={location} key={location.locationId}
                                                 lastElementRef={locations.length - 1 === index ? lastElementRef : null}/>
                    }
                )}
            </div>
        </>
    );
};

export default LocationsList;
