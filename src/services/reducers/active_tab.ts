import { SET_ACTIVE_TAB } from './../actions/active_tab';

type Action = {
    type: string
    activeTab: string
}

export const activeTab = (state = 'bun', action: Action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return action.activeTab
        default:
            return state
    }
}