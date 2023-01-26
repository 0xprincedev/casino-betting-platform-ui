import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Props {
	email: string
}

const initialState: Props = {
	email: '',
}

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload
		},
	},
})

export const { setEmail } = user.actions

export default user.reducer
