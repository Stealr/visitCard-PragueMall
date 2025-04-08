import { useState, useRef } from 'react';

import Input from "./Input"
import Modal from "/src/components/Modal";
import "/src/styles/left-side.css"

export default function LeftSide() {
    const dialog = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        topic: '',
        text: ''
    });

    // Список тем для выпадающего списка
    const topicOptions = [
        "Аренда",
        "Жалобы и предложения"
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleOpenModal()

        console.log(formData);

        setFormData({
            name: '',
            email: '',
            phone: '',
            topic: '',
            text: ''
        });
    };

    function handleOpenModal() {
        dialog.current.showModal();

        setTimeout(() => {
            dialog.current.classList.add('closing');

            setTimeout(() => {
                dialog.current.classList.remove('closing');
                dialog.current.close();
            }, 300);
        }, 2000);
    }

    return (
        <div className="left-side">
            <Modal ref={dialog} />
            <h2>Сайт на реконструкции</h2>
            <div className="form-section">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h3>Обратная связь</h3>
                        <Input name="name" value={formData.name} onChange={handleChange}>ФИО</Input>
                        <Input name="email" value={formData.email} onChange={handleChange}>Почта</Input>
                        <Input name="phone" type="phone" value={formData.phone} onChange={handleChange}>Телефон</Input>
                        <Input name="topic" value={formData.topic} onChange={handleChange} options={topicOptions}>Тема</Input>
                        <Input name="text" textarea value={formData.text} onChange={handleChange}>Текст</Input>

                        <button type="submit">Отправить</button>
                    </form>
                </div>
                <div className="on-section-light"></div>
                <div className="under-section-light"></div>
            </div>
        </div>
    )
}