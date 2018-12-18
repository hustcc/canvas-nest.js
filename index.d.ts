declare module 'canvas-nest.js' {
  interface configType {
    /**
     * 线条颜色, 默认: '0,0,0' ；三个数字分别为(R,G,B)，注意用,分割
     */
    color?: string;
  
    /**
     * 线条的总数量, 默认: 150
     */
    count?: number;
  
    /**
     * 背景的z-index属性，css属性用于控制所在层的位置, 默认: -1
     */
    zIndex?: number;
  
    /**
     * 线条透明度（0~1）, 默认: 0.5
     */
    opacity?: number;
  }

  class CanvasNest {
    constructor(element: Element, config?: configType)
    destroy(): void;
  }

  export default CanvasNest;
}