# LifeSync

Aplicativo PWA de acompanhamento nutricional e saúde, pensado como projeto de portfólio RZ.

## Estrutura

- `apps/frontend`: Angular 17+ com Tailwind CSS, PWA, autenticação JWT e interface de alta performance.
- `apps/backend`: NestJS com PostgreSQL, TypeORM, JWT, Swagger limpo e testes unitários.
- `docs/roadmap.md`: roadmap técnico por etapas, critérios de aceite e ordem de implementação.

## Diretrizes arquiteturais

- SRP em módulos, services, DTOs, guards e componentes.
- Swagger desacoplado da lógica por interfaces/classes de documentação dedicadas.
- Validação estrita com `class-validator`.
- Tratamento global de erros com formato padronizado.
- Testes unitários nas regras de negócio do back-end.

## Roadmap

O planejamento detalhado está em [docs/roadmap.md](/C:/Users/Reinaldo/Documents/New%20project/docs/roadmap.md).
