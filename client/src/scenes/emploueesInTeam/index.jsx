import React, { useState, useEffect } from "react";
import { Box, useTheme, Typography, Button, Menu, MenuItem } from "@mui/material";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetAllEmployeesInTeamQuery } from "state/api";
import { getEmployees } from "utils/getAllEmployees";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

const columns = [
    {
        field: "username",
        headerName: "Username",
        flex: 0.5,
    },
    {
        field: "first_name",
        headerName: "First Name",
        flex: 0.5,
    },
    {
        field: "last_name",
        headerName: "Last Name",
        flex: 0.5,
    },
    // {
    //     field: "country",
    //     headerName: "Country",
    //     flex: 0.4,
    // },
    // {
    //     field: "department",
    //     headerName: "Department",
    //     flex: 1,
    // },
    // {
    //     field: "position",
    //     headerName: "Position",
    //     flex: 1,
    // },
    // {
    //     field: "description",
    //     headerName: "Description",
    //     flex: 1,
    // },
    // {
    //     field: "startDate",
    //     headerName: "From",
    //     flex: 0.5,
    //     renderCell: (params) => {
    //         return params.value.slice(0, 10)
    //     },
    // },
];

const EmployeesInTeam = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetAllEmployeesInTeamQuery();
    const [teams, setTeams] = useState();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    useEffect(() => {
        if (data) {
            setTeams(getEmployees(data));
        }
    }, [data])

    // const teams = getEmployees(data);

    // console.log('teams Object', Object.entries(teams[0]));
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Teams" subtitle="List of employees in certain team" />
            <Box mt='40px' height="75vh">
                {teams && Object.entries(teams[0]).map((team, id) => (
                    <Box>
                        <Button onClick={handleClick} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textTransform: "none", gap: "1rem" }}>
                            <Box textAlign='left'>
                                <Typography
                                    fontWeight="bold"
                                    fontSize="15px"
                                >
                                    {team[0]}
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined
                                sx={{ color: theme.palette.secondary[200], fontSize: "25px" }}
                            />
                        </Button>
                        <Box width="75%" display="block" onClick={handleClose}>
                            <FlexBetween m="15px">
                                <Typography fontWeight="bold">Username</Typography>
                                <Typography fontWeight="bold">First Name</Typography>
                                <Typography fontWeight="bold">Last Name</Typography>
                            </FlexBetween>
                            {team[1].map((employee) => (
                                <FlexBetween m="15px">
                                    <Typography>{employee[0]}</Typography>
                                    <Typography>{employee[1]}</Typography>
                                    <Typography>{employee[2]}</Typography>
                                </FlexBetween>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default EmployeesInTeam;