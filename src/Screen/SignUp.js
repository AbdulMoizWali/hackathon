import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { userSignUp } from "../Firebase/FirebaseMethods";
import SMTextField from "../Components/SMTextField";
import SMButton from "../Components/SMButton";
import { useNavigate } from "react-router-dom";
import { Alert } from "bootstrap";
import SMDropdown from "../Components/SMDropdown";

export default function SignUp() {
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const moveToScreen = (route) => {
        navigate(route);
    }

    const handleSubmit = () => {
        if(userData.password == userData.cpassword){
            userSignUp(userData).then((res)=>{
                moveToScreen("/");
            }).catch((error)=>{
                alert(error);
            })
        }
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <SMTextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Username"
                            name="Username"
                            autoComplete="Username"
                            autoFocus
                            onChange={(e)=>{
                                userData.Username = e.target.value;
                            }}
                        />
                        <SMTextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e)=>{
                                userData.email = e.target.value;
                            }}
                        />
                        <SMTextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={(e)=>{
                                userData.password = e.target.value;
                            }}
                        />
                        <SMTextField
                            margin="normal"
                            required
                            fullWidth
                            name="cpassword"
                            label="Confirm Password"
                            type="password"
                            id="cpassword"
                            onChange={(e)=>{
                                userData.cpassword = e.target.value;
                            }}
                        />
                        <SMTextField
                            margin="normal"
                            required
                            fullWidth
                            id="Contact"
                            label="Contact"
                            name="Contact"
                            autoComplete="Contact"
                            autoFocus
                            onChange={(e)=>{
                                userData.Contact = e.target.value;
                            }}
                        />
                        <SMDropdown options={["Transporter", "User"]} onSelectChange={(e)=>{
                            userData.userType = e.target.value;
                        }} />
                        <SMButton
                            label="Sign up"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        />
                    
                        <Grid container>
                            <Grid item>
                                <Button onClick={() => {
                                    moveToScreen("/login")
                                }} variant="body2">
                                    {"Already have an account? Login"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}