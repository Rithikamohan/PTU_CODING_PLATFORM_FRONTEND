//import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, Button } from '@material-ui/core';
import { CloseOutlined } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
  dialogWrapper: {
      padding: theme.spacing(2),
      position: 'absolute',
      top: theme.spacing(5)
  },
  dialogTitle: {
      paddingRight: '0px'
  }
}))

export default function Popup(props) {
  
  const{title,children,openPopup,setOpenPopup}=props;
const classes =useStyles();
  
    return (
      <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
      <div style={{display:'flex'}}>
      <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
        {title}
      </Typography>
   
      <Button
                        color="secondary"
                onClick={()=>{setOpenPopup(false)}}
>
  <CloseOutlined/>
                     
                    </Button>
      </div>
    </DialogTitle>
    <DialogContent>
        {children}
           </DialogContent>
</Dialog>
  )
}
