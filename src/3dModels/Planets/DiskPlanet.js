import * as THREE from "three"
import { checkTexture } from "../utils/errors/checkTexture";
import { Planets } from "./Planets.js";

export class DiskPlanet extends Planets {
    constructor(
        radius,
        witdhSegment, 
        heightSegment, 
        diskRadius, 
        diskWeight, 
        diskRadialSegments,
        diskTabularSegments
        ) 
    {
        super(radius, witdhSegment, heightSegment)
        this.diskRadius = diskRadius
        this.diskWeight = diskWeight
        this.diskRadialSegments = diskRadialSegments
        this.diskTabularSegments = diskTabularSegments
    }

    static defaultParams = {
        scaleCoeficentXYZ: 1,
        planetPositionX: 0,
        planetPositionY: 0,
        planetPositionZ: 0,
        diskPositionX: 0,
        diskPositionY: 0,
        diskPositionZ: 0,
        diskRotationX: 0,
        diskRotationY: 0,
        diskRotationZ: 0,
        diskScaleX: 1,
        diskScaleY: 1,
        diskScaleZ: 1,
        roughness: 0,
        metalness: 0
    }

    createModel = (planetTexture, diskTexture, options) => {
        const {
            scaleCoeficientXYZ,
            planetPositionX = 0,
            planetPositionY = 0,
            planetPositionZ = 0,
            diskPositionX = 0,
            diskPositionY = 0,
            diskPositionZ = 0,
            diskRotationX = 0,
            diskRotationY = 0,
            diskRotationZ = 0,
            diskScaleX = 1,
            diskScaleY = 1,
            diskScaleZ = 1,
            roughness = 0,
            metalness = 0
        } = options

        const planetGeometry = new THREE.SphereGeometry(this.radius, this.witdhSegment, this.heightSegment)
        const planetMaterial = new THREE.MeshStandardMaterial({map: planetTexture, roughness: roughness, metalness: metalness})
        const diskGeometry = new THREE.TorusGeometry(this.diskRadius, this.diskWeight, this.diskRadialSegments, this.diskTabularSegments)
        const diskMaterial = new THREE.MeshBasicMaterial({map: diskTexture})

        const planet = new THREE.Mesh(planetGeometry, planetMaterial)
        const disk = new THREE.Mesh(diskGeometry, diskMaterial)
        const planetSystem = new THREE.Object3D()

        disk.rotateX(diskRotationX)
        disk.rotateY(diskRotationY)
        disk.rotateZ(diskRotationZ)

        disk.scale.setX(diskScaleX)
        disk.scale.setY(diskScaleY)
        disk.scale.setZ(diskScaleZ)

        disk.position.set(diskPositionX, diskPositionY, diskPositionZ)

        planetSystem.position.set(planetPositionX, planetPositionY, planetPositionZ)
        planetSystem.scale.set(scaleCoeficientXYZ, scaleCoeficientXYZ, scaleCoeficientXYZ)

        planetSystem.add(planet)
        planetSystem.add(disk)

        return planetSystem
    }

    static takeValidParams(configObject) {
        const {planetTexture, diskTexture, parameters = this.defaultParams} = configObject

        checkTexture(planetTexture)
        checkTexture(diskTexture)

        const validParameters = {
            scaleCoeficientXYZ: parameters.scaleCoeficientXYZ || 1,
            planetPositionX: parameters.planetPositionX || 0,
            planetPositionY: parameters.planetPositionY || 0,
            planetPositionZ: parameters.planetPositionZ || 0,
            diskPositionX: parameters.diskPositionX || 0,
            diskPositionY: parameters.diskPositionY || 0,
            diskPositionZ: parameters.diskPositionZ || 0,
            diskRotationX: parameters.diskRotationX || 0,
            diskRotationY: parameters.diskRotationY || 0,
            diskRotationZ: parameters.diskRotationZ || 0,
            diskScaleX: parameters.diskScaleX || 1,
            diskScaleY: parameters.diskScaleY || 1,
            diskScaleZ: parameters.diskScaleZ || 1,
            roughness: parameters.roughness || 0,
            metalness: parameters.metalness || 0,
        }

        return [planetTexture, diskTexture, validParameters]
    }
}