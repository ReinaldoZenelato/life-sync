# Roadmap de Desenvolvimento - LifeSync

## Visão geral

Vamos construir o LifeSync em cinco entregas incrementais. Cada etapa fecha um bloco funcional completo, evitando acoplamento excessivo entre front e back e garantindo que o projeto continue apresentável durante toda a evolução.

## Estrutura-base proposta

- Monorepo simples com `apps/frontend` e `apps/backend`.
- Docker Compose na raiz para subir PostgreSQL e, depois, opcionalmente os apps.
- Padrões compartilhados em documentação para erros, autenticação, ambiente e convenções de API.

## Etapa 0 - Fundação do repositório

### Objetivo

Preparar o terreno para desenvolvimento rápido e consistente.

### Entregas

- Estrutura inicial do monorepo.
- README principal com visão do projeto.
- Convenção de branches, variáveis de ambiente e scripts.
- Definição do padrão visual inicial do front.

### Critérios de aceite

- Repositório organizado.
- Pastas de front e back isoladas.
- Documentação de setup definida.

## Etapa 1 - Fundação e Segurança

### Back-end

- Setup do NestJS.
- Docker Compose com PostgreSQL.
- Configuração do TypeORM.
- `GlobalExceptionFilter`.
- `ErrorResponseDto` e DTOs auxiliares.
- Módulo de autenticação com JWT e Bcrypt.
- Swagger limpo com arquivos dedicados de documentação.
- Testes unitários iniciais de autenticação e tratamento de erros.

### Front-end

- Setup do Angular 17+.
- Integração com Tailwind CSS.
- Estrutura base com SCSS por feature quando fizer sentido.
- `AuthService`, `AuthInterceptor` e guardas de rota.
- Telas de login e cadastro com formulários reativos e validações.
- Base visual da marca RZ.

### Critérios de aceite

- Usuário consegue se cadastrar e autenticar.
- Token JWT persiste com segurança no cliente.
- Erros da API retornam no formato padrão.
- Swagger acessível e organizado.

## Etapa 2 - Perfil e Inteligência de Saúde

### Back-end

- Módulo de usuário com peso, altura, idade, sexo e atividade.
- Service isolado para cálculo de TDEE.
- Atualização de metas automáticas derivadas do perfil.
- Testes unitários do cálculo energético.

### Front-end

- Tela de configurações de perfil.
- Dashboard inicial consumindo perfil e metas.
- Estados de carregamento, vazio e erro.

### Critérios de aceite

- Perfil salvo com validação.
- TDEE calculado corretamente.
- Dashboard já preparado para exibir evolução futura.

## Etapa 3 - Nutrição e Hidratação

### Back-end

- CRUD de refeições.
- Registro diário com alimento, horário, calorias e macros.
- Módulo de hidratação.
- Regras de cálculo para calorias restantes e progresso diário.
- Testes unitários das regras nutricionais.

### Front-end

- Transformar o app em PWA.
- Componente rápido de hidratação com incremento de 250ml.
- Lista de refeições do dia com destaque visual para macros.
- Indicadores de progresso diário.

### Critérios de aceite

- Usuário registra água e refeições no celular.
- Dados diários são refletidos no dashboard.
- App instalável como PWA.

## Etapa 4 - Evolução e Gráficos

### Back-end

- Endpoint de histórico semanal e mensal.
- Aggregations para peso, consumo calórico e adesão.

### Front-end

- Integração com biblioteca de gráficos.
- Visualização de curva de peso, ingestão e consistência.
- Dark mode persistido.

### Critérios de aceite

- Histórico legível e performático.
- Gráficos responsivos no desktop e mobile.
- Preferências visuais persistidas.

## Etapa 5 - Deploy e Portfólio

### Entregas

- README completo com instalação e arquitetura.
- `manifest.json` com identidade visual RZ.
- Prints e GIFs do sistema.
- Revisão final de responsividade, acessibilidade e DX.

### Critérios de aceite

- Projeto apresentável como peça central de portfólio.
- Setup reproduzível com poucos comandos.
- Narrativa técnica clara para recrutadores e clientes.

## Ordem prática de execução

1. Subir monorepo e infra local.
2. Implementar autenticação completa do back.
3. Implementar autenticação completa do front.
4. Fechar fluxo de login/cadastro ponta a ponta.
5. Evoluir para perfil e cálculo energético.
6. Entrar em refeições e hidratação.
7. Finalizar com analytics, PWA refinado e polish visual.

## Decisões técnicas propostas

- Organização por feature em front e back, evitando camadas genéricas demais.
- Tailwind para velocidade visual e consistência, com SCSS apenas onde composição local for melhor.
- Tokens de design em CSS variables para facilitar dark mode e branding RZ.
- DTOs e contracts explícitos para manter a integração previsível.
- Testes focados primeiro em services críticos: auth, TDEE e calorias restantes.

## Próximo passo recomendado

Começar pelo Passo 1 com geração do Angular e NestJS, Docker do PostgreSQL, autenticação e contrato global de erros.
