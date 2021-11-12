import { createStore } from 'vuex'
import { themeStoreModule } from '@/store/themeStoreModule'

export default createStore({
    modules: {
        theme: themeStoreModule
    }
})
