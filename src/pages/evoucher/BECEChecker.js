import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Box,
  Divider,
  Button,
  Avatar,
  MenuItem,
} from "@mui/material";
import logo from "../../assets/images/waec.jpg";
import logo2 from "../../assets/images/waec2.jpg";
import WaecCheckerPayment from "../../components/modals/WaecCheckerPayment";
function BECEChecker() {
  const [openWaec, setOpenWaec] = useState(false);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection:'column',
          alignItems: "center",
          justifyContent: "center",
          width: { xs: 350, md: 768, lg: 1200 },
       
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          paddingBottom={3}
        >
          <Avatar src={logo2} />
          <Typography variant="h5">BECE RESULTS CHECKER PINS</Typography>
        </Stack>

        <Divider sx={{ marginBottom: 4 }} />

        <Box
          maxWidth={350}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Paper elevation={3} sx={{ padding: 3, width: "100%" }}>
              <Grid container>
                <Grid item xs={12}>
                  <Stack spacing={4}>
                    <TextField
                      select
                      variant="outlined"
                      placeholder="Select Exams Type"
                      label="Exams Type"
                      required
                      fullWidth
                    >
                      <MenuItem>BECE</MenuItem>
                      <MenuItem>WASSCE (School),WASSCE (Private)</MenuItem>
                      <MenuItem> NOV-DEC</MenuItem>
                      <MenuItem>SSCE,ABCE,GBCE</MenuItem>
                    </TextField>
                    <TextField
                      type="number"
                      variant="outlined"
                      placeholder="Enter Quantity"
                      label="Quantity"
                      required
                      fullWidth
                      aria-valuemin={0}
                    />
                    <TextField
                      variant="outlined"
                      placeholder="Amount"
                      label="Amount"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">GH¢</InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="start">p</InputAdornment>
                        ),
                        readOnly: true,
                      }}
                    />
                    <TextField
                      type="email"
                      variant="outlined"
                      placeholder="Enter Email Address here"
                      label="Email Address"
                      required
                    />

                    <TextField
                      type="tel"
                      variant="outlined"
                      placeholder="Enter Phone Number"
                      label="Phone Number"
                      required
                    />
                    <Stack spacing={3} paddingY={2}>
                      <Button
                        variant="contained"
                        disableElevation
                        disableRipple
                        size="large"
                        sx={{ paddingX: 5 }}
                        onClick={() => setOpenWaec(true)}
                      >
                        Buy
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Container>
      <WaecCheckerPayment open={openWaec} setOpen={setOpenWaec} />
    </>
  );
}

export default BECEChecker;
