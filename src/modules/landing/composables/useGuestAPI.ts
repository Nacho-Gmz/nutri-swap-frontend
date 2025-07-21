import { showToast } from "@/modules/common/composables/useToast";
import { ref } from "vue";
import { guestApiService } from "../services/guestAPIService";

export function useGuestAPI() {
  const originalFood = ref();

  const handleSwap = (originalFood) => {
    if (!originalFood.id) showToast("Alimento no válido", "warning", 4000);

    const [error, data] = guestApiService.post();
  };
}
