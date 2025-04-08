import "/src/styles/right-side.css"

export default function RightSide() {
    return (
        <div className="right-side">

            <div className="blur-wrapper mobile">
                <img src="/src/assets/Backside.png" className="blurred-image" alt="background-img" />
            </div>

            <div className="info-section">

                <h1 className="right-side__title">Пражский Пассаж</h1>
                <div className="address">
                    117519, г. Москва, ЮАО, м. Пражская, ул. Красного Маяка, 2Б.
                </div>
                <div className="info-box">
                    <div className="info-column left-column">
                        <p className="info-item">Время работы: 10:00–22:00</p>

                        <p className="info-item">Супермаркет «Да!»: 8:30–22:30</p>

                        <p className="info-item">Фитнес «Raketa»: 7:00–24:00</p>
                    </div>

                    <div className="info-column right-column">
                        <p className="info-item">Информация по всем вопросам:<br />+7 (499) 644-99-44</p>

                        <p className="info-item">По вопросам аренды:<br />+7 (499) 644-99-99</p>

                        <p className="info-item">arenda@columbus-moscow.ru</p>
                    </div>
                </div>
            </div>
        </div>
    )
}