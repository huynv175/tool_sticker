import * as React from 'react';
import './stickertable.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';

import Loading from '../loading/Loading';

import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Typography } from '@mui/material';


const size = 10

const columns = [
    { field: 'document_id', headerName: 'ID', width: 200, sortable: false },
    {
        field: 'thumb', headerName: 'Sticker', width: 300, renderCell: (params) => {
            return (
                <div className='cellWithImg'>
                    <img className='cellImg' src={params.row.thumb} alt={params.row.document_id} />
                    {params.row.name}
                </div>
            )
        },
        sortable: false
    },
    { field: 'emoji', headerName: 'Emoji', width: 200, sortable: false },
    { field: 'type', headerName: 'Type', width: 200, sortable: false },
    { field: 'width', headerName: 'Width', width: 200, sortable: false },
    { field: 'height', headerName: 'Height', width: 200, sortable: false },
];

export default function StickerTable({ id }) {
    const [loading, setLoading] = useState(true)
    const [packs, setPacks] = useState([])
    const [set, setSet] = useState({})
    useEffect(() => {
        const url = `http://sticker.tuntran.com/v1/sticker/set/${id}`
        axios.get(url)
            .then(function (response) {
                const newSet = response.data.data.sticker_set
                const newPacks = newSet.list_item
                newPacks.forEach((element) => {
                    if (element.thumb === "") {
                        element.thumb = '/error.png'
                    }
                })
                if (newSet.thumb_cdn === "") {
                    newSet.thumb_cdn = '/error.png'
                }
                setSet(newSet)
                // console.log(newPacks)
                setPacks(newPacks)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error)
                setLoading(false)
            })
    }, [id]);


    return loading ? (<Loading />) : (
        <div className='stickertable'>
            <div className='set'>
                <Avatar alt={set.name} src={set.thumb_cdn} />
                <Typography align='center'>Sticker Set: {set.name}</Typography>
            </div>
            <DataGrid
                sx={{ overflow: "hidden" }}
                getRowHeight={() => 'auto'}
                rows={packs}
                columns={columns}
                pageSize={size}
                rowsPerPageOptions={[5, 10]}
                getRowId={(pack) => pack.document_id}
            />
        </div>


    );
}