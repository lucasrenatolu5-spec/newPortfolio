# Lucas — Front-end Developer Portfolio

Portfolio premium, animado, construído com **React + TypeScript + Vite + CSS Modules**, com animações em **GSAP** (ScrollTrigger, parallax, magnetic buttons, stagger reveals).

## Stack

- React 18 + TypeScript
- Vite
- CSS Modules
- GSAP + ScrollTrigger

## Rodando localmente (Windows / PowerShell)

```powershell
npm install
npm run dev
```

Abra http://localhost:5173

## Build de produção

```powershell
npm run build
npm run preview
```

## Estrutura

```
src/
  assets/             -> imagens (foto do hero)
  components/
    Background/       -> blobs animados + partículas + grain overlay
    Cursor/            -> cursor customizado com anel magnético
    Navbar/
    Hero/
    About/
    Skills/
    Projects/
    Services/
    Contact/
    Footer/
    Icons.tsx          -> ícones SVG inline reutilizáveis
  data/
    content.ts         -> conteúdo de skills, projects, services, pillars
  hooks/
    useMagnetic.ts      -> efeito magnético em botões/links
    useScrollReveal.ts   -> reveal on-scroll (fade + blur + scale) e stagger
  styles/
    global.css          -> tokens de design (cores, fontes), resets, classes utilitárias
  App.tsx
  main.tsx
```

## Editando conteúdo

- **Textos de skills/projetos/serviços**: edite `src/data/content.ts`
- **Foto do hero**: troque `src/assets/lucas-hero.jpeg`
- **Cores/gradientes**: edite as variáveis CSS em `src/styles/global.css` (`:root`)
- **Links reais de GitHub/LinkedIn/Demo**: edite `src/data/content.ts` (projects) e os componentes `Contact` / `Footer`

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub
2. Na Vercel, importe o repositório (framework detectado automaticamente: Vite)
3. Build command: `npm run build` — Output directory: `dist`
4. Deploy 🚀

O arquivo `vercel.json` já está incluído com o rewrite padrão de SPA.
