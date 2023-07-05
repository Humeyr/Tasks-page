import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks:[]
}

const taskSlice = createSlice({
    name:"crudSlice",
    initialState,
    reducers:{
        addTask:(state,action) => {
            if(action.payload.id){
                const index = state.tasks.findIndex(
                    (item) => item.id == action.payload.id
                );

                state.tasks[index] = action.payload;

                return;
            }
            const maxId = state.tasks.length + 1;
            action.payload.id = maxId;
            state.tasks = [...state.tasks, action.payload];
        },
       
        removeTask:(state,action) => {
            const index = state.tasks.findIndex(
                (item) => item.id == action.payload
            );

            state.tasks.splice(index,1);

        }
    },
});

export const { addTask,removeTask } =  taskSlice.actions;
export default taskSlice.reducer;