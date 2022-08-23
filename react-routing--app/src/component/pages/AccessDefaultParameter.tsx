import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export const AccessDefaultParameter =()=>{

    const {appid} = useParams();

    return(
        <>
            <h1>Default parameter is being passed from the URL {appid}</h1>
        </>
    )
}