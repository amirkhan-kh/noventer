// /src/db/index.ts
import mini1 from '../../public/assets/icons/intro1.png'
import mini2 from '../../public/assets/icons/intro2.png'
import mini3 from '../../public/assets/icons/intro3.png'
import mini4 from '../../public/assets/icons/intro4.png'
import aboutcard1 from "../../public/assets/images/about1.png"
import aboutcard2 from "../../public/assets/images/about2.png"
import aboutcard3 from "../../public/assets/images/about3.png"
import avatarIcon from '../../public/assets/icons/avatar.svg'
import servicecard from '../../public/assets/images/image 2.png'
// import s1 from '../../public/assets/icons'
// import s2 from '../../public/assets/icons'
// import s3 from '../../public/assets/icons'
// import s4 from '../../public/assets/icons'
// import s5 from '../../public/assets/icons/lock-hashtag 1.svg'
// import s6 from '../../public/assets/icons/code-window 1.svg'
// import s7 from '../../public/assets/icons/chart-histogram (2) 1.svg'
import s8 from '../../public/assets/icons/file.png'
import s82 from '../../public/assets/icons/sc2.png'
import s83 from '../../public/assets/icons/sc3.png'
import s84 from '../../public/assets/icons/code-window 1.svg'
import s85 from '../../public/assets/icons/lock-hashtag 1.svg'
import s86 from '../../public/assets/icons/team-check 1.svg'
import s87 from '../../public/assets/icons/team-check 1.svg'
// import s9 from '../../public/assets/icons/team-check 1.svg'
export const introMiniCardKeys = [
    {
        titleKey: "IntroCard1T",
        descriptionKey: "IntroCard1D",
        icon: mini1
    },
    {
        titleKey: "IntroCard2T",
        descriptionKey: "IntroCard2D",
        icon: mini2
    },
    {
        titleKey: "IntroCard3T",
        descriptionKey: "IntroCard3D",
        icon: mini3
    },
    {
        titleKey: "IntroCard4T",
        descriptionKey: "IntroCard4D",
        icon: mini4
    },
];
export const aboutCardsData = [
    {
        img: aboutcard1,
        titleCard: 'card1T',
        description: 'card1D',
    },
    {
        img: aboutcard2,
        titleCard: 'card2T',
        description: 'card2D',
    },
    {
        img: aboutcard3,
        titleCard: 'card3T',
        description: 'card3D',
    },
]
export const serviceCardsData = [
    {
        img: s8,
        titleCard: 'card1T',
        description: 'card1D',
    },
    {
        img: s82,
        titleCard: 'card2T',
        description: 'card2D',
    },
    {
        img: s83,
        titleCard: 'card3T',
        description: 'card3D',
    },
    {
        img: s84,
        titleCard: 'card4T',
        description: 'card4D',
    },
    {
        img: s85,
        titleCard: 'card5T',
        description: 'card5D',
    },
    {
        img: s86,
        titleCard: 'card6T',
        description: 'card6D',
    },
    {
        img: s87,
        titleCard: 'card7T',
        description: 'card7D',
    },
    {
        img: s84,
        titleCard: 'card8T',
        description: 'card8D',
    },
    {
        img: s82,
        titleCard: 'card9T',
        description: 'card9D',
    },

]
export const footerTable = [
    {
        avatar: avatarIcon,
        lastName: "Xusanov Alibek",
        firstName: "Developer"
    },
    {
        avatar: avatarIcon,
        lastName: "Xusanov Alibek",
        firstName: "Developer"
    },
    {
        avatar: avatarIcon,
        lastName: "Xusanov Alibek",
        firstName: "Developer"
    },
    {
        avatar: avatarIcon,
        lastName: "Xusanov Alibek",
        firstName: "Developer"
    },
    {
        avatar: avatarIcon,
        lastName: "Xusanov Alibek",
        firstName: "Developer"
    },
    {
        avatar: avatarIcon,
        lastName: "Xusanov Alibek",
        firstName: "Developer"
    },
    {
        avatar: avatarIcon,
        lastName: "Xusanov Alibek",
        firstName: "Developer"
    },
    {
        avatar: avatarIcon,
        lastName: "Xusanov Alibek",
        firstName: "Developer"
    },
    {
        avatar: avatarIcon,
        lastName: "Xusanov Alibek",
        firstName: "Developer"
    },
]
export const serviceCard = [
    {
        leftTitle: "cardTitle",
        grid1T: "cardLTitle1",
        grid2T: "cardLTitle2",
        grid3T: "cardRTitle2",
        grid1TP: "cardLP1",
        grid2TP: "cardPR",
        grid3TP: "cardLP2",
        p1: "cardPL1",
        p2: "cardPL2",
        p3: "cardLP3",
        btn: "cardLBtn",
        images: servicecard,
        namespace: "Servicecard"
    },
    {
        leftTitle: "2cardTitle",
        grid1T: "2cardLTitle1",
        grid2T: "2cardLTitle2",
        grid3T: "2cardRTitle2",
        grid1TP: "2cardLP1",
        grid2TP: "2cardPR",
        grid3TP: "2cardLP2",
        p1: "2cardPL1",
        p2: "2cardPL2",
        p3: "2cardLP3",
        btn: "2cardLBtn",
        images: servicecard,
        namespace: "Servicecard2"

    },
    {
        leftTitle: "3cardTitle",
        grid1T: "3cardLTitle1",
        grid2T: "3cardLTitle2",
        grid3T: "3cardRTitle2",
        grid1TP: "3cardLP1",
        grid2TP: "3cardPR",
        grid3TP: "3cardLP2",
        p1: "3cardPL1",
        p2: "c3ardPL2",
        p3: "3cardLP3",
        btn: "3cardLBtn",
        images: servicecard,
        namespace: "Servicecard3"

    },
    {
        leftTitle: "4cardTitle",
        grid1T: "4cardLTitle1",
        grid2T: "4cardLTitle2",
        grid3T: "4cardRTitle2",
        grid1TP: "4cardLP1",
        grid2TP: "4cardPR",
        grid3TP: "4cardLP2",
        p1: "4cardPL1",
        p2: "4cardPL2",
        p3: "4cardLP3",
        btn: "4cardLBtn",
        images: servicecard,
        namespace: "Servicecard4"

    },
    {
        leftTitle: "5cardTitle",
        grid1T: "5cardLTitle1",
        grid2T: "5cardLTitle2",
        grid3T: "5cardRTitle2",
        grid1TP: "5cardLP1",
        grid2TP: "5cardPR",
        grid3TP: "5cardLP2",
        p1: "5cardPL1",
        p2: "5cardPL2",
        p3: "5cardLP3",
        btn: "5cardLBtn",
        images: servicecard,
        namespace: "Servicecard5"

    },
    {
        leftTitle: "6cardTitle",
        grid1T: "6cardLTitle1",
        grid2T: "6cardLTitle2",
        grid3T: "6cardRTitle2",
        grid1TP: "6cardLP1",
        grid2TP: "6cardPR",
        grid3TP: "6cardLP2",
        p1: "6cardPL1",
        p2: "6cardPL2",
        p3: "6cardLP3",
        btn: "6cardLBtn",
        images: servicecard,
        namespace: "Servicecard6"

    },
    {
        leftTitle: "7cardTitle",
        grid1T: "7cardLTitle1",
        grid2T: "7cardLTitle2",
        grid3T: "7cardRTitle2",
        grid1TP: "7cardLP1",
        grid2TP: "7cardPR",
        grid3TP: "7cardLP2",
        p1: "7cardPL1",
        p2: "7cardPL2",
        p3: "7cardLP3",
        btn: "7cardLBtn",
        images: servicecard,
        namespace: "Servicecard7"

    },
    {
        leftTitle: "8cardTitle",
        grid1T: "8cardLTitle1",
        grid2T: "8cardLTitle2",
        grid3T: "8cardRTitle2",
        grid1TP: "8cardLP1",
        grid2TP: "8cardPR",
        grid3TP: "8cardLP2",
        p1: "8cardPL1",
        p2: "8cardPL2",
        p3: "8cardLP3",
        btn: "8cardLBtn",
        images: servicecard,
        namespace: "Servicecard8"

    },
]
