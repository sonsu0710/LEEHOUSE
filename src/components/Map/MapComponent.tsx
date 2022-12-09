import {GoogleMap, LoadScriptNext, MarkerF} from '@react-google-maps/api'
import {useMemo} from 'react'
import styled from 'styled-components'

function MapComponent() {
    const center = useMemo(() => ({lat: 35.2334, lng: 129.0911}), []);

    return (
        <Wrapper>
            <LoadScriptNext googleMapsApiKey={`${process.env.REACT_APP_PUBLIC_GOOGLE_API_KEY}`}>
                <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
                    <MarkerF position={center} />
                </GoogleMap>
            </LoadScriptNext>
        </Wrapper>
    )
}

export {MapComponent}

const Wrapper = styled.div`
  .map-container {
    width: 100%;
    height: 600px;
    border-bottom: solid 1px #ddd;
  }


`
