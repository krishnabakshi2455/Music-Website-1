import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ChangePage: "",
    SongContainer:""
};

export const userSlice = createSlice({
    name: 'redirect',
    initialState,
    reducers: {
        container: (state, action) => {
            state.ChangePage = action.payload.container.data;
        },
        goback: (state) => {
            state.ChangePage = null;
        },
        songsredux:(state,action)=>{
            state.SongContainer = action.payload.songurl; // Use the correct payload property

        }
    },
});

export const { container, goback, songsredux } = userSlice.actions;

export default userSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     ChangePage: "",
//     SongContainer: ""
// };

// export const userSlice = createSlice({
//     name: 'redirect',
//     initialState,
//     reducers: {
//         container: (state, action) => {
//             state.ChangePage = action.payload.container.data;
//         },
//         goback: (state) => {
//             state.ChangePage = null;
//         },
//         songsredux: (state, action) => {
//             state.SongContainer = action.payload.songurl; // Use the correct payload property
//         }
//     },
// });

// export const { container, goback, songsredux } = userSlice.actions;

// export default userSlice.reducer;
