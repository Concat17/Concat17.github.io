import { useMediaQuery } from "@chakra-ui/react";
import { useCallback } from "react";

export const useIsMobile = () => useMediaQuery("(max-width: 500px)");
