import { configureStore } from "@reduxjs/toolkit";
import { comboValue } from "./ComboValue";
import { showmenu } from "./ShowMenu";

export const ReduxStore = configureStore({
    reducer:{
        combovalue:comboValue.reducer,
        showmenu,
    }
})