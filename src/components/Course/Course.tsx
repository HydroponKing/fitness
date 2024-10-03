import Header from '../Header/Header'
import yogaImage from '/src/assets/img/yoga.jpg'
import manImage from '/src/assets/img/man.png'
import IconStar from '/src/assets/img/icon/star.svg';
import lineImage from '/src/assets/img/line.png'


export default function Course() {
  return (
    <div className="font-Roboto max-w-[1200px] mx-auto">
      {/* Header */}
      <Header />

      {/* Yoga Section */}
      <div className="relative mt-8 overflow-hidden rounded-[30px] h-[310px]">
  <div className="absolute top-[40px] left-[40px] text-white">
    <h1 className="text-4xl font-bold">Йога</h1>
  </div>
  <div className="h-[325px] bg-yellow_bg">
    <img
      src={yogaImage}
      alt="Йога"
      className="h-[260%] rounded-[30px] object-cover -translate-y-[35%] lg:object-[150px] scale-[0.85]" 
    />
  </div>
</div>



{/* Подойдет для вас блок */}
<div className="py-10">
<h2 className="font-Roboto text-[40px] font-semibold leading-[44px] text-left mb-6">
  Подойдет для вас, если:
</h2>

  <div className="flex justify-center gap-[30px]">
    {/* Первый блок */}
    <div className="flex items-center bg-black_bg p-[20px] rounded-[28px] h-[141px] w-[368px]">
      <div className="text-[75px] font-bold text-number mr-4 pr-[10px]">1</div>
      <p className="text-white text-[24px]">
        Давно хотели попробовать йогу, но не решались начать
      </p>
    </div>

    {/* Второй блок */}
    <div className="flex items-center bg-black_bg p-[20px] rounded-[28px] h-[141px] w-[431px]">
      <div className="text-[75px] font-bold text-number mr-4 pr-[10px]">2</div>
      <p className="text-white text-[24px]">
        Хотите укрепить позвоночник, избавиться от болей
      </p>
    </div>

    {/* Третий блок */}
    <div className="flex items-center bg-black_bg p-[20px] rounded-[28px] h-[141px] w-[327px]">
      <div className="text-[75px] font-bold text-number mr-4 pr-[10px]">3</div>
      <p className="text-white text-[24px]">
        Ищете активность, полезную для тела и души
      </p>
    </div>
  </div>
</div>

{/* Направления */}
<div className="py-8">
  <h2 className="font-Roboto text-[40px] font-semibold leading-[44px] text-left mb-6">Направления</h2>
  <div className="bg-green_bg rounded-[20px] p-4 grid grid-cols-3 gap-4">
    {/* Ссылка 1 */}
    <a href="#" className="flex items-center text-black text-[24px] font-normal leading-[26.4px] px-4 py-2 rounded-full bg-green_bg">
      <img src={IconStar} alt="star icon" className="mr-2" />
      Йога для новичков
    </a>
    {/* Ссылка 2 */}
    <a href="#" className="flex items-center text-black text-[24px] font-normal leading-[26.4px] px-4 py-2 rounded-full bg-green_bg">
      <img src={IconStar} alt="star icon" className="mr-2" />
      Классическая йога
    </a>
    {/* Ссылка 3 */}
    <a href="#" className="flex items-center text-black text-[24px] font-normal leading-[26.4px] px-4 py-2 rounded-full bg-green_bg">
      <img src={IconStar} alt="star icon" className="mr-2" />
      Кундалини-йога
    </a>
    {/* Ссылка 4 */}
    <a href="#" className="flex items-center text-black text-[24px] font-normal leading-[26.4px] px-4 py-2 rounded-full bg-green_bg">
      <img src={IconStar} alt="star icon" className="mr-2" />
      Йогатерапия
    </a>
    {/* Ссылка 5 */}
    <a href="#" className="flex items-center text-black text-[24px] font-normal leading-[26.4px] px-4 py-2 rounded-full bg-green_bg">
      <img src={IconStar} alt="star icon" className="mr-2" />
      Хатха-йога
    </a>
    {/* Ссылка 6 */}
    <a href="#" className="flex items-center text-black text-[24px] font-normal leading-[26.4px] px-4 py-2 rounded-full bg-green_bg">
      <img src={IconStar} alt="star icon" className="mr-2" />
      Аштанга-йога
    </a>
  </div>
</div>


{/* Призыв к действию */}
<div className="relative py-10  w-[1200px] h-[300px]">
<div className="container mx-auto flex justify-between items-center bg-white shadow-2xl rounded-[20px] h-[490px]">
    <div>
      <h2 className="font-Roboto text-[60px] font-medium leading-[60px] text-left text-black w-[420px]">
        Начните путь к новому телу
      </h2>
	  <ul className="mt-4 space-y-2 bg-gray-200 p-4 rounded list-disc list-inside">
  <li className="font-Roboto text-[24px] font-normal leading-[26.4px] text-left text-gray">
    пророботка всех групп мышц
  </li>
  <li className="font-Roboto text-[24px] font-normal leading-[26.4px] text-left text-gray">
    тренировка суставов
  </li>
  <li className="font-Roboto text-[24px] font-normal leading-[26.4px] text-left text-gray">
    улучшение циркуляции крови
  </li>
  <li className="font-Roboto text-[24px] font-normal leading-[26.4px] text-left text-gray">
    упражнения заряжают бодростью
  </li>
  <li className="font-Roboto text-[24px] font-normal leading-[26.4px] text-left text-gray">
    помогают противостоять стрессам
  </li>
</ul>

<button className="mt-6 bg-regular hover:bg-hover active:bg-active text-black py-3 px-6 rounded-full w-[437px]">
  Добавить курс
</button>
    </div>

    {/* Контейнер для изображения мужчины и линии */}
    <div className="relative">
      {/* Line Image */}
      <img
        src={lineImage}
        alt="Line"
        className="absolute top-0 left-[-50px] z-0 translate-x-[0px] translate-y-[130px] scale-[1.27]" 
      />
      {/* Man Image */}
      <img
        src={manImage}
        alt="Man"
        className="relative z-10 w-[500px] h-auto translate-x-[-40px] translate-y-[-70px]"
      />
    </div>
  </div>
</div>


    </div>
  )
}
