const themeStoreModule = {
    state: () => ({
        darkMode: false
    }),
    mutations: {
        setDarkMode (state, value) {
            state.darkMode = value
        }
    },
    actions: {
        toggleDarkMode (context) {
            context.commit('setDarkMode', !context.state.darkMode)
        }
    },
    getters: {
        isDarkMode (state) {
            return state.darkMode
        }
    }
}

export { themeStoreModule }
