function reducer (state, action) {
    switch (action.type){
        case 'toggle':
            return {autoplay: !state.autoplay}
        case 'fast' :
            return {autoplay: 700}
        case 'slow' :
            return {autoplay: 300}
        case 'custom':
            return {autoplay: action.payload}
        default:
            throw new Error();
    }
}

export default reducer;