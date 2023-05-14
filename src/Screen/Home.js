import { useState } from "react";
import SMSearchAppBar from "../Components/SMAppbar";
import SMCarCard from "../Components/SMCarCard";
import { CarData } from "../CarData";

export default function Home(){
    return (
        <>
        <header>
            <SMSearchAppBar Title="Car Rental App" />
        </header>
        <div className="HomeBody">
            {
                CarData.map((Car, i)=>{
                    return (
                        <SMCarCard id={Car.id} carName={Car.Title} carImage={Car.Pic} Description={Car.Description} Details={Car.Model} key={i}  />
                    );
                })
            }
        </div>    
        </>
    )
}