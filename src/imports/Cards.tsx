import svgPaths from "./svg-ccld4sy6yb";
import imgCover from "figma:asset/ed1a3918446e091f3df5b3490f2d83a31027a906.png";

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[12px] relative shrink-0 w-[436px] whitespace-nowrap" data-name="Тайтл + количество объявлений">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[22px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Мои объявления
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#848388] text-[18px]">42 объявления</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Инфо о продавце">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[8px] relative w-full">
          <Component2 />
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#f4f4f6] content-stretch flex gap-[21px] h-[32px] items-center justify-center overflow-clip px-[8px] relative rounded-[8px] shrink-0" data-name="Лист">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Appstore">
        <div className="absolute inset-[8.94%_8.93%_8.92%_8.93%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5714 29.5714">
            <path d={svgPaths.p1e7a0900} fill="var(--fill-0, black)" fillOpacity="0.85" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="UnorderedList">
        <div className="absolute inset-[12.06%_4.46%_12.05%_4.47%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7857 27.3214">
            <path d={svgPaths.p198bb500} fill="var(--fill-0, black)" fillOpacity="0.85" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[28px] items-center justify-center left-[37px] top-[2px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 2">
                <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="2" x2="28" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Лейаут">
      <Component6 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end overflow-clip relative shrink-0" data-name="Действия">
      <Component5 />
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Dropdown-Trigger">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[5px] relative rounded-[inherit]">
          <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Text/Text">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Text line
            </p>
          </div>
          <div className="h-[11.25px] relative shrink-0 w-[10px]" data-name="icon-wrapper">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11.25">
              <g id="icon-wrapper">
                <path d={svgPaths.p2d0ebb00} fill="var(--fill-0, black)" fillOpacity="0.85" id="Union" />
              </g>
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-4 border-[#f4f4f6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)]" />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Поиск">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[12px] relative w-full">
          <div className="bg-[#f6f6f8] content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative rounded-[8px]" data-name="input/medium/normal/false/false/false/false/true">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[2px] rounded-tl-[2px]" data-name="input-field">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center px-[12px] py-[5px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="placeholder">
                    <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[22px]">example</p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-bl-[2px] rounded-tl-[2px]" />
            </div>
            <div className="flex flex-row items-center self-stretch">
              <div className="bg-[#fafafa] h-full relative rounded-br-[2px] rounded-tr-[2px] shrink-0" data-name="input-addon-right">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex h-full items-center justify-center px-[12px] py-[9px] relative">
                    <div className="h-[13.999px] relative shrink-0 w-[14px]" data-name="icon-wrapper">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.999">
                        <g id="icon-wrapper">
                          <path d={svgPaths.p327f6c00} fill="var(--fill-0, black)" fillOpacity="0.85" id="Union" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_#d9d9d9,inset_0px_1px_0px_0px_#d9d9d9,inset_0px_-1px_0px_0px_#d9d9d9]" />
              </div>
            </div>
          </div>
          <Component4 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="header">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative" data-name="Text/Text">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Категория
        </p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[12px]" data-name="Down">
            <div className="absolute inset-[21.43%_7.59%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5352 20.5714">
                <path d={svgPaths.p2bf4a030} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollapseItemLegacy1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name=".Collapse-Item (Legacy)">
      <Header />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[8px] relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-name="Checkbox-Group">
        <button className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
          <div className="relative shrink-0 size-[16px]" data-name="checkbox-input">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="checkbox-input">
                <rect fill="var(--fill-0, white)" height="16" rx="2" width="16" />
                <rect fill="var(--fill-0, #1890FF)" height="16" id="bg" rx="2" width="16" />
                <g id="border" />
                <path d={svgPaths.p360dcf00} fill="var(--fill-0, white)" id="check" />
              </g>
            </svg>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-left whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Label
          </p>
        </button>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
          <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="checkbox-input">
            <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
            </div>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Label
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
          <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="checkbox-input">
            <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
            </div>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Label
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
          <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="checkbox-input">
            <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
            </div>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Label
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
          <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="checkbox-input">
            <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
            </div>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Label
          </p>
        </div>
      </div>
    </div>
  );
}

function CollapseItemLegacy() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name=".Collapse-Item (Legacy)">
      <CollapseItemLegacy1 />
      <Content />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Тоггл">
      <div className="content-stretch flex flex-col h-[40px] items-start justify-center overflow-clip relative shrink-0 w-[180px]" data-name="Text/Text">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Только требующие доработок
        </p>
      </div>
      <div className="bg-[#bfbfbf] content-stretch cursor-pointer flex gap-[4px] items-center pl-[2px] pr-[24px] py-[2px] relative rounded-[16px] shrink-0" data-name="Switch">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black blur-[1px] h-[30px] left-1/2 opacity-1 rounded-[23px] top-1/2 w-[52px]" data-name="halo" />
        <div className="overflow-clip relative rounded-[77px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] shrink-0 size-[18px]" data-name="switch-nob/default">
          <div className="absolute bg-white inset-0 rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Фильтры">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Фильтры
      </p>
      <CollapseItemLegacy />
      <div className="bg-[#f0f0f0] h-px shrink-0 w-full" data-name="Rectangle" />
      <Component10 />
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Сброс">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#848388] text-[14px] whitespace-nowrap">Сбросить фильтры</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0" data-name="Контейнер для фильтров">
      <Component9 />
      <Component11 />
    </div>
  );
}

function Count() {
  return (
    <div className="absolute bg-white left-[12px] rounded-[6px] top-[140px]" data-name="count">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Электроника
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[268px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="cover">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]">
            <div className="absolute bg-[#fafafa] inset-0 rounded-bl-[8px] rounded-br-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[8px] rounded-br-[8px] size-full" src={imgCover} />
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
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="body">
          <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[22px] px-[16px] relative size-full">
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=primary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=secondary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
          </div>
        </div>
        <Count />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-[#f9f1e6] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Требует доработок">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[100px] shrink-0" data-name="Badge/Dot">
        <div className="bg-[#faad14] content-stretch flex items-start overflow-clip relative rounded-[100px] shrink-0" data-name="dot">
          <div className="flex h-[6.002px] items-center justify-center relative shrink-0 w-[0.001px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative" data-name="height">
                <div className="shrink-0 size-[0.001px]" />
                <div className="shrink-0 size-[0.001px]" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="width">
            <div className="shrink-0 size-[0.001px]" />
            <div className="shrink-0 size-[0.001px]" />
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#faad14] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Требует доработок
      </p>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[22px] px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Text/Text">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Volkswagen Polo
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Text/Text">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            1100000 ₽
          </p>
        </div>
        <Component14 />
      </div>
    </div>
  );
}

function Count1() {
  return (
    <div className="absolute bg-white left-[12px] rounded-[6px] top-[140px]" data-name="count">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Авто
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[268px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="cover">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]">
            <div className="absolute bg-[#fafafa] inset-0 rounded-bl-[8px] rounded-br-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[8px] rounded-br-[8px] size-full" src={imgCover} />
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
        <Body />
        <Count1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Count2() {
  return (
    <div className="absolute bg-white left-[12px] rounded-[6px] top-[140px]" data-name="count">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Недвижимость
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[268px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="cover">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]">
            <div className="absolute bg-[#fafafa] inset-0 rounded-bl-[8px] rounded-br-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[8px] rounded-br-[8px] size-full" src={imgCover} />
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
        <div className="relative shrink-0 w-full" data-name="body">
          <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[22px] px-[16px] relative w-full">
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=primary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=secondary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
          </div>
        </div>
        <Count2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-[#f9f1e6] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Требует доработок">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[100px] shrink-0" data-name="Badge/Dot">
        <div className="bg-[#faad14] content-stretch flex items-start overflow-clip relative rounded-[100px] shrink-0" data-name="dot">
          <div className="flex h-[6.002px] items-center justify-center relative shrink-0 w-[0.001px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative" data-name="height">
                <div className="shrink-0 size-[0.001px]" />
                <div className="shrink-0 size-[0.001px]" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="width">
            <div className="shrink-0 size-[0.001px]" />
            <div className="shrink-0 size-[0.001px]" />
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#faad14] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Требует доработок
      </p>
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[22px] px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Text/Text">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            1-кк, 44м²
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Text/Text">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            19000000 ₽
          </p>
        </div>
        <Component15 />
      </div>
    </div>
  );
}

function Count3() {
  return (
    <div className="absolute bg-white left-[12px] rounded-[6px] top-[140px]" data-name="count">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Недвижимость
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[200px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="cover">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]">
            <div className="absolute bg-[#fafafa] inset-0 rounded-bl-[8px] rounded-br-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[8px] rounded-br-[8px] size-full" src={imgCover} />
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
        <Body1 />
        <Count3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component16() {
  return (
    <div className="bg-[#f9f1e6] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Требует доработок">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[100px] shrink-0" data-name="Badge/Dot">
        <div className="bg-[#faad14] content-stretch flex items-start overflow-clip relative rounded-[100px] shrink-0" data-name="dot">
          <div className="flex h-[6.002px] items-center justify-center relative shrink-0 w-[0.001px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative" data-name="height">
                <div className="shrink-0 size-[0.001px]" />
                <div className="shrink-0 size-[0.001px]" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="width">
            <div className="shrink-0 size-[0.001px]" />
            <div className="shrink-0 size-[0.001px]" />
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#faad14] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Требует доработок
      </p>
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[22px] px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Text/Text">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            MacBook Pro 16”
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Text/Text">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            64000 ₽
          </p>
        </div>
        <Component16 />
      </div>
    </div>
  );
}

function Count4() {
  return (
    <div className="absolute bg-white left-[12px] rounded-[6px] top-[140px]" data-name="count">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Электроника
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[200px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="cover">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]">
            <div className="absolute bg-[#fafafa] inset-0 rounded-bl-[8px] rounded-br-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[8px] rounded-br-[8px] size-full" src={imgCover} />
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
        <Body2 />
        <Count4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Count5() {
  return (
    <div className="absolute bg-white left-[12px] rounded-[6px] top-[140px]" data-name="count">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Авто
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[268px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="cover">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]">
            <div className="absolute bg-[#fafafa] inset-0 rounded-bl-[8px] rounded-br-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[8px] rounded-br-[8px] size-full" src={imgCover} />
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
        <div className="relative shrink-0 w-full" data-name="body">
          <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[22px] px-[16px] relative w-full">
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=primary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=secondary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
          </div>
        </div>
        <Count5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Count6() {
  return (
    <div className="absolute bg-white left-[12px] rounded-[6px] top-[140px]" data-name="count">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Электроника
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[268px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="cover">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]">
            <div className="absolute bg-[#fafafa] inset-0 rounded-bl-[8px] rounded-br-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[8px] rounded-br-[8px] size-full" src={imgCover} />
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
        <div className="relative shrink-0 w-full" data-name="body">
          <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[22px] px-[16px] relative w-full">
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=primary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=secondary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
          </div>
        </div>
        <Count6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Count7() {
  return (
    <div className="absolute bg-white left-[12px] rounded-[6px] top-[140px]" data-name="count">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Электроника
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white h-[268px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="cover">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]">
            <div className="absolute bg-[#fafafa] inset-0 rounded-bl-[8px] rounded-br-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[8px] rounded-br-[8px] size-full" src={imgCover} />
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
        <div className="relative shrink-0 w-full" data-name="body">
          <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[22px] px-[16px] relative w-full">
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=primary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=secondary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
          </div>
        </div>
        <Count7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-[#f9f1e6] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Требует доработок">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[100px] shrink-0" data-name="Badge/Dot">
        <div className="bg-[#faad14] content-stretch flex items-start overflow-clip relative rounded-[100px] shrink-0" data-name="dot">
          <div className="flex h-[6.002px] items-center justify-center relative shrink-0 w-[0.001px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative" data-name="height">
                <div className="shrink-0 size-[0.001px]" />
                <div className="shrink-0 size-[0.001px]" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="width">
            <div className="shrink-0 size-[0.001px]" />
            <div className="shrink-0 size-[0.001px]" />
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#faad14] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Требует доработок
      </p>
    </div>
  );
}

function Body3() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[22px] px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Text/Text">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Toyota Camry
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Text/Text">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            3900000 ₽
          </p>
        </div>
        <Component17 />
      </div>
    </div>
  );
}

function Count8() {
  return (
    <div className="absolute bg-white left-[12px] rounded-[6px] top-[140px]" data-name="count">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Авто
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[200px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="cover">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]">
            <div className="absolute bg-[#fafafa] inset-0 rounded-bl-[8px] rounded-br-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[8px] rounded-br-[8px] size-full" src={imgCover} />
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
        <Body3 />
        <Count8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Count9() {
  return (
    <div className="absolute bg-white left-[12px] rounded-[6px] top-[140px]" data-name="count">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Электроника
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-white h-[268px] relative rounded-[16px] shrink-0 w-[200px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="cover">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]">
            <div className="absolute bg-[#fafafa] inset-0 rounded-bl-[8px] rounded-br-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[8px] rounded-br-[8px] size-full" src={imgCover} />
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
        <div className="relative shrink-0 w-full" data-name="body">
          <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[22px] px-[16px] relative w-full">
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=primary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Hierarchy=secondary, Bullet=false, Editable=false, Copyable=false">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Text line
              </p>
            </div>
          </div>
        </div>
        <Count9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component13() {
  return (
    <div className="content-start flex flex-wrap gap-y-[12px] items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Объявления">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Контейнер для объявлений">
      <Component13 />
      <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-[272px]" data-name="Pagination">
        <div className="bg-white relative rounded-[2px] shrink-0" data-name="Components/Pagination-Prev">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Left">
              <div className="absolute inset-[7.7%_26.34%_7.71%_20.54%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1251 30.4526">
                  <path d={svgPaths.p2fdf2a00} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
        <button className="bg-white cursor-pointer relative rounded-[2px] shrink-0" data-name="Components/Pagination-Item">
          <div className="content-stretch flex flex-col items-center overflow-clip px-[7px] py-px relative rounded-[inherit]">
            <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[30px] justify-center leading-[0] relative shrink-0 text-[#1890ff] text-[14px] text-center w-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[22px]">1</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#1890ff] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </button>
        <div className="bg-white relative rounded-[2px] shrink-0" data-name="Components/Pagination-Item">
          <div className="content-stretch flex flex-col items-center overflow-clip px-[7px] py-px relative rounded-[inherit]">
            <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[30px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-center w-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[22px]">1</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
        <div className="bg-white relative rounded-[2px] shrink-0" data-name="Components/Pagination-Item">
          <div className="content-stretch flex flex-col items-center overflow-clip px-[7px] py-px relative rounded-[inherit]">
            <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[30px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-center w-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[22px]">1</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
        <div className="bg-white relative rounded-[2px] shrink-0" data-name="Components/Pagination-Item">
          <div className="content-stretch flex flex-col items-center overflow-clip px-[7px] py-px relative rounded-[inherit]">
            <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[30px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-center w-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[22px]">1</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
        <div className="bg-white relative rounded-[2px] shrink-0" data-name="Components/Pagination-Item">
          <div className="content-stretch flex flex-col items-center overflow-clip px-[7px] py-px relative rounded-[inherit]">
            <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[30px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-center w-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[22px]">1</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
        <div className="bg-white relative rounded-[2px] shrink-0" data-name="pagination-item/next">
          <div className="content-stretch flex items-start overflow-clip p-[10px] relative rounded-[inherit]">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Right">
              <div className="absolute inset-[7.7%_20.31%_7.7%_26.56%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1251 30.4563">
                  <path d={svgPaths.p3d606240} fill="var(--fill-0, black)" fillOpacity="0.85" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Фид">
      <Component8 />
      <Component12 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-[#f7f5f8] content-stretch flex flex-col gap-[16px] h-[838px] items-start left-px overflow-clip px-[32px] py-[12px] top-0 w-[1399px]" data-name="С пагинацией">
      <Component1 />
      <Component3 />
      <Component7 />
    </div>
  );
}

export default function Cards() {
  return (
    <div className="relative size-full" data-name="/cards">
      <div className="absolute h-[837px] left-0 top-0 w-[1400px]" data-name="browser">
        <div className="absolute inset-0 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15),0px_25px_30px_0px_rgba(0,0,0,0.35)]" data-name="Window">
          <div className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.75)] inset-0 rounded-[10px]" data-name="Window Frame">
            <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[10.5px]" />
          </div>
          <div className="absolute bg-white h-[28px] left-0 overflow-clip right-0 rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.15)] top-0" data-name="Titlebar">
            <div className="absolute h-[12px] left-[8px] top-[8px] w-[52px]" data-name="Traffic Lights">
              <div className="absolute left-0 size-[12px] top-0" data-name="Control">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <g id="Control">
                    <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #EC6A5E)" fillRule="evenodd" />
                    <path d={svgPaths.p107e4900} stroke="var(--stroke-0, black)" strokeOpacity="0.12" strokeWidth="0.5" />
                  </g>
                </svg>
              </div>
              <div className="absolute left-[20px] size-[12px] top-0" data-name="Control">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <g id="Control">
                    <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #F5BF4F)" fillRule="evenodd" />
                    <path d={svgPaths.p107e4900} stroke="var(--stroke-0, black)" strokeOpacity="0.12" strokeWidth="0.5" />
                  </g>
                </svg>
              </div>
              <div className="absolute left-[40px] size-[12px] top-0" data-name="Control">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <g id="Control">
                    <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #61C554)" fillRule="evenodd" />
                    <path d={svgPaths.p107e4900} stroke="var(--stroke-0, black)" strokeOpacity="0.12" strokeWidth="0.5" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#3d3d3d] text-[13px] text-center top-[14px] tracking-[-0.052px] whitespace-nowrap">
              <p className="leading-[normal]">Window Title (Active)</p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_rgba(0,0,0,0.05)]" />
          </div>
        </div>
        <div className="absolute bg-white h-[52px] left-0 overflow-clip right-0 rounded-tl-[10px] rounded-tr-[10px] top-0" data-name="address bar">
          <div className="absolute h-[12px] left-[20px] top-[20px] w-[52px]" data-name="Traffic Lights">
            <div className="absolute left-0 size-[12px] top-0" data-name="Control">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Control">
                  <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #EC6A5E)" fillRule="evenodd" />
                  <path d={svgPaths.p107e4900} stroke="var(--stroke-0, black)" strokeOpacity="0.12" strokeWidth="0.5" />
                </g>
              </svg>
            </div>
            <div className="absolute left-[20px] size-[12px] top-0" data-name="Control">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Control">
                  <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #F5BF4F)" fillRule="evenodd" />
                  <path d={svgPaths.p107e4900} stroke="var(--stroke-0, black)" strokeOpacity="0.12" strokeWidth="0.5" />
                </g>
              </svg>
            </div>
            <div className="absolute left-[40px] size-[12px] top-0" data-name="Control">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Control">
                  <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #61C554)" fillRule="evenodd" />
                  <path d={svgPaths.p107e4900} stroke="var(--stroke-0, black)" strokeOpacity="0.12" strokeWidth="0.5" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[4px] items-center left-[96px] top-[16px]">
            <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic opacity-70 relative shrink-0 text-[#3d3d3d] text-[17px] tracking-[-0.35px] whitespace-nowrap">􀏚</p>
            <div className="bg-[#3d3d3d] h-[18px] opacity-10 shrink-0 w-px" />
            <p className="font-['SF_Pro_Display:Heavy',sans-serif] leading-[normal] not-italic opacity-60 relative shrink-0 text-[#3d3d3d] text-[8px] tracking-[-0.35px] whitespace-nowrap">􀆈</p>
          </div>
          <p className="absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] left-[159px] not-italic opacity-70 text-[#3d3d3d] text-[17px] top-[16px] tracking-[-0.35px] whitespace-nowrap">􀆉</p>
          <div className="absolute content-stretch flex font-['SF_Pro_Display:Regular',sans-serif] gap-[24px] items-start leading-[normal] not-italic right-[26px] text-[#3d3d3d] text-[17px] top-[16px] tracking-[-0.35px] whitespace-nowrap">
            <p className="opacity-70 relative shrink-0">􀁸</p>
            <p className="opacity-70 relative shrink-0">􀈂</p>
            <p className="opacity-70 relative shrink-0">􀅼</p>
          </div>
          <div className="absolute h-[28px] left-[188px] top-[12px] w-[32px]" data-name="pinned tab" />
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[12px]" data-name="tab row">
            <div className="bg-[rgba(61,61,61,0.2)] h-[28px] relative rounded-[6px] shrink-0 w-[480px]" data-name="active tab">
              <p className="absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic opacity-70 right-[27px] text-[#3d3d3d] text-[15px] top-[calc(50%-9px)] translate-x-full whitespace-nowrap">􀍢</p>
              <div className="-translate-x-1/2 absolute content-stretch flex gap-[9px] items-center left-1/2 top-[5px]" data-name="website">
                <div className="bg-[#3d3d3d] rounded-[2px] shrink-0 size-[16px]" data-name="favicon" />
                <div className="content-stretch flex gap-[3px] items-end justify-center leading-[normal] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
                  <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 tracking-[0.21px]">apple.com</p>
                  <p className="font-['SF_Pro_Display:Light',sans-serif] opacity-70 relative shrink-0">􀎡</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Component />
    </div>
  );
}