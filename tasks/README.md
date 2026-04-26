# Tasks

Esta pasta guarda as tasks oficiais do projeto LifeSync.

## Objetivo

- Versionar backlog e escopo junto com o código.
- Facilitar delegação para outros agentes em branches separadas.
- Registrar critérios de aceite, dependências e status.

## Convenção de nomes

- `task-001-nome-da-task.md`
- `task-002-nome-da-task.md`

## Status permitidos

- `todo`
- `in-progress`
- `done`
- `blocked`

## Estrutura padrão

Cada task deve conter:

- Título
- Status
- Branch sugerida
- Objetivo
- Escopo
- Fora de escopo
- Critérios de aceite
- Dependências
- Observações para o agente executor

## Convenções do projeto

- Nomes de tabelas devem ficar sempre no singular.
- Tabelas importantes devem prever exclusão lógica.
- Tabelas transitórias ou de baixo impacto podem usar exclusão física quando fizer mais sentido.
- Cada task deve ser executada na branch correspondente ao seu número, por exemplo `task-001`.
- Se a branch da task já existir, o executor deve fazer checkout nela.
- Se a branch da task não existir, o executor pode criá-la antes de iniciar.

## Fluxo sugerido

1. Criar a task nesta pasta.
2. Delegar a execução para a branch da própria task, como `task-001`, `task-002` e assim por diante.
3. Ao concluir a execução, atualizar o status no próprio arquivo da task.
4. Validar a entrega.
5. Atualizar o status final da task, se necessário.
