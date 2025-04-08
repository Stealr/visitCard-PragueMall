import "/src/styles/right-side.css"

export default function RightSide() {
    return (
        <div className="right-side">
            <div className="info-section">
                <h1 className="right-side__title">Пражский пассаж</h1>
                <div className="address">
                    117519, г. Москва, ЮАО, м. Пражская, ул. Красного Маяка, 2Б.
                </div>
                <div className="info-box">
                    <div className="info-group">
                        <p className="info-heading">Время работы: 10:00-22:00</p>
                        <p>Супермаркет «Да!»: 8:30-22:30</p>
                        <p>Фитнес «Ракета»: 7:00-24:00</p>
                    </div>

                    <div className="info-group">
                        <p className="info-heading">Информация по всем вопросам:</p>
                        <p>+7 (495) 114-44-40</p>

                        <p className="info-heading">По вопросам аренды:</p>
                        <p>+7 (499) 644-99-99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}