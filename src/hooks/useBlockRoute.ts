import { useBlocker } from "react-router-dom";

/**
 * @description
 * 특정 조건이 있을 때, 라우팅을 방지해주는 훅입니다.
 * @param blockCondition 라우팅 방지 조건입니다.
 * @returns escapeRoute 라우팅 block을 해지할 수 있는 함수입니다.
 * @returns keepRoute 라우팅 block을 유지할 수 있는 함수입니다.

 */
function useBlockRoute(blockCondition: boolean) {
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      blockCondition && currentLocation.pathname !== nextLocation.pathname
  );

  const escapeRoute = blocker.proceed;
  const keepRoute = blocker.reset;

  return { escapeRoute, keepRoute };
}

export default useBlockRoute;
