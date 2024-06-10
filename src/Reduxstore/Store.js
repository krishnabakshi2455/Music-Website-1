import { configureStore } from '@reduxjs/toolkit'
import RedirectStore from './RedirectStore'

export const store = configureStore({
    reducer: {
        redirect: RedirectStore,
    }
})