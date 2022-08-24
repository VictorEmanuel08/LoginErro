export function MessageChat() {
    return (
        <div className="shadow-md rounded-md bg-dark-purple w-[500px] py-2 pt-2">
        <h2 className="text-center text-[16px] font-semibold text-[#FFF]">
          Mensagens
        </h2>

        <div className="bg-white h-full w-full">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 ">
            <div className="flex flex-row items-center">
              <strong className="text-[16px] font-semibold text-[#707070] px-4">
                Matrícula:
              </strong>
              <p className="text-sm text-[#707070]">2022002878</p>
            </div>
            <div className="flex flex-row items-center">
              <strong className="text-[16px] font-semibold text-[#707070] px-4">
                E-mail:
              </strong>
              <p className="text-sm text-[#707070]">joao@escola.com.br</p>
            </div>
            <div className="flex flex-row items-center">
              <strong className="text-[16px] font-semibold text-[#707070] px-4">
                Série:
              </strong>
              <p className="text-sm text-[#707070]">2</p>
            </div>
            <div className="flex flex-row items-center">
              <strong className="text-[16px] font-semibold text-[#707070] px-4">
                Turmas:
              </strong>
              <p className="text-sm text-[#707070]">6</p>
            </div>
            <div className="flex flex-row items-center">
              <strong className="text-[16px] font-semibold text-[#707070] px-4">
                CPF:
              </strong>
              <p className="text-sm text-[#707070]">000.000.000-00</p>
            </div>
            <div className="flex flex-row items-center">
              <strong className="text-[16px] font-semibold text-[#707070] px-4">
                Disciplinas:
              </strong>
              <p className="text-sm text-[#707070]">3</p>
            </div>
          </div>
        </div>
      </div>
    );
}