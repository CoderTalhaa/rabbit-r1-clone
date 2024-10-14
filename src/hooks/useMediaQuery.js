import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query, serverFallback) {
  const subscribe = useCallback(
    function (onStoreChange) {
      const mediaQueryList = matchMedia(query);
      mediaQueryList.addEventListener("change", onStoreChange);
      return function () {
        mediaQueryList.removeEventListener("change", onStoreChange);
      };
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    function () {
      return matchMedia(query).matches;
    },
    function () {
      return serverFallback;
    }
  );
}
