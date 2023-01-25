import {AddOne, Play, VoiceMessage} from '@icon-park/vue-next'
import {Lightning} from "@element-plus/icons";
export function IconPark (app) {
    app.component('voice-message', VoiceMessage)
    app.component('lightning', Lightning)
    app.component('add-one', AddOne)
}
