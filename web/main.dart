import 'package:web/web.dart' as web;
import 'dart:js_interop';

void main() {
  final app = web.document.querySelector('#app') as web.HTMLDivElement?;
  
  if (app != null) {
    app.innerHTML = _getPortfolioHTML().toJS;
  }
}

String _getPortfolioHTML() {
  return '''
<!-- Top Navigation Bar -->
<nav class="navbar" id="mainNavbar">
  <div class="nav-container">
    <a href="#" class="brand-logo">
      <span class="brand-bracket">&lt;</span>RH<span class="brand-dot">.</span><span class="brand-accent">data</span><span class="brand-bracket">/&gt;</span>
    </a>

    <div class="nav-links" id="navLinks">
      <a href="#sobre" class="nav-item">Sobre</a>
      <a href="#experiencia" class="nav-item">Experiência</a>
      <a href="#projetos" class="nav-item">Projetos</a>
      <a href="#formacao" class="nav-item">Formação</a>
      <a href="#competencias" class="nav-item">Competências</a>
      <a href="#contato" class="nav-item">Contato</a>
    </div>

    <div class="nav-actions">
      <button id="toggleMatrixBtn" class="nav-control-btn" type="button" title="Alternar intensidade do efeito Matrix">
        <i class="fas fa-terminal"></i>
        <span id="matrixStatusText">Matrix: OFF</span>
      </button>

      <a href="https://wa.me/5511999224443?text=Ol%C3%A1%20Rodrigo,%20vi%20seu%20portf%C3%B3lio!" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary nav-cta">
        <i class="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>

      <button id="mobileMenuBtn" class="mobile-toggle-btn" type="button" aria-label="Abrir menu de navegação">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
</nav>

<main class="main-wrapper">
  <!-- Hero Section -->
  <header class="hero-section" id="hero">
    <div class="container">
      <div class="hero-badge">
        <span class="pulse-indicator"></span>
        <span>Disponível para novos desafios • Engenharia & Ciência de Dados</span>
      </div>

      <h1 class="hero-title" id="easterEggName" title="Clique para interagir!">
        Rodrigo Heloani <span class="text-gradient">de Brito</span>
      </h1>

      <div class="hero-terminal-pill">
        <span class="terminal-symbol">&gt;</span>
        <span class="terminal-text">Engenheiro de Dados Sênior | Analista MIS | Especialista em IA</span>
      </div>

      <p class="hero-summary">
        Mais de <strong>7 anos de experiência</strong> projetando arquiteturas de dados resilientes, pipelines de larga escala em <strong>Databricks</strong> e <strong>Azure Cloud</strong>, modelagem financeira/MIS focada em <strong>alavancagem de EBITDA</strong> e implementação prática de <strong>IA Generativa</strong>.
      </p>

      <div class="hero-cta-group">
        <a href="https://wa.me/5511999224443?text=Ol%C3%A1%20Rodrigo,%20vi%20seu%20portf%C3%B3lio!" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fab fa-whatsapp"></i>
          <span>Fale Comigo</span>
        </a>

        <button type="button" class="btn btn-secondary copy-btn" data-copy="rodrigohbx@gmail.com">
          <i class="fas fa-copy"></i>
          <span>Copiar E-mail</span>
        </button>

        <a href="https://www.linkedin.com/in/rodrigoheloani/" target="_blank" rel="noopener noreferrer" class="btn btn-icon" title="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>

        <a href="https://github.com/Rox87" target="_blank" rel="noopener noreferrer" class="btn btn-icon" title="GitHub">
          <i class="fab fa-github"></i>
        </a>
      </div>

      <!-- Quick Metrics Counter Strip -->
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-value">7+</div>
          <div class="metric-label">Anos de Experiência em Dados</div>
          <div class="metric-sub">Databricks, Azure & Big Data</div>
        </div>

        <div class="metric-card">
          <div class="metric-value">Santander & Atento</div>
          <div class="metric-label">Grandes Corporações</div>
          <div class="metric-sub">Setor Financeiro & Telecom</div>
        </div>

        <div class="metric-card">
          <div class="metric-value">Petabytes</div>
          <div class="metric-label">Volume Processado</div>
          <div class="metric-sub">Pipelines Distribuídos & PySpark</div>
        </div>

        <div class="metric-card">
          <div class="metric-value">GenAI & Cloud</div>
          <div class="metric-label">Inovação Aplicada</div>
          <div class="metric-sub">LLMs, AKS & Kubernetes</div>
        </div>
      </div>
    </div>
  </header>

  <!-- Section: Sobre / Visão Executiva -->
  <section class="section" id="sobre">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">Perfil Profissional</span>
        <h2 class="section-title">Engenharia de Dados com Foco em Negócio</h2>
      </div>

      <div class="pillars-grid">
        <div class="glass-card pillar-card">
          <div class="pillar-icon">
            <i class="fas fa-database"></i>
          </div>
          <h3 class="pillar-title">Big Data & Lakehouse</h3>
          <p class="pillar-desc">
            Arquitetura de dados robusta utilizando <strong>Databricks</strong>, <strong>PySpark</strong> e <strong>Delta Lake</strong> (Medallion Architecture). Desenvolvimento de bibliotecas modulares e pipelines ETL/ELT otimizados para milhões de registros.
          </p>
        </div>

        <div class="glass-card pillar-card">
          <div class="pillar-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3 class="pillar-title">FinOps & Mitigação de Perdas</h3>
          <p class="pillar-desc">
            Atuação orientada a resultados financeiros, mitigando perdas operacionais e elevando o <strong>EBITDA</strong>. Experiência na gestão de indicadores MIS bancários, conciliação e criação de dashboards executivos em <strong>Power BI</strong>.
          </p>
        </div>

        <div class="glass-card pillar-card">
          <div class="pillar-icon">
            <i class="fas fa-robot"></i>
          </div>
          <h3 class="pillar-title">Cloud & IA Generativa</h3>
          <p class="pillar-desc">
            Especialização em ecossistema <strong>Microsoft Azure</strong> (AKS, Kubernetes, Docker, Serverless). Aplicação prática de <strong>IA Generativa</strong>, LLMs, engenharia de prompt e busca semântica para automação inteligente de processos.
          </p>
        </div>
      </div>

      <!-- Quick Info Bar -->
      <div class="info-bar-card glass-card">
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <span class="info-title">Localização</span>
            <span class="info-value">Santo André / SP, Brasil</span>
          </div>
        </div>

        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <div>
            <span class="info-title">E-mail</span>
            <span class="info-value">rodrigohbx@gmail.com</span>
          </div>
        </div>

        <div class="info-item">
          <i class="fas fa-phone-alt"></i>
          <div>
            <span class="info-title">Telefone / WhatsApp</span>
            <span class="info-value">+55 11 999224-4443</span>
          </div>
        </div>

        <div class="info-item">
          <i class="fas fa-certificate"></i>
          <div>
            <span class="info-title">Certificação</span>
            <span class="info-value">Azure Data Science (DP-100)</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Experiência Profissional -->
  <section class="section" id="experiencia">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">Histórico de Carreira</span>
        <h2 class="section-title">Experiência Profissional</h2>
      </div>

      <div class="timeline">
        <!-- Target / Santander -->
        <div class="glass-card timeline-card">
          <div class="job-header">
            <div class="job-meta">
              <span class="company-badge"><i class="fas fa-landmark"></i> Setor Financeiro / Bancário</span>
              <h3 class="job-title">Analista de Dados MIS</h3>
              <div class="job-company">Target (Santander) • São Paulo, SP</div>
            </div>
            <div class="job-date-pill">05/2025 - Atual • Presente</div>
          </div>

          <p class="job-summary">
            Atuação estratégica na geração de estudos analíticos, engenharia de dados em Databricks e desenvolvimento de sistemas de inteligência para o banco.
          </p>

          <ul class="job-bullets">
            <li>Geração de estudos analíticos e obtenção de insights para identificação e predição do perfil do público reclamante do banco.</li>
            <li>Especialização e arquitetura na plataforma <strong>Databricks</strong> para processamento distribuído de altíssimo volume.</li>
            <li>Criação de bibliotecas internas em <strong>Python</strong> para automação de processos analíticos complexos.</li>
            <li>Implementação pioneira de sistemas integrando modelos de <strong>IA Generativa</strong> de ponta aos fluxos operacionais.</li>
            <li>Desenvolvimento e sustentação de relatórios gerenciais e dashboards executivos dinâmicos em <strong>Power BI</strong>.</li>
          </ul>

          <div class="tech-tags-list">
            <span class="tech-tag"><i class="fas fa-fire"></i> Databricks</span>
            <span class="tech-tag"><i class="fab fa-python"></i> Python / PySpark</span>
            <span class="tech-tag"><i class="fas fa-layer-group"></i> Delta Lake</span>
            <span class="tech-tag"><i class="fas fa-brain"></i> IA Generativa</span>
            <span class="tech-tag"><i class="fas fa-chart-pie"></i> Power BI</span>
            <span class="tech-tag"><i class="fas fa-database"></i> SQL Avançado</span>
            <span class="tech-tag"><i class="fas fa-shield-alt"></i> Governança Bancária</span>
          </div>
        </div>

        <!-- Atento -->
        <div class="glass-card timeline-card">
          <div class="job-header">
            <div class="job-meta">
              <span class="company-badge"><i class="fas fa-building"></i> Telecomunicações & Serviços</span>
              <h3 class="job-title">Engenheiro de Dados</h3>
              <div class="job-company">Atento • São Paulo, SP</div>
            </div>
            <div class="job-date-pill">03/2018 - 02/2025 • 7 anos</div>
          </div>

          <p class="job-summary">
            Liderança e execução de projetos de engenharia de dados de ponta a ponta focados em alavancagem de EBITDA, mitigação de perdas e modernização cloud-native.
          </p>

          <ul class="job-bullets">
            <li>Engenharia de dados estratégica com foco direto em melhorar o <strong>EBITDA</strong> mitigando perdas financeiras e impulsionando receitas dos clientes.</li>
            <li>Especialização em <strong>Microsoft Azure</strong>, com arquitetura profunda em soluções <strong>Kubernetes (AKS)</strong> e microsserviços <strong>Serverless</strong>.</li>
            <li>Criação, esteiras CI/CD e orquestração de infraestrutura resiliente em nuvem com contêineres <strong>Docker</strong>.</li>
            <li>Desenvolvimento de pipelines, automações e serviços analíticos de alta performance em <strong>Python</strong> e <strong>C#</strong>.</li>
            <li>Implementação de soluções baseadas em inteligência artificial generativa para automação de triagens e sumarização.</li>
            <li>Desenvolvimento de painéis executivos de alto impacto em <strong>Power BI</strong> para tomadores de decisão corporativos.</li>
          </ul>

          <div class="tech-tags-list">
            <span class="tech-tag"><i class="fab fa-microsoft"></i> Microsoft Azure</span>
            <span class="tech-tag"><i class="fas fa-dharmachakra"></i> Kubernetes (AKS)</span>
            <span class="tech-tag"><i class="fab fa-docker"></i> Docker</span>
            <span class="tech-tag"><i class="fab fa-python"></i> Python</span>
            <span class="tech-tag"><i class="fas fa-code"></i> C# / .NET</span>
            <span class="tech-tag"><i class="fas fa-chart-line"></i> Otimização EBITDA</span>
            <span class="tech-tag"><i class="fas fa-cloud"></i> Serverless</span>
            <span class="tech-tag"><i class="fas fa-chart-pie"></i> Power BI</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Projetos & Arquiteturas Técnicas -->
  <section class="section" id="projetos">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">Engenharia Aplicada</span>
        <h2 class="section-title">Soluções & Arquiteturas em Destaque</h2>
      </div>

      <div class="projects-grid">
        <!-- Project 1 -->
        <div class="glass-card project-card">
          <div class="project-header">
            <div class="project-icon"><i class="fas fa-cubes"></i></div>
            <span class="project-category">Big Data & Lakehouse</span>
          </div>
          <h3 class="project-title">Modern Lakehouse & Analytics Bancário</h3>
          <p class="project-desc">
            Arquitetura Medallion (Bronze/Silver/Gold) sobre Databricks e Delta Lake para ingestão e enriquecimento de dados bancários de alto volume. Otimização de queries e bibliotecas customizadas em PySpark que reduziram o tempo de processamento analítico para minutos.
          </p>
          <div class="project-impact">
            <i class="fas fa-check-circle"></i>
            <span>Redução significativa no tempo de geração de estudos de público e perfilamento de reclamações.</span>
          </div>
          <div class="project-tags">
            <span>Databricks</span>
            <span>PySpark</span>
            <span>Delta Lake</span>
            <span>Python</span>
            <span>Power BI</span>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="glass-card project-card">
          <div class="project-header">
            <div class="project-icon"><i class="fas fa-brain"></i></div>
            <span class="project-category">IA Generativa & NLP</span>
          </div>
          <h3 class="project-title">GenAI Intelligence Engine & Sumarização</h3>
          <p class="project-desc">
            Implementação de sistema corporativo baseado em modelos LLM de última geração e busca contextual para análise semântica e sumarização inteligente de ocorrências, facilitando a tomada de decisão com extração automática de causa-raiz.
          </p>
          <div class="project-impact">
            <i class="fas fa-check-circle"></i>
            <span>Automação da triagem textual com alta acurácia e síntese executiva em linguagem natural.</span>
          </div>
          <div class="project-tags">
            <span>GenAI</span>
            <span>LLMs</span>
            <span>Embeddings</span>
            <span>Python</span>
            <span>Prompt Engineering</span>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="glass-card project-card">
          <div class="project-header">
            <div class="project-icon"><i class="fas fa-shield-alt"></i></div>
            <span class="project-category">Cloud FinOps & Microserviços</span>
          </div>
          <h3 class="project-title">Motor de Mitigação de Perdas & EBITDA</h3>
          <p class="project-desc">
            Ecossistema cloud-native na Azure combinando containers Docker orquestrados via Kubernetes (AKS) e microsserviços Serverless para identificação em tempo real de gargalos operacionais e discrepâncias de faturamento.
          </p>
          <div class="project-impact">
            <i class="fas fa-check-circle"></i>
            <span>Mitigação direta de perdas financeiras, gerando retorno comprovado sobre o EBITDA.</span>
          </div>
          <div class="project-tags">
            <span>Microsoft Azure</span>
            <span>Kubernetes AKS</span>
            <span>Docker</span>
            <span>C#</span>
            <span>FinOps</span>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="glass-card project-card">
          <div class="project-header">
            <div class="project-icon"><i class="fas fa-chart-pie"></i></div>
            <span class="project-category">MIS & Business Intelligence</span>
          </div>
          <h3 class="project-title">Executive MIS Suite & Modelagem Preditiva</h3>
          <p class="project-desc">
            Painéis executivos dinâmicos em Power BI desenhados para gerência e diretoria, com modelagem dimensional, DAX complexo e integração com rotinas estatísticas em Python para antecipação de tendências operacionais e volumetria.
          </p>
          <div class="project-impact">
            <i class="fas fa-check-circle"></i>
            <span>Visualização em tempo real de KPIs críticos para tomada de decisão em nível C-Level.</span>
          </div>
          <div class="project-tags">
            <span>Power BI</span>
            <span>DAX Avançado</span>
            <span>Python</span>
            <span>Gestão MIS</span>
            <span>Finanças</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Formação & Certificações -->
  <section class="section" id="formacao">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">Educação Contínua</span>
        <h2 class="section-title">Formação Acadêmica & Certificações</h2>
      </div>

      <!-- Featured Microsoft Certification Banner -->
      <div class="glass-card cert-featured-card">
        <div class="cert-badge-graphic">
          <i class="fab fa-microsoft"></i>
        </div>
        <div class="cert-info">
          <div class="cert-tag">Certificação Oficial Microsoft</div>
          <h3 class="cert-name">Microsoft Certified: Azure Data Science Associate (DP-100)</h3>
          <p class="cert-desc">
            Validação de expertise no planejamento e criação de ambientes de computação em nuvem na Azure, treinamento e validação de modelos de Machine Learning, pipelines de dados e implantação de modelos em produção.
          </p>
          <div class="cert-status">
            <i class="fas fa-check-circle"></i> Certificação Oficial • Expira em 31/05/2025
          </div>
        </div>
      </div>

      <div class="degrees-grid">
        <!-- MBA 1 -->
        <div class="glass-card degree-card">
          <div class="degree-icon"><i class="fas fa-graduation-cap"></i></div>
          <div class="degree-type">Pós-Graduação / MBA</div>
          <h3 class="degree-title">MBA em Tecnologia para Negócios: Data Science e BI</h3>
          <div class="degree-institution">Instituto Objetivo</div>
          <div class="degree-date">01/2023 - 04/2024 • Concluído</div>
          <p class="degree-desc">
            Foco em aplicação de algoritmos de machine learning, governança de dados corporativa, storytelling com dados e estratégias de inteligência de negócios.
          </p>
        </div>

        <!-- MBA 2 -->
        <div class="glass-card degree-card">
          <div class="degree-icon"><i class="fas fa-university"></i></div>
          <div class="degree-type">Pós-Graduação / MBA</div>
          <h3 class="degree-title">MBA em Gestão Bancária e Finanças Corporativas</h3>
          <div class="degree-institution">Instituto Objetivo</div>
          <div class="degree-date">12/2023 - 05/2024 • Concluído</div>
          <p class="degree-desc">
            Aprofundamento em finanças empresariais, análise de risco, regulação bancária, valuation e indicadores de performance econômica (EBITDA, ROI, ROE).
          </p>
        </div>

        <!-- Graduação -->
        <div class="glass-card degree-card">
          <div class="degree-icon"><i class="fas fa-laptop-code"></i></div>
          <div class="degree-type">Graduação / Bacharelado</div>
          <h3 class="degree-title">Sistemas de Informação</h3>
          <div class="degree-institution">Universidade Presbiteriana Mackenzie</div>
          <div class="degree-date">01/2009 - 01/2014 • Concluído</div>
          <p class="degree-desc">
            Sólida formação em arquitetura de computadores, estruturas de dados, algoritmos, modelagem de banco de dados relacional e engenharia de software.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Competências & Stack -->
  <section class="section" id="competencias">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">Arsenal Tecnológico</span>
        <h2 class="section-title">Competências Técnicas & Metodologias</h2>
      </div>

      <div class="skills-bento-grid">
        <!-- Card 1: Data Engineering -->
        <div class="glass-card skill-bento-card">
          <div class="skill-category-header">
            <i class="fas fa-database skill-cat-icon"></i>
            <div>
              <h3 class="skill-cat-title">Engenharia de Dados & Big Data</h3>
              <span class="skill-cat-sub">Pipelines escaláveis e arquitetura Lakehouse</span>
            </div>
          </div>
          <div class="skill-chips">
            <span class="skill-chip"><i class="fas fa-fire"></i> Databricks</span>
            <span class="skill-chip"><i class="fas fa-cubes"></i> Apache Spark / PySpark</span>
            <span class="skill-chip"><i class="fas fa-layer-group"></i> Delta Lake</span>
            <span class="skill-chip"><i class="fab fa-python"></i> Python Avançado</span>
            <span class="skill-chip"><i class="fas fa-database"></i> SQL / T-SQL</span>
            <span class="skill-chip"><i class="fas fa-project-diagram"></i> Arquitetura Medallion</span>
            <span class="skill-chip"><i class="fas fa-sync-alt"></i> Pipelines ETL / ELT</span>
            <span class="skill-chip"><i class="fas fa-table"></i> Modelagem Dimensional</span>
          </div>
        </div>

        <!-- Card 2: Cloud & DevOps -->
        <div class="glass-card skill-bento-card">
          <div class="skill-category-header">
            <i class="fas fa-cloud skill-cat-icon"></i>
            <div>
              <h3 class="skill-cat-title">Cloud, Infra & DevOps</h3>
              <span class="skill-cat-sub">Ambientes distribuídos e alta resiliência</span>
            </div>
          </div>
          <div class="skill-chips">
            <span class="skill-chip"><i class="fab fa-microsoft"></i> Microsoft Azure</span>
            <span class="skill-chip"><i class="fas fa-dharmachakra"></i> Kubernetes (AKS)</span>
            <span class="skill-chip"><i class="fab fa-docker"></i> Docker Containers</span>
            <span class="skill-chip"><i class="fas fa-bolt"></i> Serverless Functions</span>
            <span class="skill-chip"><i class="fab fa-github"></i> CI/CD & Actions</span>
            <span class="skill-chip"><i class="fab fa-linux"></i> Linux & Bash</span>
            <span class="skill-chip"><i class="fas fa-shield-virus"></i> Infraestrutura Resiliente</span>
          </div>
        </div>

        <!-- Card 3: AI & Data Science -->
        <div class="glass-card skill-bento-card">
          <div class="skill-category-header">
            <i class="fas fa-robot skill-cat-icon"></i>
            <div>
              <h3 class="skill-cat-title">IA Generativa & Ciência de Dados</h3>
              <span class="skill-cat-sub">Modelos inteligentes e análise preditiva</span>
            </div>
          </div>
          <div class="skill-chips">
            <span class="skill-chip"><i class="fas fa-brain"></i> IA Generativa</span>
            <span class="skill-chip"><i class="fas fa-comments"></i> Prompt Engineering</span>
            <span class="skill-chip"><i class="fas fa-search-plus"></i> Busca Vetorial & RAG</span>
            <span class="skill-chip"><i class="fas fa-microchip"></i> Machine Learning</span>
            <span class="skill-chip"><i class="fas fa-calculator"></i> Modelagem Estatística</span>
            <span class="skill-chip"><i class="fas fa-chart-line"></i> Análise Preditiva</span>
            <span class="skill-chip"><i class="fas fa-flask"></i> Validação de Modelos</span>
          </div>
        </div>

        <!-- Card 4: BI, MIS & Finanças -->
        <div class="glass-card skill-bento-card">
          <div class="skill-category-header">
            <i class="fas fa-chart-pie skill-cat-icon"></i>
            <div>
              <h3 class="skill-cat-title">MIS, BI & Finanças Corporativas</h3>
              <span class="skill-cat-sub">Decisões orientadas a dados e rentabilidade</span>
            </div>
          </div>
          <div class="skill-chips">
            <span class="skill-chip"><i class="fas fa-tachometer-alt"></i> Power BI & DAX</span>
            <span class="skill-chip"><i class="fas fa-landmark"></i> Gestão de MIS Bancário</span>
            <span class="skill-chip"><i class="fas fa-money-bill-wave"></i> Otimização de EBITDA</span>
            <span class="skill-chip"><i class="fas fa-user-shield"></i> Mitigação de Perdas</span>
            <span class="skill-chip"><i class="fas fa-balance-scale"></i> Finanças Corporativas</span>
            <span class="skill-chip"><i class="fas fa-desktop"></i> Dashboards C-Level</span>
          </div>
        </div>

        <!-- Card 5: Soft Skills & Idiomas -->
        <div class="glass-card skill-bento-card" style="grid-column: 1 / -1;">
          <div class="skill-category-header">
            <i class="fas fa-users-cog skill-cat-icon"></i>
            <div>
              <h3 class="skill-cat-title">Competências Profissionais & Idiomas</h3>
              <span class="skill-cat-sub">Ponte entre tecnologia complexa e negócios</span>
            </div>
          </div>
          <div class="skill-chips">
            <span class="skill-chip highlight"><i class="fas fa-bullhorn"></i> Comunicação Técnica Acessível</span>
            <span class="skill-chip highlight"><i class="fas fa-puzzle-piece"></i> Resolução de Problemas Críticos</span>
            <span class="skill-chip highlight"><i class="fas fa-book-open"></i> Aprendizado Contínuo</span>
            <span class="skill-chip highlight"><i class="fas fa-users"></i> Liderança e Motivação de Equipes</span>
            <span class="skill-chip highlight"><i class="fas fa-shield-alt"></i> Alta Resiliência sob Pressão</span>
            <span class="skill-chip highlight"><i class="fas fa-globe-americas"></i> Português (Nativo)</span>
            <span class="skill-chip highlight"><i class="fas fa-language"></i> Inglês (C1 - Avançado)</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Contato -->
  <section class="section" id="contato">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">Vamos Conversar?</span>
        <h2 class="section-title">Entre em Contato</h2>
      </div>

      <div class="contact-cards-grid">
        <!-- E-mail -->
        <div class="glass-card contact-box">
          <div class="contact-box-icon"><i class="fas fa-envelope"></i></div>
          <h3 class="contact-box-title">E-mail</h3>
          <p class="contact-box-detail">rodrigohbx@gmail.com</p>
          <div class="contact-box-actions">
            <a href="mailto:rodrigohbx@gmail.com" class="btn btn-sm btn-primary">
              <i class="fas fa-paper-plane"></i> Enviar Mensagem
            </a>
            <button type="button" class="btn btn-sm btn-secondary copy-btn" data-copy="rodrigohbx@gmail.com">
              <i class="fas fa-copy"></i> Copiar
            </button>
          </div>
        </div>

        <!-- WhatsApp -->
        <div class="glass-card contact-box">
          <div class="contact-box-icon whatsapp-icon"><i class="fab fa-whatsapp"></i></div>
          <h3 class="contact-box-title">WhatsApp</h3>
          <p class="contact-box-detail">+55 11 999224-4443</p>
          <div class="contact-box-actions">
            <a href="https://wa.me/5511999224443?text=Ol%C3%A1%20Rodrigo,%20vi%20seu%20portf%C3%B3lio!" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              <i class="fab fa-whatsapp"></i> Iniciar Conversa
            </a>
            <button type="button" class="btn btn-sm btn-secondary copy-btn" data-copy="+5511999224443">
              <i class="fas fa-copy"></i> Copiar
            </button>
          </div>
        </div>

        <!-- LinkedIn -->
        <div class="glass-card contact-box">
          <div class="contact-box-icon linkedin-icon"><i class="fab fa-linkedin-in"></i></div>
          <h3 class="contact-box-title">LinkedIn</h3>
          <p class="contact-box-detail">/in/rodrigoheloani</p>
          <div class="contact-box-actions">
            <a href="https://www.linkedin.com/in/rodrigoheloani/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              <i class="fas fa-external-link-alt"></i> Acessar Perfil
            </a>
          </div>
        </div>

        <!-- GitHub -->
        <div class="glass-card contact-box">
          <div class="contact-box-icon"><i class="fab fa-github"></i></div>
          <h3 class="contact-box-title">GitHub</h3>
          <p class="contact-box-detail">github.com/Rox87</p>
          <div class="contact-box-actions">
            <a href="https://github.com/Rox87" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              <i class="fas fa-code-branch"></i> Ver Repositórios
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<!-- Footer -->
<footer class="site-footer">
  <div class="container footer-content">
    <div class="footer-left">
      <div class="footer-logo">&lt;RH.data /&gt;</div>
      <p class="footer-desc">
        Desenvolvido com <strong>Dart (Web)</strong>, <strong>JavaScript Canvas</strong> e <strong>CSS3 Moderno</strong>.
      </p>
      <div class="easter-hint-pill">
        <i class="fas fa-terminal"></i> <span>Dica: Tente clicar 12 vezes no nome principal no topo da página...</span>
      </div>
    </div>

    <div class="footer-right">
      <div class="footer-social-links">
        <a href="https://www.linkedin.com/in/rodrigoheloani/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/Rox87" target="_blank" rel="noopener noreferrer" title="GitHub"><i class="fab fa-github"></i></a>
        <a href="mailto:rodrigohbx@gmail.com" title="E-mail"><i class="fas fa-envelope"></i></a>
        <a href="https://wa.me/5511999224443" target="_blank" rel="noopener noreferrer" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      </div>
      <p class="footer-copy">© 2026 Rodrigo Heloani de Brito. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>

<!-- Easter Egg Modal Popup -->
<div id="modalOverlay" class="modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="modal-content">
    <div class="modal-cyber-bar">
      <div class="modal-title-status">
        <span class="status-dot-blink"></span>
        <span>ACESSO PRIVILEGIADO // PROTOCOLO DAVID VS GOLIAS [DESCRIPTOGRAFADO]</span>
      </div>
      <button id="closeModal" class="close-btn" type="button" aria-label="Fechar modal">&times;</button>
    </div>
    <div class="image-container">
      <img id="portfolioImage" src="david_vencer_golias.png" alt="David vencendo Golias - A precisão técnica supera o gigante">
    </div>
    <div class="modal-footer-caption">
      <p><strong>"A estratégia, o preparo e a precisão técnica superam qualquer gigante."</strong></p>
      <span class="modal-shortcut-hint">Pressione ESC para fechar</span>
    </div>
  </div>
</div>

<!-- Toast Feedback Container -->
<div id="toastContainer" class="toast-container"></div>
  ''';
}
