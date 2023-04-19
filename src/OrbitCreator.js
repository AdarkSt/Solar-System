import * as THREE from 'three'

export const orbitCreator = (orbitName, radius, positionX) => {

    const filter = THREE.LinearMipmapLinearFilter

    const orbitRingGeometry = new THREE.RingGeometry(radius-1, radius, 500)
    const orbitRingMaterial = new THREE.MeshBasicMaterial({color: 0x666666, side: THREE.DoubleSide})
    const orbitRing = new THREE.Mesh(orbitRingGeometry, orbitRingMaterial)
    orbitRing.rotateX(1.5708)
    const orbit = new THREE.Object3D()
    orbit.position.setX(positionX)
    orbit.add(orbitRing)

    return {
        name: orbitName,
        orbit: orbit
    }
}