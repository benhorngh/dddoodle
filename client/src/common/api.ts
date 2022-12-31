import { queryClient } from "./reactQueryClient";
import { useMutation, useQuery } from "react-query";
import httpClient from "./httpClient";

// async function updateRecords(
//   transactions_ids: string[],
//   businesses: string[],
//   update: RecordsUpdate
// ) {
//   const { data } = await httpClient.patch<RecordsModel>("/records", {
//     record: update,
//     businesses,
//     transactions_ids,
//   });
//   return data;
// }

// export function useUpdateRecords() {
//   return useMutation({
//     mutationFn: (data: {
//       transactions_ids: string[];
//       businesses: string[];
//       update: RecordsUpdate;
//     }) => {
//       return updateRecords(data.transactions_ids, data.businesses, data.update);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries("records");
//     },
//   });
// }
