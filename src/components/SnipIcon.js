import Svg, { SvgProps, Path } from "react-native-svg"

const SnipIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M23.652 5.852 9.125 21.212c-3.84-3.632-4.223-10.92-.417-14.944s10.703-4.428 14.944-.416Z" />
    <Path d="m6.348 24.148 14.527-15.36c3.84 3.632 4.223 10.92.417 14.944s-10.703 4.428-14.944.416Z" />
  </Svg>
)

export default SnipIcon