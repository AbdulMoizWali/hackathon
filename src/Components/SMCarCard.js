import { ArrowRightAltRounded, OpenInBrowserOutlined, OpenInNew } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function SMCarCard({id, carName, carImage, Details, Description}){
    const params = useParams();
    const navigate = useNavigate();
    let moveToSinglePostWithID = (id) => {
        navigate(`/${id}`);
    }
    return (
        <>
            <Card onClick={() => moveToSinglePostWithID(id)} style={{
                margin: "20px 0",
                 padding: "5px 10px",
                boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
            }} sx={{ maxWidth: 375, height: 430}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={carImage}
                    alt={carName}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {carName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {Details}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {Description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                    endIcon={<ArrowRightAltRounded />}
                     style={{
                        borderRadius: 50,
                        // backgroundColor: "#00308F",
                        marginLeft: "auto",
                        border: "1px solid #0067FB",
                        padding: "2px 25px",
                        fontSize: "13px",
                        textTransform: 'none'
                    }}
                    // variant="contained"
                    
                     size="small" color="primary" >
                    View more
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}