import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import ges from "../../assets/images/ges.jpg";
import ecg from "../../assets/images/ecg.jpg";
import waec from "../../assets/images/waec2.jpg";
import university from "../../assets/images/university2.jpg";
import cinema_ticket from "../../assets/images/cinema_ticket.jpg";
import stadia_ticket from "../../assets/images/stadia_ticket.jpg";
import security_service from "../../assets/images/security_service.webp";
import "../../styles/App.scss";
function Shop() {
  const cardStyles = () => {
    return {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingY: 2,
      transition: "all 250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.04)",
      },
    };
  };

  return (
    <Box
      sx={{
        paddingY: 20,
        paddingX: 5,
        // backgroundColor: "#000",
        backgroundImage: ` linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 0,0, 0.5)),
        url(${waec}); `,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Card sx={cardStyles()}>
            <CardHeader title="WAEC RESULTS CHECKERS" />
            <CardMedia
              component="img"
              image={waec}
              alt="imag"
              height={100}
              width={100}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography id="evoucher">
                Buy school placement check with ease with just a single click
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="button-link" to="bece-checker">
                Proceed to buy
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyles()}>
            <CardHeader title="SCHOOL PLACEMENT CHECKER" />
            <CardMedia
              component="img"
              image={ges}
              alt="imag"
              height={100}
              width={100}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography component="div">
                Buy school placement check with ease with just a single click
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="button-link" to="school-placement">
                Proceed to buy
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card sx={cardStyles()}>
            <CardHeader title="SECURITY SERVICE FORM TICKETS " />
            <CardMedia
              component="img"
              image={security_service}
              alt="imag"
              height={100}
              width={100}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography component="div">
                <p>Buy </p>
                <ul>
                  <li>BECE results checker</li>
                  <li>SSCE, WASSCE, WASSCE NOVDEC, ABCE checker</li>
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="button-link" to="security-service">
                Proceed to buy
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={cardStyles()}>
            <CardHeader title="UNIVERSITY FORMS PINCODE" />
            <CardMedia
              component="img"
              image={university}
              alt="imag"
              height={100}
              width={100}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography component="div">
                <p>Buy </p>
                <ul>
                  <li>BECE results checker</li>
                  <li>SSCE, WASSCE, WASSCE NOVDEC, ABCE checker</li>
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="button-link" to="university-form">
                Proceed to buy
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card sx={cardStyles()}>
            <CardHeader title="CINEMA TICKETS " />
            <CardMedia
              component="img"
              image={cinema_ticket}
              alt="imag"
              height={100}
              width={100}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography component="div">
                <p>Buy </p>
                <ul>
                  <li>BECE results checker</li>
                  <li>SSCE, WASSCE, WASSCE NOVDEC, ABCE checker</li>
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="button-link" to="cinema-ticket">
                Proceed to buy
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card sx={cardStyles()}>
            <CardHeader title="STADIUM TICKETS" />
            <CardMedia
              component="img"
              image={stadia_ticket}
              alt="imag"
              height={100}
              width={100}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography component="div">
                <p>Buy </p>
                <ul>
                  <li>BECE results checker</li>
                  <li>SSCE, WASSCE, WASSCE NOVDEC, ABCE checker</li>
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Link className="button-link" to="stadia-ticket">
                Proceed to buy
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Shop;
