import { Button, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { CarData } from "../CarData";
import SMSearchAppBar from "../Components/SMAppbar";

export default function ViewSingleCar(){
    const params = useParams();
    const navigate = useNavigate();
    const CarObject = () => CarData.find((Car)=> (Car.id == params.id));
    const CarObj = CarObject();
    const handleBookNow = () =>  {
        
    }
    return (
        <>
        <header>
            <SMSearchAppBar Title="Car Rental App" ShowSearchBar={false} />
        </header>
            {
                <div style={{       
                    // height: "100vh",
                    // backgroundImage: "https://png.pngtree.com/thumb_back/fh260/background/20210310/pngtree-holographic-abstract-hazy-colored-light-blobs-image_579660.jpg",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <div style={{
                        padding: "50px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        // justifyContent: "center",
                        boxShadow: "0px 6px 12px -2px rgba(50, 50, 93, 0.25),  0px 3px 7px -3px rgba(0, 0, 0, 0.3)"
                    }}>
                        <div>
                            <img src={CarObj.Pic} alt={CarObj.Title} />
                        </div>
                        <div>
                            <h1>{CarObj.Title}</h1>
                            <hr />
                            <div className="Container">
                                <h2>Details:</h2>
                                <p>Model: {CarObj.Model}</p>
                                <p>Price: {CarObj.Price} /-</p>
                            </div>

                            <div className="Container">
                                <h2>Feature:</h2>
                                <p>AC: {CarObj.AC}</p>
                                <p>GPS{CarObj.GPS}</p>
                                <p>Bluetooth: {CarObj.Bluetooth}</p>
                                <p>USBPort: {CarObj.USBPort}</p>
                            </div>

                            <div className="Container">
                                <h2>Description:</h2>
                                <p>{CarObj.Description}</p>
                            </div>                            

                            <Button onClick={handleBookNow}>Book Now</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}