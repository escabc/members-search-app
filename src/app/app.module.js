// ------------------------------------
// Constants
// ------------------------------------
// const LOAD_REQUEST = 'LOAD_REQUEST'
// const LOAD_SUCCESS = 'LOAD_SUCCESS'
// const LOAD_FAILURE = 'LOAD_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------

// Load
// export const loadRequest = () => ({
//   type: LOAD_REQUEST,
// })
//
// export const loadSuccess = (fuelPurchases) => ({
//   type: LOAD_SUCCESS,
//   fuelPurchases,
// })
//
// export const loadFailure = (error) => ({
//   type: LOAD_FAILURE,
//   error,
// })

// export const load = () => {
//   return (dispatch, getState) => {
//     const { token } = getState().auth
//     dispatch(loadRequest())
//
//     return api('fuelPurchases', 'GET', undefined, { Authorization: `Bearer ${token}` })
//       .then(response => dispatch(loadSuccess(response)))
//       .catch(err => {
//         dispatch(loadFailure(err))
//         throw err
//       })
//   }
// }

export const actions = {
  // load,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  // [LOAD_REQUEST]: (state) => ({
  //   ...state,
  //   loading: true,
  // }),
  //
  // [LOAD_SUCCESS]: (state, { fuelPurchases }) => {
  //   return {
  //     ...state,
  //     loading: false,
  //     fuelPurchases,
  //   }
  // },
  //
  // [LOAD_FAILURE]: (state) => ({
  //   ...state,
  //   loading: false,
  // }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
