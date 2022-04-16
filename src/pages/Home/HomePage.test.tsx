import HomePage from "./HomePage";
import {render, waitFor} from "@testing-library/react";
import useLocations from "../../hooks/useLocations";

jest.mock('../../hooks/useLocations');

const mockUseLocations = useLocations as jest.MockedFunction<typeof useLocations>

const mockLocations = {
    "locations": [
        {
            "id": 50471,
            "locationId": "GENDBKXF",
            "locationName": "R5Labs HQ",
            "locationDetails": "R5Labs",
            "locationType": "General",
            "numberofDevices": 0,
            "address": {
                "addressLine1": "901 Jefferson Avenue",
                "addressLine2": "",
                "city": "Redwood City",
                "state": "CA",
                "zip": "94063"
            },
            "locationUserRole": "Owner",
            "active": false,
            "newLocation": false,
            "subscriptionActive": false,
            "longitude": -122.228098,
            "latitude": 37.484759
        },
        {
            "id": 95144,
            "locationId": "HOM49XD6",
            "locationName": "Non Seq - Amit's workspace",
            "locationDetails": "",
            "locationType": "Personal",
            "numberofDevices": 0,
            "address": {
                "addressLine1": "Geng Road",
                "addressLine2": "",
                "city": "Palo Alto",
                "state": "CA",
                "zip": "94303"
            },
            "locationUserRole": "Owner",
            "active": false,
            "newLocation": false,
            "subscriptionActive": false,
            "longitude": -122.119496,
            "latitude": 37.451601
        },
        {
            "id": 82809,
            "locationId": "BUS134NE",
            "locationName": "Validate Workspace White Screen",
            "locationDetails": "Validate Workspace White Screen",
            "locationType": "Business",
            "numberofDevices": 0,
            "address": {
                "addressLine1": "11 Van Ness Avenue",
                "addressLine2": "",
                "city": "San Francisco",
                "state": "CA",
                "zip": "94102"
            },
            "locationUserRole": "Owner",
            "active": true,
            "newLocation": false,
            "subscriptionActive": false,
            "longitude": -122.418823,
            "latitude": 37.774538
        }
    ],
    "numberOfLocations": 19
}

beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
});

test('Render Home with no locations', async () => {
    mockUseLocations.mockReturnValue({
        isLoading: false,
        locations: [],
        error: null
    });

    const {getByText} = render(<HomePage />)

    await waitFor(() =>
        expect(getByText('There\'s nothing here...')).toBeInTheDocument()
    )
})

test('Render Home with locations', async () => {
    mockUseLocations.mockReturnValue({
        isLoading: false,
        locations: mockLocations.locations,
        error: null
    });

    const {getByText} = render(<HomePage />)

    await waitFor(() =>
        expect(getByText('R5Labs')).toBeInTheDocument()
    )
})

test('Handlers server error', async () => {
    mockUseLocations.mockReturnValue({
        isLoading: false,
        locations: [],
        error: 'Network request failed'
    });

    const {getByRole} = render(<HomePage />)
    await waitFor(() =>
        expect(getByRole('alert')).toHaveTextContent('Network request failed')
    )
})

test('Render Loading', async () => {
    mockUseLocations.mockReturnValue({
        isLoading: true,
        locations: [],
        error: null
    });

    const {getByTestId} = render(<HomePage />)
    await waitFor(() =>
        expect(getByTestId('loader')).toBeInTheDocument()
    )
})




