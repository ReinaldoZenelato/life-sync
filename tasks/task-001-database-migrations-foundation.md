# Task 001 - Database Migrations Foundation

## Status

`done`

## Branch sugerida

`feat/database-migrations-foundation`

## Objetivo

Preparar a fundação de banco de dados do back-end do LifeSync com PostgreSQL, TypeORM e migrations versionadas.

## Escopo

- Configurar `@nestjs/config` no back-end.
- Configurar `@nestjs/typeorm`.
- Criar estrutura organizada para database no back-end.
- Criar configuração centralizada de banco por variáveis de ambiente.
- Criar `DataSource` separado para CLI do TypeORM.
- Definir `synchronize: false`.
- Criar pasta oficial de migrations.
- Adicionar scripts de migrations no `package.json`.
- Atualizar `.env.example` com variáveis necessárias de banco.
- Documentar o padrão de migrations do projeto.

## Fora de escopo

- Não criar entidades de negócio ainda.
- Não criar migrations de tabelas de domínio ainda.
- Não implementar autenticação real.
- Não alterar o front-end.
- Não usar `synchronize: true`.

## Critérios de aceite

- O back-end compila sem erro.
- Existe configuração centralizada do TypeORM.
- Existe `DataSource` próprio para uso do CLI.
- Existe pasta oficial de migrations.
- Os scripts de migration estão disponíveis e documentados.
- `synchronize` está desativado.

## Dependências

- Nenhuma dependência funcional anterior.
- Esta task deve vir antes da modelagem das entidades do domínio.

## Observações para o agente executor

- Ao concluir a task, atualizar o campo `Status` neste arquivo.
- Assumir que qualquer tentativa anterior pode ser revertida e, portanto, a task deve ser implementada como fundação limpa.
- Manter o escopo estritamente técnico e estrutural.
- Entregar resumo final com arquivos alterados, scripts criados e instruções de uso.
