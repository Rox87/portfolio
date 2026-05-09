import 'package:flutter/material.dart';

void main() {
  runApp(const PortfolioApp());
}

class PortfolioApp extends StatelessWidget {
  const PortfolioApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Rodrigo Heloani | Portfolio',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'Inter',
        scaffoldBackgroundColor: const Color(0xFFF0F4F8),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF1E3A8A),
          primary: const Color(0xFF1E3A8A),
          secondary: const Color(0xFF3B82F6),
        ),
      ),
      home: const PortfolioHome(),
    );
  }
}

class PortfolioHome extends StatelessWidget {
  const PortfolioHome({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 900),
            child: Padding(
              padding: const EdgeInsets.all(24.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  HeaderSection(),
                  SizedBox(height: 40),
                  ExperienceSection(),
                  SizedBox(height: 40),
                  EducationSection(),
                  SizedBox(height: 40),
                  SkillsSection(),
                  SizedBox(height: 40),
                  FooterSection(),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class HeaderSection extends StatelessWidget {
  const HeaderSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Rodrigo Heloani de Brito',
          style: TextStyle(
            fontSize: 48,
            fontWeight: FontWeight.w800,
            color: Color(0xFF1E3A8A),
            fontFamily: 'Outfit',
            height: 1.2,
          ),
        ),
        const SizedBox(height: 8),
        const Text(
          'Engenheiro de Dados | Analista de Dados MIS | Cientista de Dados',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.w600,
            color: Color(0xFF3B82F6),
            fontFamily: 'Outfit',
          ),
        ),
        const SizedBox(height: 24),
        Wrap(
          spacing: 16,
          runSpacing: 12,
          children: const [
            ContactItem(icon: Icons.email, text: 'heloani.rodrigo@gmail.com'),
            ContactItem(icon: Icons.phone, text: '+55 11 999224-4443'),
            ContactItem(icon: Icons.location_on, text: 'Santo André, SP'),
            ContactItem(icon: Icons.calendar_today, text: '30/04/1987'),
          ],
        ),
        const SizedBox(height: 32),
        const GlassCard(
          child: Text(
            'Profissional com sólida experiência em programação, matemática, finanças, engenharia de dados e ciência de dados e IA.\n'
            'Destaca-se pela comunicação acessível sobre assuntos técnicos e pelo compromisso com o aprendizado contínuo.\n'
            'Possui forte capacidade analítica para avaliação de dados, contribuindo para a gestão eficiente de projetos e motivação de equipes.',
            style: TextStyle(
              fontSize: 18,
              color: Color(0xFF4B5563),
              height: 1.6,
            ),
          ),
        ),
      ],
    );
  }
}

class ContactItem extends StatelessWidget {
  final IconData icon;
  final String text;

  const ContactItem({super.key, required this.icon, required this.text});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, size: 20, color: const Color(0xFF4B5563)),
        const SizedBox(width: 8),
        Text(
          text,
          style: const TextStyle(
            fontSize: 16,
            color: Color(0xFF4B5563),
          ),
        ),
      ],
    );
  }
}

class SectionTitle extends StatelessWidget {
  final String title;

  const SectionTitle({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 24.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: const TextStyle(
              fontSize: 32,
              fontWeight: FontWeight.w800,
              color: Color(0xFF1E3A8A),
              fontFamily: 'Outfit',
            ),
          ),
          const SizedBox(height: 8),
          Container(
            height: 4,
            width: 60,
            decoration: BoxDecoration(
              color: const Color(0xFF3B82F6),
              borderRadius: BorderRadius.circular(2),
            ),
          ),
        ],
      ),
    );
  }
}

class ExperienceSection extends StatelessWidget {
  const ExperienceSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: const [
        SectionTitle(title: 'Experiência Profissional'),
        JobCard(
          title: 'Analista de Dados MIS',
          company: 'Target (Santander) - São Paulo, SP',
          date: '05/2025 - Atual',
          responsibilities: [
            'Geração de estudos e obtenção de insights para identificar o perfil do público reclamante do banco.',
            'Especialização na plataforma Databricks para processamento de alto volume.',
            'Criação de bibliotecas envolvendo processos de dados complexos.',
            'Forte expertise e desenvolvimento em linguagem Python.',
            'Implementação de sistemas baseados em IA generativa de ponta.',
            'Desenvolvimento de relatórios gerenciais e dashboards dinâmicos em Power BI.',
          ],
        ),
        SizedBox(height: 16),
        JobCard(
          title: 'Engenheiro de Dados',
          company: 'Atento - São Paulo, SP',
          date: '03/2018 - 02/2025',
          responsibilities: [
            'Engenharia de dados focada em melhorar o EBITDA mitigando perdas e aumentando receitas dos clientes.',
            'Especialização em Microsoft Azure com foco profundo em soluções Kubernetes e Serverless.',
            'Criação de infraestrutura resiliente em nuvem e contêineres Docker.',
            'Sólida expertise em linguagens Python e C#.',
            'Implementação inovadora de sistemas baseados em IA generativa.',
            'Desenvolvimento de relatórios gerenciais de alto impacto em Power BI.',
          ],
        ),
      ],
    );
  }
}

class JobCard extends StatelessWidget {
  final String title;
  final String company;
  final String date;
  final List<String> responsibilities;

  const JobCard({
    super.key,
    required this.title,
    required this.company,
    required this.date,
    required this.responsibilities,
  });

  @override
  Widget build(BuildContext context) {
    return GlassCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: const TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF1E3A8A),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      company,
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w500,
                        color: Color(0xFF3B82F6),
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: BoxDecoration(
                  color: const Color(0xFFEFF6FF),
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: const Color(0xFFBFDBFE)),
                ),
                child: Text(
                  date,
                  style: const TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF2563EB),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: responsibilities.map((resp) {
              return Padding(
                padding: const EdgeInsets.only(bottom: 8.0),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Padding(
                      padding: EdgeInsets.only(top: 6.0, right: 12.0),
                      child: Icon(Icons.circle, size: 8, color: Color(0xFF3B82F6)),
                    ),
                    Expanded(
                      child: Text(
                        resp,
                        style: const TextStyle(
                          fontSize: 16,
                          color: Color(0xFF4B5563),
                          height: 1.5,
                        ),
                      ),
                    ),
                  ],
                ),
              );
            }).toList(),
          ),
        ],
      ),
    );
  }
}

class EducationSection extends StatelessWidget {
  const EducationSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: const [
        SectionTitle(title: 'Formação Acadêmica & Certificações'),
        EducationCard(
          title: 'Graduado em Sistemas de Informação',
          institution: 'Universidade Presbiteriana Mackenzie',
          date: '01/2009 - 01/2014 (Concluído)',
        ),
        SizedBox(height: 16),
        EducationCard(
          title: 'MBA em Tecnologia para Negócios: Data Science e BI',
          institution: 'Instituto Objetivo',
          date: '01/2023 - 04/2024 (Concluído)',
        ),
        SizedBox(height: 16),
        EducationCard(
          title: 'MBA em Gestão Bancária e Finanças Corporativas',
          institution: 'Instituto Objetivo',
          date: '12/2023 - 05/2024 (Concluído)',
        ),
        SizedBox(height: 16),
        EducationCard(
          title: 'Microsoft Certified: Azure Data Science Associate',
          institution: 'Certificação Profissional',
          date: 'Expira: 31/05/2025',
        ),
      ],
    );
  }
}

class EducationCard extends StatelessWidget {
  final String title;
  final String institution;
  final String date;

  const EducationCard({
    super.key,
    required this.title,
    required this.institution,
    required this.date,
  });

  @override
  Widget build(BuildContext context) {
    return GlassCard(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF1E3A8A),
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  institution,
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w500,
                    color: Color(0xFF3B82F6),
                  ),
                ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(
              color: const Color(0xFFEFF6FF),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: const Color(0xFFBFDBFE)),
            ),
            child: Text(
              date,
              style: const TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w600,
                color: Color(0xFF2563EB),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class SkillsSection extends StatelessWidget {
  const SkillsSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SectionTitle(title: 'Competências e Idiomas'),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: const [
            SkillTag(icon: Icons.storage, text: 'Conhecimento técnico em dados'),
            SkillTag(icon: Icons.chat, text: 'Comunicação técnica acessível'),
            SkillTag(icon: Icons.settings, text: 'Automação de processos'),
            SkillTag(icon: Icons.science, text: 'Testes e validação de software'),
            SkillTag(icon: Icons.task, text: 'Gestão eficiente de projetos'),
            SkillTag(icon: Icons.book, text: 'Aprendizado contínuo'),
            SkillTag(icon: Icons.people, text: 'Liderança e motivação'),
            SkillTag(icon: Icons.psychology, text: 'Pensamento analítico forte'),
            SkillTag(icon: Icons.security, text: 'Resiliência sob pressão'),
            SkillTag(icon: Icons.language, text: 'Inglês (C1 - Avançado)'),
          ],
        ),
      ],
    );
  }
}

class SkillTag extends StatelessWidget {
  final IconData icon;
  final String text;

  const SkillTag({super.key, required this.icon, required this.text});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(30),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.05),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
        border: Border.all(color: Colors.white.withValues(alpha: 0.5)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 18, color: const Color(0xFF3B82F6)),
          const SizedBox(width: 8),
          Text(
            text,
            style: const TextStyle(
              fontSize: 15,
              fontWeight: FontWeight.w600,
              color: Color(0xFF1E3A8A),
            ),
          ),
        ],
      ),
    );
  }
}

class FooterSection extends StatelessWidget {
  const FooterSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 32),
      alignment: Alignment.center,
      child: Text(
        'Desenvolvido com Flutter ♥ 2026 Rodrigo Heloani de Brito',
        style: TextStyle(
          fontSize: 16,
          color: const Color(0xFF6B7280),
        ),
      ),
    );
  }
}

class GlassCard extends StatelessWidget {
  final Widget child;

  const GlassCard({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(32),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.8),
        borderRadius: BorderRadius.circular(24),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF1E3A8A).withValues(alpha: 0.05),
            blurRadius: 30,
            offset: const Offset(0, 10),
          ),
        ],
        border: Border.all(color: Colors.white, width: 2),
      ),
      child: child,
    );
  }
}
