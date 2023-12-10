import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { player } from './slices/player'

// createSlice é uma parte pequena do estado(por exemplo um estado para carrinho
// em um e-commerce) ou até um estado de todo
// const todoSlice = createSlice({
//   name: 'todo',
//   initialState: ['Fazer café', 'Estudar Redux'],

//   reducers: {
//     add: (state, action) => {
//       state.push(action.payload.newTodo)
//     }
//   },
// })

export const store = configureStore({
  // reducer é exatamente as informações que vão ser compartilhadas entre todos
  // os componentes da aplicação
  reducer: {
    player
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch