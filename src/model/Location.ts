export interface Address {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zip: string;
}

export interface Location {
    id: number;
    locationId: string;
    locationName: string;
    locationDetails: string;
    locationType: string;
    numberofDevices: number;
    address: Address;
    locationUserRole: string;
    active: boolean;
    newLocation: boolean;
    subscriptionActive: boolean;
    longitude: number;
    latitude: number;
}

export interface LocationsRequest {
    locations: Location[];
    numberOfLocations: number;
}