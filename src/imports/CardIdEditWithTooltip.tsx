import svgPaths from "./svg-ejjtag1z47";

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Категория">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] w-[942px]">Категория</p>
      <div className="bg-white content-stretch flex items-start px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[456px]" data-name="Select">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip py-px relative" data-name="selection-item">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Электроника
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center pl-[6px] relative self-stretch shrink-0" data-name="icon">
          <div className="relative shrink-0 size-[12px]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1778 6.85736">
              <path d={svgPaths.p3798b380} fill="var(--fill-0, black)" fillOpacity="0.25" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start not-italic relative shrink-0" data-name="Обязательное поле">
      <p className="font-['SimSong:Regular',sans-serif] leading-[22.001px] relative shrink-0 text-[#ff4d4f] text-[14px] text-right whitespace-nowrap">*</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] w-[942px]">Название</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Название">
      <Component3 />
      <div className="bg-white content-stretch flex isolate items-center relative rounded-[8px] shrink-0 w-[456px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative rounded-[8px] z-[2]" data-name="wrap">
          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="input">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[5px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="placeholder">
                  <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[22px]">MacBook Pro 16”</p>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[14px]" data-name="input-suffix">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.25">
                      <path d={svgPaths.p28fa7880} fill="var(--fill-0, black)" fillOpacity="0.25" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start not-italic relative shrink-0" data-name="Лейбл">
      <p className="font-['SimSong:Regular',sans-serif] leading-[22.001px] relative shrink-0 text-[#ff4d4f] text-[14px] text-right whitespace-nowrap">*</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] w-[942px]">Цена</p>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0" data-name="Icon-Wrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Redo">
          <div className="absolute inset-[6.69%_5.36%_6.71%_5.36%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.1234">
              <path d={svgPaths.p8474100} fill="var(--fill-0, #FFA940)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f9f1e6] content-stretch flex gap-[10px] h-[32px] items-center justify-center overflow-clip px-[7px] relative rounded-[8px] shrink-0 w-[195px]" data-name="Button">
      <IconWrapper />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#ffa940] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Повторить запрос
      </p>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Поле">
      <div className="bg-white content-stretch flex isolate items-center relative rounded-[8px] shrink-0 w-[456px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative rounded-[8px] z-[2]" data-name="wrap">
          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="input">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[5px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="placeholder">
                  <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[22px]">120000</p>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[14px]" data-name="input-suffix">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.25">
                      <path d={svgPaths.p28fa7880} fill="var(--fill-0, black)" fillOpacity="0.25" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Цена">
      <Component5 />
      <Component6 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pb-[8px] relative shrink-0 text-[14px] w-full" data-name="label">
      <p className="font-['SimSong:Regular',sans-serif] leading-[22.001px] not-italic relative shrink-0 text-[#ff4d4f] text-right whitespace-nowrap">*</p>
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Тип
      </p>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="placeholder">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Ноутбук</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[12px] py-[5px] relative rounded-[2px] shrink-0 w-[921px]" data-name="input">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-[2px]" />
      <Placeholder />
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Input />
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="input-suffix">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.25">
              <path d={svgPaths.p28fa7880} fill="var(--fill-0, black)" fillOpacity="0.25" id="Union" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function VerticalFormItemInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[6]" data-name="Vertical-Form-Item/Input">
      <Label />
      <Field />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-name="label">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Бренд
      </p>
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="placeholder">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Apple</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[12px] py-[5px] relative rounded-[2px] shrink-0 w-[921px]" data-name="input">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-[2px]" />
      <Placeholder1 />
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Input1 />
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="input-suffix">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.25">
              <path d={svgPaths.p28fa7880} fill="var(--fill-0, black)" fillOpacity="0.25" id="Union" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function VerticalFormItemInput1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[5]" data-name="Vertical-Form-Item/Input">
      <Label1 />
      <Field1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-name="label">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Модель
      </p>
    </div>
  );
}

function Placeholder2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="placeholder">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">M1 Pro</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[12px] py-[5px] relative rounded-[2px] shrink-0 w-[921px]" data-name="input">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-[2px]" />
      <Placeholder2 />
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Input2 />
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="input-suffix">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.25">
              <path d={svgPaths.p28fa7880} fill="var(--fill-0, black)" fillOpacity="0.25" id="Union" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function VerticalFormItemInput2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[4]" data-name="Vertical-Form-Item/Input">
      <Label2 />
      <Field2 />
    </div>
  );
}

function FieldType() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] isolate items-start relative shrink-0 w-[456px]" data-name="Field Type">
      <div className="absolute left-[430px] overflow-clip size-[14px] top-[261px] z-[9]" data-name="input-suffix">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.25">
            <path d={svgPaths.p28fa7880} fill="var(--fill-0, black)" fillOpacity="0.25" id="Union" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[431px] overflow-clip size-[14px] top-[187px] z-[8]" data-name="input-suffix">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.25">
            <path d={svgPaths.p28fa7880} fill="var(--fill-0, black)" fillOpacity="0.25" id="Union" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[430px] overflow-clip size-[14px] top-[113px] z-[7]" data-name="input-suffix">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.25">
            <path d={svgPaths.p28fa7880} fill="var(--fill-0, black)" fillOpacity="0.25" id="Union" />
          </svg>
        </div>
      </div>
      <VerticalFormItemInput />
      <VerticalFormItemInput1 />
      <VerticalFormItemInput2 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]" data-name="Vertical-Form-Item/Input">
        <div className="content-stretch flex items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-name="label">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Цвет
          </p>
        </div>
        <button className="bg-white cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="Field">
          <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="input">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[5px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="placeholder">
                    <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[22px]">example</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Vertical-Form-Item/Input">
        <div className="content-stretch flex items-center overflow-clip pb-[8px] relative shrink-0 w-full" data-name="label">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Состояние
          </p>
        </div>
        <button className="bg-white cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="Field">
          <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="input">
              <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[5px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="placeholder">
                    <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[22px]">example</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </button>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Форма">
      <FieldType />
      <div className="-translate-y-1/2 absolute right-[498.91px] size-[12px] top-[calc(50%-132.57px)]" data-name="icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1784 6.85739">
          <path d={svgPaths.p10743000} fill="var(--fill-0, black)" fillOpacity="0.25" id="icon" />
        </svg>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Характеристики">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] w-[942px]">Характеристики</p>
      <Component8 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="wrapper">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] overflow-clip size-[12px] top-1/2" data-name="Bulb">
        <div className="absolute inset-[0_13.39%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78571 12">
            <path d={svgPaths.p25544100} fill="var(--fill-0, #FFA940)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0" data-name="Icon-Wrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <Wrapper />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f9f1e6] content-stretch flex gap-[10px] h-[32px] items-center justify-center overflow-clip px-[7px] relative rounded-[8px] shrink-0 w-[187px]" data-name="Button">
      <IconWrapper1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#ffa940] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Придумать описание
      </p>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[942px]" data-name="Описание">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] w-[942px]">Описание</p>
      <button className="bg-white cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.85)] text-left w-full">
            <p className="mb-0">&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <div className="h-[0.001px] relative shrink-0 w-full" data-name="bottom">
            <p className="absolute bottom-[-8px] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] right-[-14px] text-[14px] text-[rgba(0,0,0,0.25)] text-right translate-y-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              0 / 1000
            </p>
            <div className="absolute bottom-[-6px] right-[-14px] size-[8.354px]" data-name="Resizer">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.35352 8.35352">
                <path d={svgPaths.p1832ca00} fill="var(--fill-0, #262626)" id="Resizer" />
              </svg>
            </div>
          </div>
        </div>
      </button>
      <Button1 />
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-[#1890ff] content-stretch flex items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Сохранить">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Text/Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#f3f3f3] text-[16px] whitespace-nowrap">Сохранить</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Отменить">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Text/Text">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#5a5a5a] text-[16px] whitespace-nowrap">Отменить</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex gap-[10px] items-start pt-[16px] relative shrink-0" data-name="Кнопки">
      <Component11 />
      <Component12 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[18px] items-start left-0 pb-[48px] pt-[32px] px-[32px] rounded-[16px] top-0 w-[1103px]" data-name="Объявление (контейнер)">
      <p className="font-['Roboto:Medium',sans-serif] font-medium h-[40px] leading-[40px] relative shrink-0 text-[30px] text-[rgba(0,0,0,0.85)] w-[942px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Редактирование объявления
      </p>
      <Component1 />
      <div className="bg-[#f0f0f0] h-px shrink-0 w-full" data-name="Rectangle" />
      <Component2 />
      <div className="bg-[#f0f0f0] h-px shrink-0 w-full" data-name="Rectangle" />
      <Component4 />
      <div className="bg-[#f0f0f0] h-px shrink-0 w-full" data-name="Rectangle" />
      <Component7 />
      <div className="bg-[#f0f0f0] h-px shrink-0 w-full" data-name="Rectangle" />
      <Component9 />
      <Component10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <div className="bg-[#1890ff] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] relative rounded-[4px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Применить">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Применить
        </p>
      </div>
      <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[8px] py-px relative rounded-[4px] shrink-0" data-name="Закрыть">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)]" />
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Закрыть
        </p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[2px] shrink-0 w-[332px]" data-name="body">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#1e1e1e] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ответ AI:
      </p>
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[12px] tracking-[0.4px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] mb-0">{`Средняя цена на MacBook Pro 16" M1 Pro (16/512GB):`}</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[18px]">
            <span className="leading-[16px]">115 000 – 135 000 ₽ — отличное состояние.</span>
          </li>
          <li className="mb-0 ms-[18px]">
            <span className="leading-[16px]">От 140 000 ₽ — идеал, малый износ АКБ.</span>
          </li>
          <li className="ms-[18px]">
            <span className="leading-[16px]">90 000 – 110 000 ₽ — срочно или с дефектами.</span>
          </li>
        </ul>
      </div>
      <Frame />
    </div>
  );
}

function TooltipArrow() {
  return (
    <div className="absolute bottom-[8.66px] content-stretch flex h-[5.655px] items-end justify-center left-[16px] overflow-clip" data-name="tooltip-arrow">
      <div className="flex items-center justify-center relative shrink-0 size-[11.314px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-white rounded-br-[2px] size-[8px]" data-name="beak" />
        </div>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[511px] pb-[14.314px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] top-[159px]" data-name="Tooltip">
      <Body />
      <TooltipArrow />
    </div>
  );
}

export default function CardIdEditWithTooltip() {
  return (
    <div className="bg-[#f1f1f1] relative size-full" data-name="/card/[id]/edit with tooltip">
      <Component />
      <Tooltip />
      <div className="-translate-y-1/2 absolute right-[1540.91px] size-[12px] top-[calc(50%+179.43px)]" data-name="icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1778 6.85738">
          <path d={svgPaths.p1fbfc580} fill="var(--fill-0, black)" fillOpacity="0.25" id="icon" />
        </svg>
      </div>
    </div>
  );
}