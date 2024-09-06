import toast from "react-hot-toast";
import { deleteCabins } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabin, isLoading } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("cabin successfully deleted");
    },
    onError: (error) => toast.error(error.message),
  });
  return { deleteCabin, isLoading };
}
