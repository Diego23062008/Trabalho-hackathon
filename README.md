# Trabalho-hackathon

EQUIPE: SeleNai
PROJETO: Cidade Segura

INTEGRANTES:

Diego

Elvis 

Kaloa 

Pedro Henrique 

Richard 

PROBLEMA E DESAFIO ABORDADO:
A falta de segurança em bairros e ruas é uma preocupação constante para os cidadãos. A escassez de informações centralizadas e em tempo real sobre incidentes locais dificulta a prevenção e a tomada de decisões rápidas pela comunidade. O Cidade Segura nasce para mitigar esse problema, conectando moradores e fornecendo ferramentas colaborativas para aumentar a vigilância comunitária e a segurança coletiva.

TECNOLOGIAS UTILIZADAS:

Frontend: HTML5, CSS3, JavaScript (ou React / Vue)

Backend: Node.js (Express) ou Python (Flask/Django)

Banco de Dados: PostgreSQL ou MongoDB

Mapas/APIs: Google Maps API ou Leaflet.js

FUNCIONALIDADES IMPLEMENTADAS:

Denúncias Anônimas: Envio de relatos sobre problemas ou ocorrências sem expor a identidade do usuário.

Mapa de Calor / Áreas de Risco: Visualização interativa e em tempo real de zonas perigosas baseada nas denúncias.

Alertas de Proximidade: Notificações em tempo real para moradores que estejam próximos a uma ocorrência recente.

Botão de Emergência Rápido: Atalho para discagem direta de serviços de emergência locais como o 190.

ESTRUTURA DO BANCO DE DADOS:
O sistema utiliza um banco de dados para gerenciar usuários, denúncias e localizações.

Tabela Usuarios: contendo ID, nome (opcional), email e senha criptografada.

Tabela Denuncias: contendo ID, tipo de incidente, descrição, latitude, longitude, data/hora e status.

Tabela Alertas: contendo ID, ID da denúncia, raio de alcance e data de envio.

MODELO DE MONETIZAÇÃO:
Como o projeto visa a segurança pública, o modelo de monetização sugerido é híbrido:

Modelo Freemium e Parcerias B2B: Versão gratuita para cidadãos e planos premium para empresas de segurança privada ou condomínios que queiram painéis analíticos mais profundos.

Parcerias Governamentais: Licenciamento da plataforma (SaaS) para prefeituras e órgãos de segurança pública utilizarem os dados analíticos de criminalidade para planejamento urbano.


import os

# Create the comprehensive README.md content tailored to the requirements sheet in the image
readme_content = """# 🛡️ Cidade Segura - Monitoramento Comunitário Inteligente

Uma plataforma moderna de segurança colaborativa e monitoramento comunitário desenvolvida para o Hackathon 2026. O sistema permite que cidadãos reportem ocorrências em tempo real, visualizem um mapa de calor de riscos locais e emitam alertas rápidos de emergência para a comunidade.

---

## 👥 Integrantes da Equipe
* **Richard Jaime** - Administrador de Banco de Dados (DBA) & Desenvolvedor Backend
* *(Demais integrantes da equipe podem ser adicionados aqui)*

---

## 🛑 Problema / Desafio Abordado
O crescimento da criminalidade urbana e a falta de canais rápidos, eficientes e anônimos para a comunicação de incidentes criam pontos cegos na segurança pública comunitária. Os métodos tradicionais são centralizados e lentos. 

**A Solução:** O **Cidade Segura** descentraliza e agiliza essa comunicação através de um mapeamento dinâmico em tempo real e de um botão de pânico comunitário, gerando dados cruciais para que moradores evitem zonas de perigo e tomem decisões preventivas.

---

## 🛠️ Tecnologias Utilizadas

### Front-end
* **HTML5 & CSS3:** Arquitetura estrutural e estilização customizada moderna (Tema Dark de monitoramento).
* **JavaScript (Vanilla ES6):** Manipulação de estado, eventos dos formulários e interatividade.
* **Leaflet.js & Mapas CARTO:** Biblioteca open-source para renderização de mapas dinâmicos e plotagem de geolocalização sem custos de API.
* **Google Material Symbols:** Biblioteca de vetores para ícones de alta fidelidade e interface limpa.

### Back-end
* **Node.js:** Ambiente de execução assíncrono para o servidor.
* **Express.js:** Framework minimalista e rápido para gerenciamento de rotas e APIs RESTful.
* **CORS:** Mecanismo de segurança para liberação e controle de requisições entre domínios.

---

## 🚀 Funcionalidades Implementadas

1. **Tela de Cadastro Seguro:** Criação de novas contas com criptografia visual integrada.
2. **Autenticação Autônoma (Login):** Validação de credenciais e geração de tokens de sessão.
3. **Dashboard de Monitoramento (Mapa Interativo):** Visualização geográfica de pontos críticos em tempo real utilizando mapas estilizados em modo escuro.
4. **Feed Lateral de Alertas Rápidos:** Listagem em ordem cronológica de incidentes próximos divididos por níveis de criticidade (Crítico / Aviso).
5. **Botão de Pânico / Emergência:** Acionamento de alerta instantâneo com um único clique para aviso imediato.

---

## 🗄️ Estrutura do Banco de Dados

O projeto utiliza um modelo relacional/documental estruturado para garantir a integridade dos dados e o anonimato das denúncias quando solicitado.

### Entidade: `usuarios` (Usuários do Sistema)