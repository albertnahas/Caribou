import React from "react"
import { useQuery } from "react-query"
import { FilterState } from "../components/Filter/FilterReducer"
import { getApiUrl } from "../helpers"
import { City } from "../types/types"

export const useFinder = (filterState: FilterState) => {
  const { isLoading, error, data } = useQuery<City[]>(
    ["finder", { ...filterState }],
    () => fetch(getApiUrl("dests", filterState)).then((res) => res.json())
  )

  return { isLoading, error, data }
}
