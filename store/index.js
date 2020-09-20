export const state = () => ({
  user: {},
  testGroup: "",
  top100: [],
  recommends: [],
});

export const getters = {
  isTransparentGroup: (state) => {
    return state.testGroup === "c" || state.testGroup === "d";
  },
  isControlGroup: (state) => {
    return state.testGroup === "b" || state.testGroup === "d";
  },
  testGroupDesc: (state) => {
    if (state.testGroup === "a") {
      return "(Nontransparent and no user control)";
    } else if (state.testGroup === "b") {
      return "(Nontransparent and user control)";
    } else if (state.testGroup === "c") {
      return "(Transparent and no user control)";
    } else if (state.testGroup === "d") {
      return "(Transparent and user control)";
    }
  },
};

export const mutations = {
  setUser(state, newUser) {
    state.user = newUser;
    state.testGroup = newUser.testGroup;
  },
  debugSetGroup(state, group) {
    state.testGroup = group;
  },
  setUserCountry(state, c) {
    state.user.country = c;
  },
  setUserGender(state, g) {
    state.user.gender = g;
  },
  setUserAge(state, a) {
    state.user.age = a;
  },
  setUseForRecommendations(state, bool) {
    state.user.dataControl.useForRecommendations = bool;
  },
  setUseForImprovementsForOthers(state, bool) {
    state.user.dataControl.useForImprovementsForOthers = bool;
  },
  setUseForSharing(state, bool) {
    state.user.dataControl.useForSharing = bool;
  },
  setTop100(state, movies) {
    state.top100 = movies;
  },
  setRecommends(state, movies) {
    state.recommends = movies;
  },
  addSelectedMovie(state, movie) {
    state.user.selectedMovies = [...state.user.selectedMovies, movie];
  },
  removeSelectedMovie(state, movie) {
    state.user.selectedMovies = state.user.selectedMovies.filter(
      (t) => t.movieId !== movie.movieId
    );
  },
};

export const actions = {
  movieTapped({ state, commit }, movie) {
    var movie = movie.movie;
    console.log(movie);
    if (state.user === null) {
      return;
    }
    if (state.user.selectedMovies.includes(movie)) {
      // remove movie if it is contained
      commit("removeSelectedMovie", movie);
    } else {
      // add if there is less than 5 movies
      commit("addSelectedMovie", movie);
    }
  },
  async loadUser({ state, commit }) {
    // only load on when no user in state
    if (state.user === null) {
      console.log("user already in state");
      return;
    }
    var headers = {};
    if (process.browser) {
      let userID = localStorage.getItem("userID");
      if (userID) {
        headers.userID = userID;
      }
    }
    await this.$axios
      .get("/", { withCredentials: true, headers })
      .then((res) => {
        if (res.status === 200) {
          commit("setUser", res.data);
          if (process.browser) {
            localStorage.setItem("userID", res.data.userID);
          }
        }
      });
  },
  async loadTopList({ commit }) {
    await this.$axios.get("/toplist", { withCredentials: true }).then((res) => {
      if (res.status === 200) {
        commit("setTop100", res.data);
      }
    });
  },
  async loadRecommendations({ state, commit }) {
    var body = {};
    if (state.user.selectedMovies) {
      body.selectedMovies = state.user.selectedMovies;
    }
    var headers = {};
    if (process.browser) {
      let userID = localStorage.getItem("userID");
      if (userID) {
        headers.userID = userID;
      }
    }
    await this.$axios
      .post("/recommend", body, { withCredentials: true, headers: headers })
      .then((res) => {
        if (res.status === 200) {
          commit("setUser", res.data.user);
          commit("setRecommends", res.data.rec_list);
        }
      });
  },
  async updateUserPrivateData({ state, commit }) {
    const body = state.user;
    var headers = {};
    if (process.browser) {
      let userID = localStorage.getItem("userID");
      if (userID) {
        headers.userID = userID;
      }
    }
    await this.$axios
      .post("/update-data", body, { withCredentials: true, headers: headers })
      .then((res) => {
        if (res.status === 200) {
          commit("setUser", res.data);
        }
      });
  },
};
