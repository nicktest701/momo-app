import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import ges from "../assets/images/ges.jpg";
import ecg from "../assets/images/ecg.jpg";
import airtime from "../assets/images/airtime3.jpg";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "../styles/App.scss";

function HomeCards() {
  return (
    <Box
      sx={{
        paddingY: 20,
        paddingX: 5,
        backgroundColor: grey[300],
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "center", paddingBottom: 10 }}>
        Our Services
      </Typography>

      <Grid container spacing={3} display="flex" flexDirection="row">
        <Grid item md={4}>
          <Card>
            <CardHeader title="E-VOUCHERS" />
            <CardMedia
              component="img"
              image={ges}
              alt="imag"
              height={200}
              width={100}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography component="div" id="evoucher">
                <p>Buy </p>
                <ul>
                  <li>BECE results checker</li>
                  <li>SSCE, WASSCE, WASSCE NOVDEC, ABCE checker</li>
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="evoucher" className="button-link">
                Proceed to buy
              </Link>
              <KeyboardArrowRight />
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card>
            <CardHeader title="PREPAID UNITS" />
            <CardMedia
              component="img"
              image={ecg}
              alt="imag"
              height={200}
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
              <Button
                href="prepaid"
                variant="contained"
                color="success"
                endIcon={<KeyboardArrowRight />}
              >
                Proceed to buy
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardHeader title={`BULK AIRTIME AND EVD’s`} />
            <CardMedia
              component="img"
              image={airtime}
              alt="imag"
              height={200}
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
              <Button
                href="airtime"
                variant="contained"
                color="success"
                endIcon={<KeyboardArrowRight />}
              >
                Proceed to buy
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeCards;
