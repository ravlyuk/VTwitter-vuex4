import {createStore} from 'vuex'

export const store = createStore({
    state: {
        notes: [
            {
                title: 'Learn Vue 3',
                tags: ['work']
            },
            {
                title: 'Finish course',
                tags: ['work', 'home']
            },
            {
                title: 'Do sport',
                tags: ['home']
            },
        ]
    },
})
