import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: 'adminApi',
    tagTypes: ['EmployeesLiveInBulgaria', 'AllEmployeesInTeam', 'AverageSalary', 'EmployeesOverSixMonths', 'Companies', 'Post', 'AddCompany', 'DeleteCompany'],
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
        }),
        getCompanies: build.query({
            query: () => 'companies',
            providesTags: ['Companies']
        }),
        addUpdateCompany: build.mutation({
            query: (payload) => ({
                url: `companies/${payload.id}`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Post'],
        }),
        addCompany: build.mutation({
            query: (payload) => ({
                url: `companies`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['AddCompany'],
        }),
        deleteCompany: build.mutation({
            query: (id) => ({
                url: `companies/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['DeleteCompany'],
        }),
    }),
})

export const { useGetEmployeesLiveInBulgariaQuery, useGetAllEmployeesInTeamQuery, useGetAverageSalaryQuery, useGetEmployeesOverSixMonthsQuery, useGetCompaniesQuery, useAddUpdateCompanyMutation, useAddCompanyMutation, useDeleteCompanyMutation } = api;