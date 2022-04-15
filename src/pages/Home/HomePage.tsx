import React, {useCallback, useRef, useState} from 'react';
import useLocations from "../../hooks/useLocations";
import Loader from "../../components/Loader";
import LocationsList from "./components/LocationsList";

const HomePage = () => {
    const [page, setPage] = useState<number>(0);
    const {isLoading, locations} = useLocations(page)
    const ref = useRef<IntersectionObserver>();

    const lastLocationElementRef = useCallback((node: HTMLDivElement) => {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }

        if (isLoading) return
        if (ref.current) ref.current.disconnect()
        ref.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(prevPageNumber => prevPageNumber + 1)
            }
        }, options)
        if (node) ref.current.observe(node)
    }, [isLoading])

    return (
        <div>
            <LocationsList locations={locations} lastElementRef={lastLocationElementRef}/>
            {isLoading && <Loader />}
        </div>
    )
};

export default HomePage;