import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Props {
	isSignedIn: boolean
}

const initialState: Props = {
	isSignedIn: false,
}

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setSignIn: (state, action: PayloadAction<boolean>) => {
			state.isSignedIn = action.payload
		},
	},
})

export const { setSignIn } = user.actions

export default user.reducer
