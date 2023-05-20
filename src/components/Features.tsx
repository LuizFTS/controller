
export function Features(){
  return (
    <section id="features">
    {/* Flex container */}
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
      {/* What's Different */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          O que há de diferente no Controller?
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Controller oferece uma abordagem única para gerenciamento de projetos, combinando recursos avançados de planejamento, rastreamento e colaboração em uma única plataforma. Com o Controller, você pode acompanhar o progresso do projeto em tempo real, atribuir tarefas aos membros da equipe, monitorar prazos e garantir que todos estejam alinhados com os objetivos do projeto. Além disso, o Controller oferece recursos de geração de relatórios e análise de dados para ajudar a tomar decisões informadas e otimizar a eficiência do projeto.
        </p>
      </div>
      {/* Numbered List */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* List Item 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-mediumBlueSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-mediumBlue">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">Planejamento Avançado
                  
                </h3>
              </div>
            </div>
            <div>

              <h3 className="hidden mb-4 texl-lg font-bold md:block">Planejamento Avançado</h3>
              <p className="text-darkGrayishBlue">
                Otimize a alocação de recursos e defina metas claras com o poderoso recurso de planejamento do Controller. Visualize o cronograma do projeto, defina marcos importantes e atribua tarefas de forma eficiente, garantindo que todos os membros da equipe estejam alinhados e focados em alcançar os objetivos.
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-mediumBlueSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-mediumBlue">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">Rastreamento em Tempo Real
                  
                </h3>
              </div>
            </div>
            <div>

              <h3 className="hidden mb-4 texl-lg font-bold md:block">Rastreamento em Tempo Real</h3>
              <p className="text-darkGrayishBlue">
                Mantenha-se informado sobre o progresso do projeto em tempo real com o recurso de rastreamento do Controller. Acompanhe o status das tarefas, identifique possíveis atrasos e faça ajustes rapidamente para garantir que o projeto esteja no caminho certo. Com atualizações em tempo real, você pode tomar decisões informadas e evitar surpresas desagradáveis.
              </p>
            </div>
          </div>
        

        {/* List Item 3 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
          <div className="rounded-l-full bg-mediumBlueSupLight md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-mediumBlue">
                03
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">Colaboração Eficiente
                
              </h3>
            </div>
          </div>
          <div>

            <h3 className="hidden mb-4 texl-lg font-bold md:block">Colaboração Eficiente</h3>
            <p className="text-darkGrayishBlue">
              Melhore a colaboração e a comunicação da equipe com as ferramentas de colaboração do Controller. Compartilhe arquivos, comente tarefas e envolva todos os membros da equipe em discussões relevantes. A colaboração eficiente promove um ambiente de trabalho produtivo, onde ideias podem ser compartilhadas e implementadas de forma colaborativa para alcançar os melhores resultados.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}