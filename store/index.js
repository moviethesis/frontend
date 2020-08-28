export const state = () => ({
  user: {},
  top100: [],
  recommends: []
})

export const mutations = {
  setUser(state, newUser) {
    state.user = newUser
  },
  setTop100(state, movies) {
    state.top100 = movies
  },
  setRecommends(state, movies) {
    state.recommends = movies
  },
  addSelectedMovie(state, movie) {
    state.user.selectedMovies = [...state.user.selectedMovies, movie]
  },
  removeSelectedMovie(state, movie) {
    state.user.selectedMovies = state.user.selectedMovies.filter(t => t.movieId !== movie.movieId)
  }
}

export const actions = {
  movieTapped({ state, commit }, movie) {
    var movie = movie.movie
    console.log(movie)
    if (state.user === null) {
      return
    }
    if (state.user.selectedMovies.includes(movie)) {
      // remove movie if it is contained
      commit('removeSelectedMovie', movie)
    } else if (state.user.selectedMovies.length < 5) {
      // add if there is less than 5 movies
      commit('addSelectedMovie', movie)
    }
  },
  async loadUser({ state, commit }) {
    // only load on when no user in state
    if (state.user === null) {
      console.log("user already in state")
      return
    }
    var headers = {}
    if (process.browser) {
      let userID = localStorage.getItem('userID')
      if (userID) {
        headers.userID = userID
      }
    }
    await this.$axios.get('/', { withCredentials: true, headers })
      .then((res) => {
        if (res.status === 200) {
          commit('setUser', res.data)
          if (process.browser) {
            localStorage.setItem('userID', res.data.userID)
          }
        }
      })
  },
  async loadTopList({ commit }) {
    await this.$axios.get('/toplist', { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          commit('setTop100', res.data)
        }
      })
  },
  async loadRecommendations({ state, commit }) {
    var body = {}
    if (state.user.selectedMovies) {
      body.selectedMovies = state.user.selectedMovies
    }
    var headers = {}
    if (process.browser) {
      let userID = localStorage.getItem('userID')
      if (userID) {
        headers.userID = userID
      }
    }
    await this.$axios.post('/recommend', body, { withCredentials: true, headers: headers })
      .then((res) => {
        if (res.status === 200) {
          commit('setUser', res.data.user)
          commit('setRecommends', res.data.movies)
        }
      })
  }
}
