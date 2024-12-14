"use client";
// components/Location.js
import { useEffect, useState } from "react";

const Location = ({ setLatLon }) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatLon({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    }
  }, [setLatLon]);

  return <div>Getting location...</div>;
};

export default Location;
