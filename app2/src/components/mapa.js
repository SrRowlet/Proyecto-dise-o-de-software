import React, { Component } from 'react';
import GoogleMaps from "simple-react-google-maps";
export default class Maps extends Component{
    render()   {
        return (
            <div className="container">
                <GoogleMaps
                    apiKey={"AIzaSyAOS1taYdY2YgdlJhThlEx8qzIztDTnsYw"}
                    style={{height:"350px", width: "550px" }}
                    zoom={16}
                    center={{
                        lat: -35.4263515,
                        lng: -71.6594959,
                    }}
                    markers={{
                        lat: -35.4263515,
                        lng: -71.6594959,
                    }}
                />
            </div>
        );
    }   
}