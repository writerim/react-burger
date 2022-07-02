import { ActiveTabAction } from './../../types/activeTab';
import { SET_ACTIVE_TAB } from "../actions/activeTab"

export const activeTab = (state = 'bun', action: ActiveTabAction) => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return action.activeTab
        default:
            return state
    }
}