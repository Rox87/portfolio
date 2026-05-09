import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

void main() {
  runApp(const PortfolioApp());
}

class PortfolioApp extends StatelessWidget {
  const PortfolioApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Rodrigo Heloani | Data Engineer & Data Scientist',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: Colors.transparent, // Important for matrix background
        textTheme: GoogleFonts.interTextTheme(
          Theme.of(context).textTheme.apply(
                bodyColor: const Color(0xFFF8FAFC),
                displayColor: const Color(0xFFF8FAFC),
              ),
        ),
      ),
      home: const PortfolioHome(),
    );
  }
}

class PortfolioHome extends StatelessWidget {
  const PortfolioHome({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.transparent,
      body: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1000),
          child: ListView(
            padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 64),
            children: const [
              HeaderSection(),
              SizedBox(height: 64),
              ExperienceSection(),
              SizedBox(height: 64),
              EducationSection(),
              SizedBox(height: 64),
              SkillsSection(),
              SizedBox(height: 64),
              FooterSection(),
            ],
          ),
        ),
      ),
    );
  }
}

class HeaderSection extends StatelessWidget {
  const HeaderSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDesktop = MediaQuery.of(context).size.width > 768;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(height: isDesktop ? 64 : 0),
        ShaderMask(
          shaderCallback: (bounds) => const LinearGradient(
            colors: [Color(0xFF00FF00), Color(0xFF008800)],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ).createShader(bounds),
          child: Text(
            'Rodrigo Heloani de Brito',
            textAlign: TextAlign.center,
            style: GoogleFonts.outfit(
              fontSize: isDesktop ? 72 : 48,
              fontWeight: FontWeight.w800,
              color: Colors.white,
              letterSpacing: -1,
            ),
          ),
        ),
        const SizedBox(height: 16),
        Text(
          'Engenheiro de Dados | Analista de Dados MIS | Cientista de Dados',
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.w300,
            color: const Color(0xFF94A3B8),
          ),
        ),
        const SizedBox(height: 32),
        Wrap(
          alignment: WrapAlignment.center,
          spacing: 16,
          runSpacing: 16,
          children: const [
            ContactBadge(icon: FontAwesomeIcons.envelope, text: 'heloani.rodrigo@gmail.com'),
            ContactBadge(icon: FontAwesomeIcons.phone, text: '+55 11 999224-4443'),
            ContactBadge(icon: FontAwesomeIcons.locationDot, text: 'Santo André, SP'),
            ContactBadge(icon: FontAwesomeIcons.solidCalendarAlt, text: '30/04/1987'),
          ],
        ),
        const SizedBox(height: 48),
        const GlassCard(
          child: Text(
            'Profissional com sólida experiência em programação, matemática, finanças, engenharia de dados e ciência de dados e IA. '
            'Destaca-se pela comunicação acessível sobre assuntos técnicos e pelo compromisso com o aprendizado contínuo. '
            'Possui forte capacidade analítica para avaliação de dados, contribuindo para a gestão eficiente de projetos e motivação de equipes.',
            style: TextStyle(
              fontSize: 18,
              color: Color(0xFF94A3B8),
              height: 1.8,
            ),
          ),
        ),
      ],
    );
  }
}

class ContactBadge extends StatefulWidget {
  final dynamic icon;
  final String text;

  const ContactBadge({Key? key, required this.icon, required this.text}) : super(key: key);

  @override
  State<ContactBadge> createState() => _ContactBadgeState();
}

class _ContactBadgeState extends State<ContactBadge> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        transform: Matrix4.translationValues(0, _isHovered ? -2 : 0, 0),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(
          color: _isHovered ? Colors.white.withOpacity(0.08) : Colors.white.withOpacity(0.03),
          borderRadius: BorderRadius.circular(30),
          border: Border.all(color: Colors.white.withOpacity(0.08)),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            FaIcon(widget.icon, color: const Color(0xFF00FF00), size: 16),
            const SizedBox(width: 8),
            Text(
              widget.text,
              style: const TextStyle(color: Color(0xFF94A3B8), fontSize: 16),
            ),
          ],
        ),
      ),
    );
  }
}

class SectionTitle extends StatelessWidget {
  final String title;

  const SectionTitle(this.title, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 48),
      child: Row(
        children: [
          Text(
            title,
            style: GoogleFonts.outfit(
              fontSize: 40,
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Container(
              height: 1,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [Colors.white.withOpacity(0.08), Colors.transparent],
                  begin: Alignment.centerLeft,
                  end: Alignment.centerRight,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class ExperienceSection extends StatelessWidget {
  const ExperienceSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SectionTitle('Experiência Profissional'),
        const GlassCard(
          child: JobItem(
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
        ),
        const SizedBox(height: 32),
        const GlassCard(
          child: JobItem(
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
        ),
      ],
    );
  }
}

class EducationSection extends StatelessWidget {
  const EducationSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SectionTitle('Formação Acadêmica & Certificações'),
        const GlassCard(
          child: JobItem(
            title: 'Graduado em Sistemas de Informação',
            company: 'Univerisade Presbiteriana Mackenzie',
            date: '01/2009 - 01/2014 (Concluído)',
          ),
        ),
        const SizedBox(height: 32),
        const GlassCard(
          child: JobItem(
            title: 'MBA em Tecnologia para Negócios: Data Science e BI',
            company: 'Instituto Objetivo',
            date: '01/2023 - 04/2024 (Concluído)',
          ),
        ),
        const SizedBox(height: 32),
        const GlassCard(
          child: JobItem(
            title: 'MBA em Gestão Bancária e Finanças Corporativas',
            company: 'Instituto Objetivo',
            date: '12/2023 - 05/2024 (Concluído)',
          ),
        ),
        const SizedBox(height: 32),
        const GlassCard(
          child: JobItem(
            title: 'Microsoft Certified: Azure Data Science Associate',
            company: 'Certificação Profissional',
            date: 'Expira: 31/05/2025',
          ),
        ),
      ],
    );
  }
}

class SkillsSection extends StatelessWidget {
  const SkillsSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SectionTitle('Competências e Idiomas'),
        Wrap(
          spacing: 24,
          runSpacing: 24,
          children: const [
            SkillTag(icon: FontAwesomeIcons.database, text: 'Conhecimento técnico em dados'),
            SkillTag(icon: FontAwesomeIcons.comments, text: 'Comunicação técnica acessível'),
            SkillTag(icon: FontAwesomeIcons.cogs, text: 'Automação de processos'),
            SkillTag(icon: FontAwesomeIcons.vial, text: 'Testes e validação de software'),
            SkillTag(icon: FontAwesomeIcons.tasks, text: 'Gestão eficiente de projetos'),
            SkillTag(icon: FontAwesomeIcons.bookReader, text: 'Aprendizado contínuo'),
            SkillTag(icon: FontAwesomeIcons.users, text: 'Liderança e motivação'),
            SkillTag(icon: FontAwesomeIcons.brain, text: 'Pensamento analítico forte'),
            SkillTag(icon: FontAwesomeIcons.shieldAlt, text: 'Resiliência sob pressão'),
            SkillTag(icon: FontAwesomeIcons.language, text: 'Inglês (C1 - Avançado)'),
          ],
        ),
      ],
    );
  }
}

class SkillTag extends StatefulWidget {
  final dynamic icon;
  final String text;

  const SkillTag({Key? key, required this.icon, required this.text}) : super(key: key);

  @override
  State<SkillTag> createState() => _SkillTagState();
}

class _SkillTagState extends State<SkillTag> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        transform: Matrix4.translationValues(0, _isHovered ? -3 : 0, 0),
        padding: const EdgeInsets.all(20),
        width: 220,
        decoration: BoxDecoration(
          color: _isHovered ? Colors.white.withOpacity(0.06) : Colors.white.withOpacity(0.02),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(
            color: _isHovered ? const Color(0xFF00FF00) : Colors.white.withOpacity(0.08),
          ),
          boxShadow: _isHovered
              ? [BoxShadow(color: Colors.black.withOpacity(0.2), blurRadius: 15, offset: const Offset(0, 5))]
              : [],
        ),
        child: Row(
          children: [
            FaIcon(widget.icon, color: const Color(0xFF00FF00), size: 24),
            const SizedBox(width: 16),
            Expanded(child: Text(widget.text)),
          ],
        ),
      ),
    );
  }
}

class FooterSection extends StatelessWidget {
  const FooterSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 48),
      margin: const EdgeInsets.only(top: 64),
      decoration: BoxDecoration(
        border: Border(top: BorderSide(color: Colors.white.withOpacity(0.08))),
      ),
      alignment: Alignment.center,
      child: const Text(
        'Desenvolvido com Flutter \u2665 2026 Rodrigo Heloani de Brito',
        style: TextStyle(color: Color(0xFF94A3B8)),
      ),
    );
  }
}

class GlassCard extends StatefulWidget {
  final Widget child;

  const GlassCard({Key? key, required this.child}) : super(key: key);

  @override
  State<GlassCard> createState() => _GlassCardState();
}

class _GlassCardState extends State<GlassCard> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 400),
        transform: Matrix4.translationValues(0, _isHovered ? -8 : 0, 0),
        decoration: BoxDecoration(
          color: const Color.fromRGBO(30, 41, 59, 0.4),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: Colors.white.withOpacity(0.08)),
          boxShadow: _isHovered
              ? [BoxShadow(color: Colors.black.withOpacity(0.4), blurRadius: 40, offset: const Offset(0, 15))]
              : [],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(20),
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 16, sigmaY: 16),
            child: Stack(
              children: [
                Positioned(
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 4,
                  child: AnimatedOpacity(
                    opacity: _isHovered ? 1.0 : 0.0,
                    duration: const Duration(milliseconds: 400),
                    child: Container(
                      decoration: const BoxDecoration(
                        gradient: LinearGradient(
                          colors: [Color(0xFF00FF00), Color(0xFF008800)],
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                        ),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(40),
                  child: widget.child,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class JobItem extends StatelessWidget {
  final String title;
  final String company;
  final String date;
  final List<String>? responsibilities;

  const JobItem({
    Key? key,
    required this.title,
    required this.company,
    required this.date,
    this.responsibilities,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDesktop = MediaQuery.of(context).size.width > 768;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Flex(
          direction: isDesktop ? Axis.horizontal : Axis.vertical,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: isDesktop ? CrossAxisAlignment.start : CrossAxisAlignment.start,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: GoogleFonts.outfit(
                    fontSize: 24,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  company,
                  style: const TextStyle(
                    fontSize: 18,
                    color: Color(0xFF00FF00),
                  ),
                ),
              ],
            ),
            if (!isDesktop) const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              decoration: BoxDecoration(
                color: const Color.fromRGBO(79, 172, 254, 0.1),
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: const Color.fromRGBO(79, 172, 254, 0.2)),
              ),
              child: Text(
                date,
                style: const TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF00FF00),
                ),
              ),
            ),
          ],
        ),
        if (responsibilities != null && responsibilities!.isNotEmpty) ...[
          const SizedBox(height: 24),
          ...responsibilities!.map((item) => Padding(
                padding: const EdgeInsets.only(bottom: 12),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Padding(
                      padding: EdgeInsets.only(top: 4, right: 12),
                      child: Text('▹', style: TextStyle(color: Color(0xFF00FF00), fontWeight: FontWeight.bold)),
                    ),
                    Expanded(
                      child: Text(
                        item,
                        style: const TextStyle(
                          color: Color(0xFF94A3B8),
                          fontSize: 16,
                          height: 1.5,
                        ),
                      ),
                    ),
                  ],
                ),
              )),
        ]
      ],
    );
  }
}
