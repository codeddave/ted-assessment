import { useState, useCallback } from "react";

export default function useToggle(initialState = false) {
  const [toggleOn, setToggleOn] = useState(initialState);

  const onToggleClick = useCallback(() => {
    setToggleOn((prevToggle) => !prevToggle);
  }, []);
  const handleClose = () => {
    setToggleOn(false);
  };
  const toggleActive = () => {
    setToggleOn(true);
  };
  return {
    toggleOn,
    onToggleClick,
    handleClose,
    setToggleOn,
    toggleActive,
  };
}
