import { create } from 'zustand'
import { Vector3 } from 'three'

export const clickModelPostion = create((set) => ({
  modelPartName: 'RedBox',
  position: new Vector3(0, 0, 0),
  lerping: false,
  cameraMove: true,
  setModelPartName: (v) => set({ modelPartName: v }),
  setPosition: (v) => set({ position: v }),
  setLerping: (v) => set({ lerping: v }),
  setCameraMove: (v) => set({cameraMove: v}),
}))