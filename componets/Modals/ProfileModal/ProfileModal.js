import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import { Box } from "@mui/system";
import { Fab } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ProfileModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleUploadClick = (event) => {
    console.log();
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        selectedFile: [reader.result],
      });
    }.bind(this);
    console.log(url); // Would see a path?

    this.setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1,
    });
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        startIcon={<PersonSharpIcon />}
        sx={{ color: "#000" }}
      >
        Profile
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Profile
        </BootstrapDialogTitle>
        <Box
          sx={{
            display: "flex",
            paddingTop: "10px",
            paddingBottom: "14px",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              width: "80px",
            }}
          >
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <IconButton>
                <Fab component="span">icon</Fab>
              </IconButton>
            </label>
          </Box>
          <Box
            sx={{
              borderRadius: "4px",
              padding: "10px 0px",
              boxShadow: "none",
              border: "none",
              color: "rgb(85, 85, 85)",
              width: "100%",
              boxSizing: "border-box",
              fontWeight: "bold",
              fontSize: "26px",
              marginLeft: "28px",
            }}
          >
            Kinoti Dickens
          </Box>
        </Box>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
