import * as React from 'react';
import './settable.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import { DataGrid } from '@mui/x-data-grid';
import { Stack, Button } from '@mui/material'
import { Link } from 'react-router-dom'



const size = 10

const columns = [
    { field: 'id', headerName: 'ID', width: 70, sortable: false },
    {
        field: 'stickerSet', headerName: 'Sticker Set', width: 600, renderCell: (params) => {
            return (
                <div className='cellWithImg'>
                    <img className='cellImg' src={params.row.thumb_cdn} alt={params.row.name} />
                    {params.row.name}
                </div>
            )
        },
        sortable: false
    },
    { field: 'short_name', headerName: 'Short Name', width: 400, sortable: false },
    {
        field: 'action',
        headerName: 'Action',
        width: 300,
        sortable: false,
        disableClickEventBubbling: true,

        renderCell: (params) => {
            const currentRow = params.row;
            const url = `/set/${currentRow.id}`
            const onClick = (e) => {
                return alert(JSON.stringify(currentRow, null, 4));
            };

            return (
                <Stack direction="row" spacing={3}>
                    <Button variant="outlined" color="warning" size="small" component={Link} to={url} >Detail</Button>
                    <Button variant="outlined" color="warning" size="small" onClick={onClick}>EDIT</Button>
                    <Button variant="outlined" color="error" size="small" onClick={onClick}>Delete</Button>

                </Stack>
            );
        },
    }
];



export default function SetTable() {
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)
    const [sets, setSets] = useState([])
    const [page, setPage] = useState(0);



    useEffect(() => {
        console.log(loading)
        const url = `http://sticker.tuntran.com/v1/sticker/sets?limit=${size}&offset=${page * size}`
        axios.get(url)
            .then(function (response) {
                const newSets = response.data.data.sets
                newSets.forEach((element) => {
                    if (element.thumb_cdn === "") {
                        element.thumb_cdn = '/error.png'
                    }
                })
                setCount(response.data.data.count)
                setSets(newSets)
                setLoading(false)
            })
            .catch(function (error) {
                setLoading(false)
                console.log(error)
            })

    }, [page, loading]);


    return loading ? (<Loading />) : (
        <div className='settable'>
            <DataGrid
                rowCount={Math.ceil(count / size)}
                page={page}
                getRowHeight={() => 'auto'}
                rows={sets}
                columns={columns}
                pageSize={size}
                onPageChange={(newPage) => setPage(newPage)}
                paginationMode="server"
                rowsPerPageOptions={[10]}
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
            />
        </div>
    );

}