import Dialog from '@mui/material/Dialog';
import { Button, DialogContent, DialogTitle } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function EditPopup(props) {
    const { open, setOpen } = props

    return (
        <Dialog open={open}>
            <DialogTitle>
                Edit Set
                <IconButton sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                }} color="primary" onClick={() => setOpen(false)} ><CloseIcon /></IconButton>
            </DialogTitle>
            <DialogContent >
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <TextField id="filled-basic" label="Short Name" variant="outlined" />
                </Box>
                <div style={{ textAlign: 'right', padding: "10px" }}>
                    <Button variant="outlined" startIcon={<SaveAsIcon />} onClick={() => setOpen(false)} >Save</Button>
                </div>
            </DialogContent>
        </Dialog >
    )
}