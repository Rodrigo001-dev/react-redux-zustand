import { configureStore, createSlice } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

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
  reducer: {}
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector