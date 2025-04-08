import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import "/src/styles/modal.css";

const Modal = function Modal({ref}) {
    useEffect(() => {
        const dialogElement = ref.current;
        
        if (dialogElement) {
            const handleClose = () => {
                dialogElement.addEventListener('animationend', () => {
                    dialogElement.classList.remove('closing');
                }, { once: true });
                
                dialogElement.classList.add('closing');
            };
            
            dialogElement.addEventListener('cancel', (e) => {
                e.preventDefault();
                handleClose();
                setTimeout(() => {
                    dialogElement.close();
                }, 300);
            });
            
            dialogElement.addEventListener('click', (e) => {
                if (e.target === dialogElement) {
                    e.preventDefault();
                    handleClose();
                    setTimeout(() => {
                        dialogElement.close();
                    }, 300);
                }
            });
        }
    }, [ref]);

    return createPortal(
        <dialog ref={ref} className="modal">
            <h1>Сообщение отправлено</h1>
            <p>Спасибо за обратную связь!</p>
        </dialog>,
        document.getElementById('modal-root') || document.body
    );
};

export default Modal;