import { MathUtils} from 'three'
import { useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import { useControls, button, buttonGroup, folder } from 'leva'

const CameraControlHelper = () => {
  const cameraControlsRef = useRef()
  const { DEG2RAD } = MathUtils
  const { camera } = useThree()
  // const lookAtPosition = { position: [175, 50, -110], target: [80, 0, -110], enableTransition: true };

  useEffect(() => {
    console.log(cameraControlsRef.current.getTarget())
    console.log(cameraControlsRef.current.getPosition())
  })

  const { minDistance, enabled, verticalDragToForward, dollyToCursor, infinityDolly } = useControls({
    thetaGrp: buttonGroup({
      label: 'rotate theta',
      opts: {
        '+45º': () => cameraControlsRef.current?.rotate(45 * DEG2RAD, 0, true),
        '-90º': () => cameraControlsRef.current?.rotate(-90 * DEG2RAD, 0, true),
        '+360º': () => cameraControlsRef.current?.rotate(360 * DEG2RAD, 0, true)
      }
    }),
    phiGrp: buttonGroup({
      label: 'rotate phi',
      opts: {
        '+20º': () => cameraControlsRef.current?.rotate(0, 20 * DEG2RAD, true),
        '-40º': () => cameraControlsRef.current?.rotate(0, -40 * DEG2RAD, true)
      }
    }),
    truckGrp: buttonGroup({
      label: 'truck',
      opts: {
        '(1,0)': () => cameraControlsRef.current?.truck(1, 0, true),
        '(0,1)': () => cameraControlsRef.current?.truck(0, 1, true),
        '(-1,-1)': () => cameraControlsRef.current?.truck(-1, -1, true)
      }
    }),
    dollyGrp: buttonGroup({
      label: 'dolly',
      opts: {
        1: () => cameraControlsRef.current?.dolly(1, true),
        '-1': () => cameraControlsRef.current?.dolly(-1, true)
      }
    }),
    zoomGrp: buttonGroup({
      label: 'zoom',
      opts: {
        '/2': () => cameraControlsRef.current?.zoom(camera.zoom / 2, true),
        '/-2': () => cameraControlsRef.current?.zoom(-camera.zoom / 2, true)
      }
    }),
    minDistance: { value: 0 },
    setPosition: folder(
      {
        vec2: { value: [200, 100, -180], label: 'vec' },
        'setPosition(…vec)': button((get) => cameraControlsRef.current?.setPosition(...get('setPosition.vec2'), true))
      },
      { collapsed: true }
    ),
    setTarget: folder(
      {
        vec3: { value: [180, 0, -170], label: 'vec' },
        'setTarget(…vec)': button((get) => cameraControlsRef.current?.setTarget(...get('setTarget.vec3'), true))
      },
      { collapsed: true }
    ),
    setLookAt: folder(
      {
        vec4: { value: [175, 50, -110], label: 'position' },
        vec5: { value: [80, 0, -110], label: 'target' },
        'setLookAt(…position, …target)': button((get) =>
          cameraControlsRef.current?.setLookAt(...get('setLookAt.vec4'), ...get('setLookAt.vec5'), true)
        )
      },
      { collapsed: true }
    ),
    saveState: button(() => cameraControlsRef.current?.saveState()),
    reset: button(() => cameraControlsRef.current?.reset(true)),
    enabled: { value: true, label: 'controls on' },
    verticalDragToForward: { value: true, label: 'vert. drag to move forward' },
    dollyToCursor: { value: false, label: 'dolly to cursor' },
    infinityDolly: { value: false, label: 'infinity dolly' }
  })

  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        minDistance={minDistance}
        enabled={enabled}
        verticalDragToForward={verticalDragToForward}
        dollyToCursor={dollyToCursor}
        infinityDolly={infinityDolly}
      />
    </>
  )
}

export default CameraControlHelper
