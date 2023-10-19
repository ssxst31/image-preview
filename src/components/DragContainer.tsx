import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

interface DragContainerProps {
  children: JSX.Element;
}

export default function DragContainer({ children }: DragContainerProps) {
  const pos = useSpring({ x: 0, y: 0 });
  const bindPos = useDrag((params) => {
    pos.x.set(params.offset[0]);
    pos.y.set(params.offset[1]);
  });

  return (
    <animated.div
      {...bindPos()}
      style={{
        x: pos.x,
        y: pos.y,
      }}
    >
      {children}
    </animated.div>
  );
}
