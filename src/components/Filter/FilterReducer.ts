import { monthNames } from "../../constants"

export enum FilterActionType {
    UPDATE_MONTH = "UPDATE_MONTH",
    UPDATE_REGION = "UPDATE_REGION",
    UPDATE_THEMES = "UPDATE_THEMES",
    UPDATE_WEATHER = "UPDATE_WEATHER",
    UPDATE_PAGE = "UPDATE_PAGE",
    CLEAR = "CLEAR",
}

export interface FilterState {
    month?: string
    region?: string
    themes?: string[]
    weather?: string[]
    page?: number
}

export const initialFilter: FilterState = {
    themes: ["beach"],
    month: monthNames[new Date().getMonth()],
    page: 0
}

type FilterAction =

    {
        type: FilterActionType.UPDATE_REGION
        payload: {
            region?: string
        }
    }
    | {
        type: FilterActionType.UPDATE_MONTH
        payload: {
            month?: string
        }
    }
    | {
        type: FilterActionType.UPDATE_THEMES
        payload: {
            themes?: string[]
        }
    }
    | {
        type: FilterActionType.UPDATE_WEATHER
        payload: {
            weather?: string[]
        }
    }
    | {
        type: FilterActionType.UPDATE_PAGE
        payload: {
            page?: number
        }
    }
    | { type: FilterActionType.CLEAR }

export const FilterReducer = (
    state: FilterState,
    action: FilterAction
): FilterState => {
    switch (action.type) {
        case FilterActionType.UPDATE_REGION:
            return { ...state, region: action.payload.region }
        case FilterActionType.UPDATE_MONTH:
            return { ...state, month: action.payload.month }
        case FilterActionType.UPDATE_THEMES:
            return { ...state, themes: action.payload.themes }
        case FilterActionType.UPDATE_WEATHER:
            return { ...state, weather: action.payload.weather }
        case FilterActionType.UPDATE_PAGE:
            return { ...state, page: action.payload.page }
        case FilterActionType.CLEAR:
            return { ...initialFilter }
        default:
            return state
    }
}
