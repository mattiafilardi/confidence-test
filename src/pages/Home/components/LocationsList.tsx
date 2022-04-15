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
            {locations.length > 0 && locations.map((location, index) => {
                    return <LocationListItem location={location}
                                             lastElementRef={locations.length - 1 === index ? lastElementRef : null}/>
                }
            )}
        </>
    );
};

export default LocationsList;