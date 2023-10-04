import { useQuery, QueryOptions } from "@tanstack/react-query";


export const useRequest = <T>(key: string[], request: T, params?: QueryOptions) => {
	return useQuery(key, () => request, params);
}