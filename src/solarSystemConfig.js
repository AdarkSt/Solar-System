import { BasicPlanet } from "./3dModels/Planets/BasicPlanet.js"
import { Sun } from "./3dModels/Luminaries/Sun.js"
import { DiskPlanet } from "./3dModels/Planets/DiskPlanet.js"

import sunTexture from '../assets/sun_texture.jpg'
import mercuryTexture from '../assets/mercury_texture.jpg'
import venusTexture from '../assets/venus_texture.jpg'
import earthTexture from '../assets/earth_texture.jpg'
import marsTexture from '../assets/mars_texture.jpg'
import jupiterTexture from '../assets/jupiter_texture.jpg'
import saturnTexture from '../assets/saturn_texture.jpg'
import saturnRingTexture from '../assets/saturn_ring_texture.png'
import uranusTexture from '../assets/uranus_texture.jpg'
import uranusRingTexture from '../assets/uranus_ring_texture.jpg'
import neptuneTexture from '../assets/neptune_texture.jpg'

import { SUN, MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUN, ONLY_SPHERE, WITH_DISK } from "./constants/planetsConstants.js"
import * as THREE from "three"

const loader = new THREE.TextureLoader();

export const solarSystemConfig = [
    {
        name: SUN,
        parameters: {
            positionX: 0,
            scaleCoeficientXYZ: 1,
            roughness: 1,
            metalness: 0.5,
            orbitPositionX: 0,
            sunLightIntensity: 2,
        },
        texture: loader.load(sunTexture),
        modelCreator: new Sun(100, 500, 500).createModel,
        creatorParametrs: function() {return Sun.takeValidParams(this)}
    },
    {
        name: MERCURY,
        parameters: {
            positionX: 416, //+300
            scaleCoeficientXYZ: 0.034,
            roughness: 1,
            metalness: 0.5,
            orbitPositionX: 160
        },
        type: ONLY_SPHERE,
        texture: loader.load(mercuryTexture),
        modelCreator: new BasicPlanet(100, 500, 500).createModel,
        creatorParametrs: function() {return BasicPlanet.takeValidParams(this)}
    },
    {
        name: VENUS,
        parameters: {
            positionX: 518, //+300
            scaleCoeficientXYZ: 0.086,
            roughness: 1,
            metalness: 0.5,
            orbitPositionX: 140
        },
        type: ONLY_SPHERE,
        texture: loader.load(venusTexture),
        modelCreator: new BasicPlanet(100, 500, 500).createModel,
        creatorParametrs: function() {return BasicPlanet.takeValidParams(this)}
    },
    {
        name: EARTH,
        parameters: {
            positionX: 604, //+300
            scaleCoeficientXYZ: 0.091,
            roughness: 1,
            metalness: 0.5,
            orbitPositionX: 100
        },
        type: ONLY_SPHERE,
        texture: loader.load(earthTexture),
        modelCreator: new BasicPlanet(100, 500, 500).createModel,
        creatorParametrs: function() {return BasicPlanet.takeValidParams(this)}
    },
    {
        name: MARS,
        parameters: {
            positionX: 714, //+300
            scaleCoeficientXYZ: 0.048,
            roughness: 1,
            metalness: 0.5,
            orbitPositionX: 40
        },
        type: ONLY_SPHERE,
        texture: loader.load(marsTexture),
        modelCreator: new BasicPlanet(100, 500, 500).createModel,
        creatorParametrs: function() {return BasicPlanet.takeValidParams(this)}
    },
    {
        name: JUPITER,
        parameters: {
            positionX: 1042, //+300
            scaleCoeficientXYZ: 0.79,
            roughness: 1,
            metalness: 0.5,
            orbitPositionX: -40
        },
        type: ONLY_SPHERE,
        texture: loader.load(jupiterTexture),
        modelCreator: new BasicPlanet(100, 500, 500).createModel,
        creatorParametrs: function() {return BasicPlanet.takeValidParams(this)}
    },
    {
        name: SATURN,
        parameters: {
            planetPositionX: 1630, //+300
            scaleCoeficientXYZ: 0.72,
            diskRotationX: 1.3,
            diskScaleZ: 0.05,
            roughness: 1,
            metalness: 0.5,
            orbitPositionX: -140
        },
        type: WITH_DISK,
        planetTexture: loader.load(saturnTexture),
        diskTexture: loader.load(saturnRingTexture),
        modelCreator: new DiskPlanet(100, 500, 500, 180, 30, 30, 200).createModel,
        creatorParametrs: function() {return DiskPlanet.takeValidParams(this)}
    },
    {
        name: URANUS,
        parameters: {
            planetPositionX: 2000, //+300
            scaleCoeficientXYZ: 0.37,
            diskRotationX: 0.5,
            diskScaleZ: 1,
            roughness: 1,
            metalness: 0.5,
            orbitPositionX: -260
        },
        type: WITH_DISK,
        planetTexture: loader.load(uranusTexture),
        diskTexture: loader.load(uranusRingTexture),
        modelCreator: new DiskPlanet(100, 500, 500, 140, 2, 30, 200).createModel,
        creatorParametrs: function() {return DiskPlanet.takeValidParams(this)}
    },
    {
        name: NEPTUN,
        parameters: {
            positionX: 2500, //+300
            scaleCoeficientXYZ: 0.32,
            roughness: 1,
            metalness: 0.5,
            orbitPositionX: -400
        },
        type: ONLY_SPHERE,
        texture: loader.load(neptuneTexture),
        modelCreator: new BasicPlanet(100, 500, 500).createModel,
        creatorParametrs: function() {return BasicPlanet.takeValidParams(this)}
    },
]