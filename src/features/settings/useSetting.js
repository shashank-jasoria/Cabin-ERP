import { useQuery } from "@tanstack/react-query";

import { getSettings } from "../../services/apiSettings";

export default function useSetting() {
  const { isLoading, data: settings } = useQuery({
    queryKey: ["setting"],
    queryFn: getSettings,
  });
  return { isLoading, settings };
}
