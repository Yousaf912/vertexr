import { configureStore } from "@reduxjs/toolkit";
import { comboValue } from "./ComboValue";
import { showmenu } from "./ShowMenu";
import { TabData } from "./TabsData";

export const ReduxStore = configureStore({
    reducer:{
        combovalue:comboValue.reducer,
        showmenu,
        TabData,
    }
})