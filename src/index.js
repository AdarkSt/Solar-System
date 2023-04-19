import * as THREE from 'three'
import _forEach from 'lodash/forEach'

import { resizeRendererToDisplaySize } from './resizeRendererToDisplaySize.js'
import { orbitCreator } from './OrbitCreator.js'

import './styles.css'

import { orbitSpeedCalculator } from './orbitsSpeedCalculator.js'
import { rationalSpeedCalculator } from './rationalSpeedCalulator.js'
import starsTexture from '../assets/stars_texture.jpg'


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { solarSystemConfig } from './solarSystemConfig.js'
import { ONLY_SPHERE, WITH_DISK } from './constants/planetsConstants.js'

//creating a renderer from canvas
const canvas = document.getElementById("canvasElement")
const renderer = new THREE.WebGLRenderer({canvas, antialias:true})
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
addEventListener('resize', onWindowResize)

//creating of scene
const scene = new THREE.Scene()
scene.rotateZ(0.1)

const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth/canvas.clientHeight, 0.1, 10000)
camera.position.z = 400
camera.translateX(10)

const loader = new THREE.TextureLoader();
scene.background = loader.load(starsTexture)

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true

controls.mouseButtons = {
	LEFT: THREE.MOUSE.ROTATE,
	MIDDLE: THREE.MOUSE.DOLLY,
	RIGHT: THREE.MOUSE.PAN
}

const objects = []
const orbits = {}

_forEach(solarSystemConfig, planetConfig => {

    switch (planetConfig.type) {
        case ONLY_SPHERE: {
            // takeSpherePlanet
        }
        case WITH_DISK: {
            // takeDiskPlanet
        }
    }

    const planet = planetConfig.modelCreator(...planetConfig.creatorParametrs())

    const planetOrbit = orbitCreator(planetConfig.name, planetConfig.parameters.planetPositionX || planetConfig.parameters.positionX, planetConfig.parameters.orbitPositionX)
    orbits[planetConfig.name] = planetOrbit

    planetOrbit.orbit.add(planet)

    scene.add(planetOrbit.orbit)
    objects.push(planet)
})


const render = (time) => {
    time *= 0.001
    const rotationalSpeed = time * 0.0005

    _forEach(orbits, (value, key) => {
        value.orbit.rotation.y = time / orbitSpeedCalculator(key)
    })

    objects.forEach((obj, index) => {
        obj.rotation.y = rotationalSpeed / rationalSpeedCalculator(index) * 1000
    })

    renderer.render(scene, camera)
    controls.update();
    requestAnimationFrame(render)
}

requestAnimationFrame(render)
