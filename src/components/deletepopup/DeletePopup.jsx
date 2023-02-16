import Dialog from '@mui/material/Dialog';
import { Button, DialogContent, DialogTitle, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function DeletePopup(props) {
    const { open, setOpen } = props

    return (
        <Dialog open={open}>
            <DialogTitle>
                Delete Set
                <IconButton sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                }} color="primary" onClick={() => setOpen(false)} ><CloseIcon /></IconButton>
            </DialogTitle>
            <DialogContent >
                <Typography>Bạn chắc chắn muốn xoá Sticker Set</Typography>
                <div style={{ textAlign: 'right', paddingTop: "20px" }}>
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => setOpen(false)} >Delete</Button>
                </div>
            </DialogContent>
        </Dialog >
    )
}