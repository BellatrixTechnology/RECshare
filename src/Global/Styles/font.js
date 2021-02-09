
import { wp, hp } from './Scalling';
const fontSize = {
    headTitle: wp(5),
    Login: {
        welcomeHead: wp(10),
        signinhead: wp(4.5),
    },

    VerifyCode: {
        heading: wp(10),
        labels: wp(4.5),

    },
    setLocation: {
        heading: wp(10),
        labels: wp(4.5),
        note: wp(3.5)

    },
    Signup: {
        heading: wp(10),
        labels: wp(4.5),
        terms: wp(4)
    },
    Browse: {

        heading: wp(10),
        labels: wp(4.5),
        txt: wp(3.5),
        line: wp(4)


    },
    Browse2: {
        heading: wp(7),
        labels: wp(4.5),
        txt: wp(3.5),
        line: wp(4)
    },
    Browse3: {
        heading: wp(7),
        labels: wp(4.5),
        txt: wp(3.5),
        line: wp(3)
    },
    // Categories: {
    //     heading: wp(7),
    //     labels: wp(4.5),
    //     line: wp(3)
    // }

}
const fontFamily = {

    SFUITextHeavy: 'SFUIText-Heavy',
    SFUIText: 'SFUIText-Regular'

}

export { fontFamily, fontSize }