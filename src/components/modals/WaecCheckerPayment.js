import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Box, DialogContent, Divider, Paper, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";
import Slide from "@mui/material/Slide";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { CardGiftcard } from "@mui/icons-material";
import mtn from "../../assets/images/mtn4.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function WaecCheckerPayment({ open, setOpen }) {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const PlaceholderItem = ({ title, value }) => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // width: 300,
          }}
        >
          <Typography fontWeight="bold" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Typography>{value}</Typography>
        </Box>
        {/* <Divider sx={{ backgroundColor: "whitesmoke" }} /> */}
      </>
    );
  };

  return (
    <Dialog
      keepMounted
      TransitionComponent={Transition}
      onClose={handleClose}
      open={open}
    >
      <CardGiftcard  />
      <DialogTitle sx={{ textAlign: "center" }}>Payment Details</DialogTitle>
      <DialogContent>
        <PlaceholderItem title="BECE Results Checker" value="" />
        <Box sx={{ width:{xs:250,sm:300,md:400}, padding: 2 }}>
          <Stack spacing={6}>
            <Paper
              sx={{
                padding: 2,
                // backgroundColor: blue[700],
                // color: "#fff",
              }}
              elevation={2}
            >
              <PlaceholderItem title="Quantity" value="2" />
            </Paper>
            <PlaceholderItem title="Total" value="2" />
            <Avatar
              src={mtn}
              variant="square"
              sx={{ width: 100, height: 60, alignSelf: "center" }}
            />
            <Paper
              sx={{
                padding: 1,
                marginBottom: 4,
              }}
            >
              <Stack spacing={3}>
                <PlaceholderItem title="Email" value="Akwasi@gmail.com" />
                <PlaceholderItem title="Phone Number" value="0234789789" />
              </Stack>
            </Paper>

            <LoadingButton
              disableElevation
              fullWidth
              variant="contained"
              size="large"
              onClick={() => navigate("/checkout", { replace: true })}
            >
              Proceed to buy
            </LoadingButton>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

WaecCheckerPayment.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func,
  selectedValue: PropTypes.string.isRequired,
};

export default WaecCheckerPayment;
