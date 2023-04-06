import { useContext } from "react";
import { SnackContext } from "../contexts";


export function useSnack() {
  const contextData = useContext(SnackContext)

  return contextData
}
