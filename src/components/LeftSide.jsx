import Input from "./Input"

import "/src/styles/left-side.css"

export default function LeftSide() {
    return (
        <div className="left-side">
            <div className="form-section">
                <h2>Сайт на реконструкции</h2>

                <div className="form-container">
                    <form>
                        <h3>Обратная связь</h3>
                        <Input>ФИО</Input>
                        <Input>Почта</Input>
                        <Input>Телефон</Input>
                        <Input>Тема</Input>
                        <Input >Текст</Input>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}