# 🚀 Rodrigo Heloani | Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/DEMO-Live%20Site-brightgreen?style=for-the-badge&logo=google-chrome&logoColor=white)](https://rox87.github.io/portfolio/)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)](https://dart.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

</div>

---

## 🌐 Site Ao Vivo

Você pode acessar o portfólio online aqui:
### 👉 **[rox87.github.io/portfolio](https://rox87.github.io/portfolio/)** 👈

---

## 👨‍💻 Sobre o Projeto

Este é o meu portfólio profissional, desenvolvido com uma combinação moderna de **Dart (Web)** e **JavaScript**. O design foi pensado para ser minimalista, técnico e impactante, refletindo minha trajetória como Engenheiro de Dados e Cientista de Dados.

### ✨ Destaques
- **Matrix Background**: Um fundo animado inspirado no filme Matrix, desenvolvido puramente com JavaScript Canvas.
- **Dart Interop**: Uso do `package:web` para interação performática e tipada com o DOM.
- **Easter Egg**: Existe um segredo escondido no nome principal... você consegue descobrir? (Dica: tente clicar 12 vezes).
- **Design Moderno**: Interface limpa com efeitos de *Glassmorphism* e tipografia *Outfit*.
- **CI/CD**: Deploy automatizado via GitHub Actions.

## 🛠️ Stack Tecnológica

- **Linguagem Principal**: [Dart](https://dart.dev/) (Web)
- **Efeitos Visuais**: JavaScript (Canvas API)
- **Estilização**: CSS3 Moderno (Variables, Flexbox, Gradients)
- **Deployment**: GitHub Actions

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Dart SDK](https://dart.dev/get-dart) instalado.

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/Rox87/portfolio.git
   ```
2. Instale as dependências:
   ```bash
   dart pub get
   ```
3. Ative e use o `webdev` para o servidor de desenvolvimento:
   ```bash
   dart pub global activate webdev
   webdev serve
   ```
4. Acesse `http://localhost:8080`.

## 📦 Build e Deploy

Para gerar a versão de produção manualmente:
```bash
dart run build_runner build --release --output web:build --delete-conflicting-outputs
```

O deploy é feito automaticamente para o **GitHub Pages** através do workflow configurado em `.github/workflows/deploy.yml`.

---

<div align="center">
  Feito com ☕ e 💻 por <a href="https://github.com/Rox87">Rodrigo Heloani</a>
</div>
