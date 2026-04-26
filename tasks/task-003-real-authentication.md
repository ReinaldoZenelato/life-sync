# Task 003 - Real Authentication

## Status

`todo`

## Branch sugerida

`task-003`

## Objetivo

Implementar autenticação real no back-end do LifeSync com persistência em banco, hash de senha e emissão de JWT.

## Escopo

- Implementar persistência real de usuários.
- Integrar o módulo de autenticação às entidades do domínio.
- Usar `bcrypt` para hash e comparação de senha.
- Usar `@nestjs/jwt` para emissão do token.
- Ajustar DTOs, service e controller de autenticação para fluxo real.
- Garantir validações adequadas no cadastro e login.
- Padronizar respostas e erros dentro do formato já usado no projeto.
- Adicionar testes unitários da service de autenticação.

## Fora de escopo

- Não implementar refresh token nesta task.
- Não criar recuperação de senha.
- Não alterar telas além do necessário para compatibilidade contratual.
- Não implementar autorização por papéis/permissões.

## Critérios de aceite

- Usuário consegue se cadastrar com persistência real.
- Senha é armazenada com hash.
- Usuário consegue fazer login com validação real.
- JWT é emitido com sucesso.
- Casos inválidos retornam erro padronizado.
- Testes unitários da service de autenticação estão presentes.

## Dependências

- Depende da conclusão da Task 002.

## Observações para o agente executor

- Ao concluir a task, atualizar o campo `Status` neste arquivo.
- Executar esta task na branch `task-003`; se ela já existir, fazer checkout nela, e se não existir, criá-la antes de começar.
- Reutilizar a arquitetura atual do módulo de auth, sem inflar o escopo.
- Garantir que o fluxo continue alinhado com Swagger limpo e SRP.
- Respeitar a estratégia de exclusão lógica definida na modelagem de dados.
- Entregar resumo final com contratos alterados, regras implementadas e testes adicionados.
