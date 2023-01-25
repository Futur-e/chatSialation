import {AddOne, Bluetooth, Home, Shake, VoiceMessage} from '@icon-park/vue-next'
export function IconPark (app) {
    app.component('home', Home)
    app.component('Shake', Shake)
    app.component('bluetooth', Bluetooth)
    app.component('voice-message', VoiceMessage)
    app.component('add-one', AddOne)
}
