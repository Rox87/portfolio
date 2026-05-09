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
<div class="container">
  <header>
    <h1 class="hero-title">Rodrigo Heloani de Brito</h1>
    <h2 class="hero-subtitle">Engenheiro de Dados | Analista de Dados MIS | Cientista de Dados</h2>
    
    <div class="contact-info">
      <div><i class="fas fa-envelope"></i> heloani.rodrigo@gmail.com</div>
      <div><i class="fas fa-phone"></i> +55 11 999224-4443</div>
      <div><i class="fas fa-map-marker-alt"></i> Santo André, SP</div>
      <div><i class="fas fa-calendar-alt"></i> 30/04/1987</div>
    </div>
    
    <div class="glass-card">
      <p style="font-size: 1.15rem; color: var(--text-secondary); text-align: left; line-height: 1.8;">
        Profissional com sólida experiência em programação, matemática, finanças, engenharia de dados e ciência de dados e IA. 
        Destaca-se pela comunicação acessível sobre assuntos técnicos e pelo compromisso com o aprendizado contínuo. 
        Possui forte capacidade analítica para avaliação de dados, contribuindo para a gestão eficiente de projetos e motivação de equipes.
      </p>
    </div>
  </header>

  <section class="section">
    <h2 class="section-title">Experiência Profissional</h2>
    
    <div class="glass-card">
      <div class="job-header">
        <div>
          <div class="job-title">Analista de Dados MIS</div>
          <div class="job-company">Target (Santander) - São Paulo, SP</div>
        </div>
        <div class="job-date">05/2025 - Atual</div>
      </div>
      <ul class="job-list">
        <li>Geração de estudos e obtenção de insights para identificar o perfil do público reclamante do banco.</li>
        <li>Especialização na plataforma Databricks para processamento de alto volume.</li>
        <li>Criação de bibliotecas envolvendo processos de dados complexos.</li>
        <li>Forte expertise e desenvolvimento em linguagem Python.</li>
        <li>Implementação de sistemas baseados em IA generativa de ponta.</li>
        <li>Desenvolvimento de relatórios gerenciais e dashboards dinâmicos em Power BI.</li>
      </ul>
    </div>

    <div class="glass-card">
      <div class="job-header">
        <div>
          <div class="job-title">Engenheiro de Dados</div>
          <div class="job-company">Atento - São Paulo, SP</div>
        </div>
        <div class="job-date">03/2018 - 02/2025</div>
      </div>
      <ul class="job-list">
        <li>Engenharia de dados focada em melhorar o EBITDA mitigando perdas e aumentando receitas dos clientes.</li>
        <li>Especialização em Microsoft Azure com foco profundo em soluções Kubernetes e Serverless.</li>
        <li>Criação de infraestrutura resiliente em nuvem e contêineres Docker.</li>
        <li>Sólida expertise em linguagens Python e C#.</li>
        <li>Implementação inovadora de sistemas baseados em IA generativa.</li>
        <li>Desenvolvimento de relatórios gerenciais de alto impacto em Power BI.</li>
      </ul>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Formação Acadêmica & Certificações</h2>
     <div class="glass-card">
      <div class="job-header">
        <div>
          <div class="job-title">Graduado em Sistemas de Informação</div>
          <div class="job-company">Univerisade Presbiteriana Mackenzie</div>
        </div>
        <div class="job-date">01/2009 - 01/2014 (Concluído)</div>
      </div>
    </div>

    <div class="glass-card">
      <div class="job-header">
        <div>
          <div class="job-title">MBA em Tecnologia para Negócios: Data Science e BI</div>
          <div class="job-company">Instituto Objetivo</div>
        </div>
        <div class="job-date">01/2023 - 04/2024 (Concluído)</div>
      </div>
    </div>

    <div class="glass-card">
      <div class="job-header">
        <div>
          <div class="job-title">MBA em Gestão Bancária e Finanças Corporativas</div>
          <div class="job-company">Instituto Objetivo</div>
        </div>
        <div class="job-date">12/2023 - 05/2024 (Concluído)</div>
      </div>
    </div>
    
    <div class="glass-card">
      <div class="job-header">
        <div>
          <div class="job-title">Microsoft Certified: Azure Data Science Associate</div>
          <div class="job-company">Certificação Profissional</div>
        </div>
        <div class="job-date">Expira: 31/05/2025</div>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Competências e Idiomas</h2>
    
    <div class="skills-grid">
      <div class="skill-tag"><i class="fas fa-database"></i> Conhecimento técnico em dados</div>
      <div class="skill-tag"><i class="fas fa-comments"></i> Comunicação técnica acessível</div>
      <div class="skill-tag"><i class="fas fa-cogs"></i> Automação de processos</div>
      <div class="skill-tag"><i class="fas fa-vial"></i> Testes e validação de software</div>
      <div class="skill-tag"><i class="fas fa-tasks"></i> Gestão eficiente de projetos</div>
      <div class="skill-tag"><i class="fas fa-book-reader"></i> Aprendizado contínuo</div>
      <div class="skill-tag"><i class="fas fa-users"></i> Liderança e motivação</div>
      <div class="skill-tag"><i class="fas fa-brain"></i> Pensamento analítico forte</div>
      <div class="skill-tag"><i class="fas fa-shield-alt"></i> Resiliência sob pressão</div>
      <div class="skill-tag"><i class="fas fa-language"></i> Inglês (C1 - Avançado)</div>
    </div>
  </section>

</div>
  ''';
}
