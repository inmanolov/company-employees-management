import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetEmployeesOverSixMonthsQuery } from "state/api";

import Header from "components/Header";

const OverSixMonths = () => {
    const theme = useTheme();
    const { data, idLoading } = useGetEmployeesOverSixMonthsQuery();
    console.log("data", data)
    return(
        <Box m="1.5rem 2.5rem">
            <Header title="Employees over six months" subtitle="List of employees over six months in the company" />
        </Box>
    )
}

export default OverSixMonths;