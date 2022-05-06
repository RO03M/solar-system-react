import mercury from "../../assets/mercury.jpg";
import venus from "../../assets/venus.jpg";
import earth from "../../assets/earth.jpg";
import mars from "../../assets/mars.jpg";
import jupiter from "../../assets/jupiter.jpg";
import saturn from "../../assets/saturn.jpg";
import uranus from "../../assets/uranus.jpg";
import neptune from "../../assets/neptune.jpg";

export const toScalePlanets = [
    {
        name: "mercury",
        size: .376,
        color: "brown",
        distance: .38,
        year: 3/12,
        image: mercury,
        rotationTime: 58
    },
    {
        name: "venus",
        size: .949,
        color: "orange",
        distance: .72,
        year: 7/12,
        image: venus,
        rotationTime: 243
    },
    {
        name: "earth",
        color: "blue",
        image: earth,
        size: 1,
        distance: 1,
        year: 1,
        rotationTime: 1
    },
    {
        name: "mars",
        color: "red",
        size: .533,
        distance: 1.5,
        year: 2,
        image: mars,
        rotationTime: 1.1
    },
    {
        name: "jupiter",
        color: "brown",
        size: 11.2,
        distance: 5.5,
        year: 12,
        image: jupiter,
        rotationTime: .41
    },
    {
        name: "saturn",
        color: "brown",
        size: 9.46,
        distance: 9.5,
        year: 29.5,
        image: saturn,
        rotationTime: .5
    },
    {
        name: "uranus",
        color: "lightblue",
        size: 4,
        distance: 19.2,
        year: 84,
        image: uranus,
        rotationTime: .75
    },
    {
        name: "neptune",
        color: "darkblue",
        size: 3.88,
        distance: 30.1,
        year: 165,
        image: neptune,
        rotationTime: .7
    },
];