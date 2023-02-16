import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import EditPopup from '../editpopup/EditPopup'
import DeletePopup from '../deletepopup/DeletePopup'


import { Button, Avatar, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    height: '40px',
    justifyContent: "center"
}));

export default function SetDetail({ set }) {
    const [editPopup, setEditPopup] = useState(false)
    const [deletePopup, setDeletePopup] = useState(false)
    return (
        <Box sx={{ flexGrow: 1, padding: "20px" }}>
            <Grid container spacing={2} style={{ display: "flex", alignItems: "center" }}>
                <Grid xs={4} md={1}>
                    <Avatar alt={set.name} src={set.thumb_cdn} sx={{ height: "100px", width: "100px" }} />
                </Grid>
                <Grid xs={8} md={4}>
                    <Item>
                        <Typography sx={{ fontWeight: 'bold' }} >Name</Typography>
                        <Typography >{set.name}</Typography>
                    </Item>
                </Grid>
                <Grid xs={8} md={4}>
                    <Item>
                        <Typography sx={{ fontWeight: 'bold' }}>Short Name</Typography>
                        <Typography >{set.short_name}</Typography>
                    </Item>
                </Grid>
                <Grid xs={4} md={1} >
                    <Button variant="outlined" startIcon={<EditIcon />} onClick={() => setEditPopup(true)}>
                        Edit Set
                    </Button>
                </Grid>
                <Grid xs={4} md={1} >
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => setDeletePopup(true)} >Delete Set</Button>
                </Grid>
                <Grid xs={4} md={1} >
                    <Button variant="outlined" startIcon={<AddIcon />} >Add Sticker</Button>
                </Grid>
            </Grid>
            <EditPopup open={editPopup} setOpen={setEditPopup}>
            </EditPopup>

            <DeletePopup open={deletePopup} setOpen={setDeletePopup}>

            </DeletePopup>

        </Box >
    );
}