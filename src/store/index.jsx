import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/addToCart"

export default configureStore({
  reducer: {
    counter: counterReducer
  },
})