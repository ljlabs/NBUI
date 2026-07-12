import { useState, useCallback, type MouseEventHandler } from "react";

interface UseTactileReturn {
  isHovered: boolean;
  isPressed: boolean;
  handlers: {
    onMouseEnter: MouseEventHandler;
    onMouseLeave: MouseEventHandler;
    onMouseDown: MouseEventHandler;
    onMouseUp: MouseEventHandler;
  };
}

export function useTactile(): UseTactileReturn {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const onMouseEnter = useCallback(() => setIsHovered(true), []);
  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);
  const onMouseDown = useCallback(() => setIsPressed(true), []);
  const onMouseUp = useCallback(() => setIsPressed(false), []);

  return {
    isHovered,
    isPressed,
    handlers: { onMouseEnter, onMouseLeave, onMouseDown, onMouseUp },
  };
}
