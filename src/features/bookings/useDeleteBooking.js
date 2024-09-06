import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deletebooking, isLoading } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => toast.error(error.message),
  });
  return { deletebooking, isLoading };
}
