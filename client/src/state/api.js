import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: 'adminApi',
    tagTypes: ['EmployeesLiveInBulgaria', 'AllEmployeesInTeam'],
    endpoints: (build) => ({
        getEmployeesLiveInBulgaria: build.query({
            query: () => 'employees/bulgarian',
            providesTags: ['EmployeesLiveInBulgaria']
        }),
        getAllEmployeesInTeam: build.query({
            query: () => 'employees/teams',
            providesTags: ['AllEmployeesInTeam']
        }),
    }),
})

export const { useGetEmployeesLiveInBulgariaQuery, useGetAllEmployeesInTeamQuery } = api;