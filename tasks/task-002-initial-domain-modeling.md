# Task 002 - Initial Domain Modeling

## Status

`todo`

## Branch sugerida

`feat/initial-domain-modeling`

## Objetivo

Definir a modelagem inicial do domínio do LifeSync no back-end e criar a primeira migration real do projeto.

## Escopo

- Criar as entidades base do domínio.
- Definir relacionamentos, chaves primárias, colunas obrigatórias e convenções de timestamp.
- Modelar as tabelas iniciais para suportar evolução do produto.
- Criar a primeira migration real com o schema inicial.
- Garantir que a modelagem fique compatível com a futura autenticação e os módulos de saúde.

## Entidades esperadas

- `users`
- `user_profiles`
- `nutrition_goals`
- `weight_logs`
- `water_logs`
- `meals`
- `meal_entries` ou estrutura equivalente para itens de refeição

## Fora de escopo

- Não implementar regras de negócio ainda.
- Não criar endpoints REST completos.
- Não implementar autenticação real ainda.
- Não alterar o front-end.
- Não criar seed complexo.

## Critérios de aceite

- As entidades iniciais do domínio existem no back-end.
- Os relacionamentos estão claros e coerentes com o produto.
- Existe uma migration inicial versionada.
- O schema inicial suporta autenticação, perfil, refeições, hidratação e peso.
- O back-end compila sem erro.

## Dependências

- Depende da conclusão da Task 001.

## Observações para o agente executor

- Ao concluir a task, atualizar o campo `Status` neste arquivo.
- Priorizar clareza e evolução do domínio, evitando modelagem excessivamente genérica.
- Nomear tabelas e colunas de forma estável e previsível.
- Entregar resumo final com entidades criadas, decisões de modelagem e nome da migration.
