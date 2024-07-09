import { createApp } from 'vue'
import { createStore } from 'vuex'

import github from './modules/github'

const store = createStore({
    modules: {
        github,
    }
})

export default store
