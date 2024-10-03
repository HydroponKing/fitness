import Header from '../Header/Header'
import yogaImage from '/src/assets/img/yoga.jpg'
import manImage from '/src/assets/img/man.png'

export default function Course() {
  return (
    <div className="bg-white_bg font-Roboto">
      {/* Header */}
      <Header />

      {/* Yoga Section */}
<div className="relative mt-8 overflow-hidden rounded-[15px] ">
  <img
    src={yogaImage}
    alt="Йога"
    className="w-full object-cover h-[310px]  scale-105 " // изменяем object-position
  />
  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
    <h1 className="text-4xl font-bold">Йога</h1>
  </div>
</div>


      {/* Подойдет для вас блок */}
      <div className="py-10">
        <h2 className="text-3xl text-center mb-6">Подойдет для вас, если:</h2>
        <div className="flex justify-center space-x-6">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-number">1</div>
            <p className="text-center mt-2">
              Давно хотели попробовать йогу, но не решались начать
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-number">2</div>
            <p className="text-center mt-2">
              Хотите укрепить позвоночник, избавиться от болей
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-number">3</div>
            <p className="text-center mt-2">
              Ищете активность, полезную для тела и души
            </p>
          </div>
        </div>
      </div>

      {/* Направления */}
      <div className="bg-green_bg py-8">
        <h2 className="text-center text-xl mb-6">Направления</h2>
        <div className="flex justify-center flex-wrap space-x-4">
          <span className="bg-white px-4 py-2 rounded-full">Йога для новичков</span>
          <span className="bg-white px-4 py-2 rounded-full">Классическая йога</span>
          <span className="bg-white px-4 py-2 rounded-full">Кундалини-йога</span>
          <span className="bg-white px-4 py-2 rounded-full">Йогатерапия</span>
          <span className="bg-white px-4 py-2 rounded-full">Хатха-йога</span>
          <span className="bg-white px-4 py-2 rounded-full">Аштанга-йога</span>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="relative py-10 bg-gray_bg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Начните путь к новому телу</h2>
            <ul className="mt-4 space-y-2">
              <li>Пророботка всех групп мышц</li>
              <li>Тренировка суставов</li>
              <li>Улучшение циркуляции крови</li>
              <li>Упражнения заряжают бодростью</li>
              <li>Помогают противостоять стрессам</li>
            </ul>
            <button className="mt-6 bg-green_bg hover:bg-hover active:bg-active text-black py-3 px-6 rounded-full">
              Войти, чтобы добавить курс
            </button>
          </div>
          <div>
            <img src={manImage} alt="Man" className="w-[300px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
