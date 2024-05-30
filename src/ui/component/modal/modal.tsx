import { useCallback, useState, type FC } from 'react'
import './modal.scss'

type ModalContentProps = {
  onClose: () => void
}

const ModalContent: FC<ModalContentProps> = ({ onClose }) => {
  const handleCloseModal = useCallback(() => onClose(), [onClose])
  return (
    <div className="modal-container">
      <div className="modal-container-content">
        <h2>Modal Title</h2>
        <p>This is the modal content</p>
      </div>
      <button className="modal-close-button" onClick={handleCloseModal}>
        x
      </button>
    </div>
  )
}

const Modal: FC = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = useCallback(
    (closed: boolean) => (): void => setShowModal(closed),
    []
  )

  return (
    <div className="modal">
      <button className="modal-button" onClick={handleModal(true)}>
        Show modal
      </button>
      {showModal && <ModalContent onClose={handleModal(false)} />}
    </div>
  )
}

export default Modal
