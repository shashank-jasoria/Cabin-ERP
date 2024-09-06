import React from "react";
import Button from "../../ui/Button";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button> Add new cabin </Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// export default function AddCabin() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpen((show) => !show)}>Add new Cabin</Button>
//       {isOpen && (
//         <Modal onClose={() => setIsOpen(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpen(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
