# Backend LifeSync

## Banco de dados

O back-end usa PostgreSQL com TypeORM e migrations versionadas.

### Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste os valores necessários por ambiente.

### Estrutura oficial

- `src/database/config/database.config.ts`: leitura centralizada das variáveis de ambiente.
- `src/database/config/typeorm.config.ts`: opções compartilhadas entre Nest e CLI.
- `src/database/typeorm-cli.config.ts`: `DataSource` usado pelos comandos de migration.
- `src/database/migrations`: pasta oficial para migrations versionadas.

### Comandos de migration

Execute a partir da raiz do monorepo:

```bash
npm run migration:create --name=CreateUsersTable
npm run migration:generate --name=AddProfileFields
npm run migration:run
npm run migration:revert
npm run migration:show
```

Se preferir rodar direto no workspace do back-end:

```bash
npm run migration:create --name=CreateUsersTable --workspace backend
npm run migration:generate --name=AddProfileFields --workspace backend
```

### Padrão do projeto

- Toda mudança de schema deve entrar por migration.
- `synchronize` permanece desativado em todos os ambientes.
- A CLI do TypeORM usa `src/database/typeorm-cli.config.ts` como fonte única do `DataSource`.
