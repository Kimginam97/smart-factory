// import {Color} from 'three'
import { useControls } from 'leva'
import { useRef } from 'react'

const Light = () => {
  const directionalRef = useRef()

  // useControls('Directional Light', {
  //   visible: {
  //     value: true,
  //     onChange: (v) => {
  //       directionalRef.current.visible = v
  //     },
  //   },
  //   position: {
  //     x: 0,
  //     y: 1,
  //     z: 1,
  //     onChange: (v) => {
  //       directionalRef.current.position.copy(v)
  //     },
  //   },
  //   color: {
  //     value: 'white',
  //     onChange: (v) => {
  //       directionalRef.current.color = new THREE.Color(v)
  //     },
  //   },
  // })

  return (
    <>
      <directionalLight ref={directionalRef} />
    </>
  )
}

export default Light