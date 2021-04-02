import React,{useState} from 'react';
import toastr from "toastr";
import { BehaviorSubject } from "rx";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function CustomizedSnackbars(isOpen) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}
toastr.options = {
  positionClass: "toast-top-right",
  showDuration: "300",
  timeOut: 3000,
  closeButton: true,
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut"
};
// for global loader service
export const isLoading = new BehaviorSubject(false);

export const forSuccess = (message, title) => toastr.success(message, title);

export const forError = (message, title) => toastr.error(message, title);

export const forWarning = (message, title) => toastr.warning(message, title);

export const isDialogOpen = new BehaviorSubject(false);

export const getFullName = obj => {
  if (obj) return obj.first_name + " " + obj.last_name;
  else return "";
};

export const getSearchParams = (history, key) => {
  const queryParamsString = history.location.search.substring(1), // remove the "?" at the start
      searchParams = new URLSearchParams( queryParamsString );
  return searchParams.get(key)
};

export const currencyFormat = number => {
  let fixedTwo = parseFloat(number.toFixed(2));
  return new Intl.NumberFormat("en-IN").format(fixedTwo);
};

export const secondsToMinutes = (time) => {
  let sec = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
  return `${Math.floor(time / 60)}:${sec}`;
}