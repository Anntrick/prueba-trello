import { configureStore } from '@reduxjs/toolkit'
import listSlice from '../containers/List/listSlice'

export default configureStore({
    reducer: {
        list: listSlice
    }
})