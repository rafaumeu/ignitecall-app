# Política de Segurança

## Versões Suportadas

| Versão | Suportada          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reportando Vulnerabilidades

1. **Não crie uma Issue pública**
2. Envie um email para <security@rafaumeu.dev>
3. Inclua detalhes como:
   - Descrição da vulnerabilidade
   - Passos para reproduzir
   - Possível impacto
   - Sugestões de mitigação

## Processo de Resposta

1. Confirmação em 24h
2. Avaliação em 72h
3. Correção e release em até 7 dias
4. Divulgação pública após patch

## Escopo

- Aplicação Next.js
- APIs do Google Calendar/Meet
- Autenticação OAuth
- Banco de dados PostgreSQL

## Práticas de Segurança

- Todas as dependências são verificadas pelo Dependabot
- Análise de código automática via CodeQL
- Verificação de secrets via secret scanning
- Review de dependências em PRs
