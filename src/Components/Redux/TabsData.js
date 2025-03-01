import { createSlice } from "@reduxjs/toolkit";

const TabsData = createSlice({
    name: 'TabsData',
    initialState: {
        values: []
    },
    reducers: {
        setTabsData: (state, action) => {
            const dataExist = state.values.includes(action.payload);
            if (!dataExist) {

                state.values.push(action.payload)
            }
        },
        removeTab:(state,action)=>{
            state.values = state.values.filter(tab => tab != action.payload);
        }
    }
})

export const TabData = TabsData.reducer;
export const { setTabsData ,removeTab} = TabsData.actions;