# Task 004 - User Profile And Health Goals

## Status

`todo`

## Branch sugerida

`task-004`

## Objetivo

Implementar a base funcional de perfil de saúde do usuário e cálculo automático de metas energéticas.

## Escopo

- Criar módulo de perfil de usuário.
- Permitir salvar peso, altura, idade, sexo e nível de atividade.
- Implementar service isolada para cálculo de TDEE.
- Persistir metas nutricionais derivadas do perfil.
- Criar endpoints necessários para leitura e atualização do perfil.
- Adicionar testes unitários para a lógica de cálculo energético.

## Fora de escopo

- Não implementar ainda gráficos.
- Não implementar refeições e hidratação nesta task.
- Não alterar o dashboard além do necessário para consumo futuro.
- Não incluir IA, recomendações avançadas ou metas altamente customizadas.

## Critérios de aceite

- Usuário autenticado consegue salvar e atualizar o perfil.
- O cálculo de TDEE fica isolado em service própria.
- As metas automáticas são persistidas corretamente.
- Existem testes cobrindo a regra de cálculo.
- O back-end compila sem erro e a API fica pronta para consumo do front.

## Dependências

- Depende da conclusão da Task 003.

## Observações para o agente executor

- Ao concluir a task, atualizar o campo `Status` neste arquivo.
- Executar esta task na branch `task-004`; se ela já existir, fazer checkout nela, e se não existir, criá-la antes de começar.
- Manter a regra de cálculo desacoplada da persistência.
- Evitar misturar lógica de perfil com futura lógica de refeições.
- Respeitar a estratégia de exclusão lógica definida para tabelas importantes do domínio.
- Entregar resumo final com endpoints criados, estrutura persistida e regras validadas.
