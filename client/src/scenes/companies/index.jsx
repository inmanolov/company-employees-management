import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Table, TableBody, TableContainer, TableHead, TableCell, TableRow, Paper, Popper, TextField, Button } from "@mui/material";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";

import { useGetCompaniesQuery, useAddUpdateCompanyMutation } from "state/api";

const Companies = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetCompaniesQuery();
    const [selecterRow, setSelectedRow] = useState({});
    const [name, setName] = useState();
    const [country, setCountry] = useState();
    const [id, setId] = useState();

    const [addUpdateCompany, response] = useAddUpdateCompanyMutation();

    // console.log(selecterRow);
    // console.log(id);
    // console.log(name, country);

    // console.log('data', data)

    useEffect(() => {
        setName(selecterRow.name)
        setCountry(selecterRow.country)
        setId(selecterRow.id);
    }, [selecterRow])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            const updateData = {
                id,
                name,
                country
            }
            addUpdateCompany(updateData);
            console.log(updateData);
        }
        setName('')
        setCountry('')
        setId('')
    }

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Companies" subtitle="Overview of all companies" />
            <Box m="20px 0px 15px 0px" width="75%">
                <Box sx={{ alignItems: 'center', display: 'flex' }}>
                    <TextField
                        id="outlined-controlled"
                        label="Company name"
                        value={name == null ? selecterRow.name : name}
                        onChange={(e) => setName(e.target.value)}
                        focused
                    />
                    <TextField
                        id="outlined-controlled"
                        label="Country"
                        value={country == null ? selecterRow.country : country}
                        onChange={(e) => setCountry(e.target.value)}
                        focused
                    />
                    <Button
                        variant="autlined"
                        onClick={(e) => handleSubmit(e)}
                    >Update</Button>
                </Box>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, i) => (
                            <TableRow key={i}
                                sx={{ 'cursor': 'pointer' }}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.country}</TableCell>
                                <TableCell
                                    onClick={() => setSelectedRow(row)}
                                ><SystemUpdateAltIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Companies;