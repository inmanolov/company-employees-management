import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: 'adminApi',
    tagTypes: ['EmployeesLiveInBulgaria', 'AllEmployeesInTeam', 'AverageSalary', 'EmployeesOverSixMonths'],
    endpoints: (build) => ({
        getEmployeesLiveInBulgaria: build.query({
            query: () => 'employees/bulgarian',
            providesTags: ['EmployeesLiveInBulgaria']
        }),
        getAllEmployeesInTeam: build.query({
            query: () => 'employees/teams',
            providesTags: ['AllEmployeesInTeam']
        }),
        getAverageSalary: build.query({
            query: () => 'teams/average-salary',
            providesTags: ['AverageSalary']
        }),
        getEmployeesOverSixMonths: build.query({
            query: () => 'employees/over-six-months',
            providesTags: ['EmployeesOverSixMonths']
        })
    }),
})

export const { useGetEmployeesLiveInBulgariaQuery, useGetAllEmployeesInTeamQuery, useGetAverageSalaryQuery, useGetEmployeesOverSixMonthsQuery } = api;