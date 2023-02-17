import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import UploadIcon from '@mui/icons-material/Upload';
import SaveIcon from '@mui/icons-material/Save';
import { DataGrid } from '@mui/x-data-grid';
import "./createsetform.scss"


const columns = [
    {
        field: 'sticker', headerName: 'Sticker', width: 400, renderCell: (params) => {
            return (
                <div className='cellWithImg'>
                    <img className='cellImg' src={params.row.sticker} alt="Sticker" />
                </div>
            )
        },
        sortable: false
    },
    { field: 'emoji', headerName: 'Emoji', width: 400, sortable: false },
    { field: 'voice', headerName: 'Voice', width: 400, sortable: false },
    // {
    //     field: 'action',
    //     headerName: 'Action',
    //     width: 300,
    //     sortable: false,
    //     disableClickEventBubbling: true,

    //     renderCell: (params) => {
    //         alert(JSON.stringify(params.row))
    //         return (
    //             <Stack direction="row" spacing={3}>
    //                 <Button variant="outlined" color="warning" size="small" >Remove</Button>
    //             </Stack>
    //         );
    //     },
    // }
];

export default function CreateSetForm() {
    const [thumb, setThumb] = useState()
    const [set, setSet] = useState([])

    useEffect(() => {
        return () => {
            thumb && URL.revokeObjectURL(thumb)
        }
    }, [thumb, set])

    const handePreviewThumb = (values) => {
        const file = values.target.files[0]
        file.preview = URL.createObjectURL(file)
        setThumb(file.preview)
    }

    const handePreviewSticker = (values) => {
        console.log(values)
        const file = values.target.files[0]
        console.log(file)
        const preview = URL.createObjectURL(file)
        console.log(preview)
        setSet([...set, { sticker: preview }])
    }

    return <Box m="20px">
        <Grid container spacing={1.5} style={{ display: "flex", alignItems: "center" }}>
            <Grid xs={4} md={1.5}>
                <img
                    src={thumb}
                    alt='Set'
                    style={{ width: '150px', height: "150px" }} />
            </Grid>
            <Grid xs={4} md={2}>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
            </Grid>
            <Grid xs={4} md={8} >
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </Grid>
            <Grid xs={4} md={1.5}>
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<UploadIcon />}
                >
                    Upload Set
                    <input
                        accept="image/*"
                        type="file"
                        hidden
                        onChange={(e) => {
                            handePreviewThumb(e)
                        }}
                    />
                </Button>
            </Grid>
            <Grid xs={4} md={1.5} >
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<UploadIcon />}
                >
                    Upload Sticker
                    <input
                        accept="image/*"
                        type="file"
                        hidden
                        onChange={(e) => {
                            handePreviewSticker(e)
                        }}
                    />
                </Button>
            </Grid>
        </Grid>
        <div className='table'>
            <DataGrid
                getRowHeight={() => 'auto'}
                rows={set}
                columns={columns}
                getRowId={(row) => row.sticker}
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
            />
        </div>
    </Box>
}




