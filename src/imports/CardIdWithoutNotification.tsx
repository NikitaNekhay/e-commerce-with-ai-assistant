import svgPaths from "./svg-kcs0k60579";
import img from "figma:asset/ed1a3918446e091f3df5b3490f2d83a31027a906.png";

function Component4() {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium items-center justify-between leading-[40px] relative shrink-0 text-[30px] text-[rgba(0,0,0,0.85)] w-full" data-name="Тайтл">
      <p className="h-[40px] relative shrink-0 w-[942px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        MacBook Pro 16”
      </p>
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        64000 ₽
      </p>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#1890ff] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Редактировать">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Text/Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#f3f3f3] text-[16px] whitespace-nowrap">Редактировать</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Edit">
        <div className="absolute inset-[5.35%_5.36%_5.37%_5.36%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0714 16.0714">
            <path d={svgPaths.p39f7b200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal h-[42px] leading-[normal] not-italic relative shrink-0 text-[#848388] text-[16px] w-[266px] whitespace-nowrap">
      <p className="absolute left-[26px] top-0">Опубликовано: 10 марта 22:39</p>
      <p className="absolute left-0 top-[23px]">Отредактировано: 10 марта 23:12</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Component5 />
      <Frame />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="Текст">
      <Component4 />
      <Frame1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Основная информация">
      <Component3 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[480px]" data-name="Фотки">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Главная">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#fafafa] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={img} />
        </div>
        <div className="flex h-[360.014px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-45 flex-none w-full">
            <div className="content-stretch flex h-[480px] items-start relative w-full" data-name="Aspect ratio keeper # Additionally 45º rotated Auto Layout">
              <div className="flex h-full items-center justify-center relative shrink-0 w-[29.136px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none h-full rotate-[3.48deg]">
                  <div className="h-full w-0" data-name="Aspect ratio keeper # Rotated Auto Layout" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Характеристика">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-[148px]" data-name="Text/Text">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.45)] whitespace-nowrap">Тип</p>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Text/Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Ноутбук</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Характеристика">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-[148px]" data-name="Text/Text">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.45)] whitespace-nowrap">Бренд</p>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Text/Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Apple</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Характеристика">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-[148px]" data-name="Text/Text">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.45)] whitespace-nowrap">Модель</p>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Text/Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">M1 Pro</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Характеристика">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-[148px]" data-name="Text/Text">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.45)] whitespace-nowrap">Цвет</p>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Text/Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Серый</p>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Характеристика">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-[148px]" data-name="Text/Text">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.45)] whitespace-nowrap">Состояние</p>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Text/Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Б/У</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Список характеристик">
      <Component11 />
      <Component12 />
      <Component13 />
      <Component14 />
      <Component15 />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[527px]" data-name="Характеристики">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[22px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Характеристики
      </p>
      <Component10 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[527px]" data-name="Секция">
      <Component9 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Детали">
      <Component7 />
      <Component8 />
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[480px]" data-name="Описание">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[22px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Описание
      </p>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Text/Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full">{`Продаю свой MacBook Pro 16" (2021) на чипе M1 Pro. Состояние отличное, работал бережно. Мощности хватает на всё: от сложного монтажа до кода, при этом ноутбук почти не греется.`}</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] h-[917px] items-start left-[165px] pb-[48px] pt-[32px] px-[32px] rounded-[16px] top-[104px] w-[1399px]" data-name="Объявление (контейнер)">
      <Component2 />
      <div className="bg-[#f0f0f0] h-px shrink-0 w-full" data-name="Rectangle" />
      <Component6 />
      <Component16 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[1177px] left-[-168px] top-[-104px] w-[1728px]" data-name="Просмотр объявления (не требуются доработки)">
      <div className="absolute h-[917px] left-[164px] top-[104px] w-[1400px]" data-name="browser">
        <div className="absolute bg-white inset-0 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15),0px_25px_30px_0px_rgba(0,0,0,0.35)]" data-name="Window" />
      </div>
      <Component1 />
    </div>
  );
}

export default function CardIdWithoutNotification() {
  return (
    <div className="bg-[#f1f1f1] relative size-full" data-name="/card/[id] without Notification">
      <Component />
    </div>
  );
}