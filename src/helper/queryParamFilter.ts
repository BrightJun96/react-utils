/**
 * @description
 * API 통신 falsy한 parameter 값이 있다면 해당 parameter는 제외시켜줍니다.
 * @param params
 * @returns
 */
export default function queryParamsFilter(
  params: Record<string | number | symbol, unknown>
) {
  return Object.fromEntries(
    Object.entries(params).filter(([_, v]) => Boolean(v))
  );
}
