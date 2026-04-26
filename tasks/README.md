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

## Fluxo sugerido

1. Criar a task nesta pasta.
2. Delegar a execução para outra branch.
3. Ao concluir a execução, atualizar o status no próprio arquivo da task.
4. Validar a entrega.
5. Atualizar o status final da task, se necessário.
