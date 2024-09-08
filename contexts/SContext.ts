import React, {
  createContext,
  Dispatch,
  RefObject,
  SetStateAction,
} from "react";

interface SliderContextProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  // locomotive
  locomotiveScrollRef: RefObject<LocomotiveScroll> | null;
  ref: RefObject<HTMLDivElement>;
  // preloader
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const SContext = createContext<SliderContextProps>({
  state: "",
  setState: () => {},
  // locomotive
  locomotiveScrollRef: null,
  ref: { current: null },
  // preloader
  loading: false,
  setLoading: () => {},
});

export default SContext;
