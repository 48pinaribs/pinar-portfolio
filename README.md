# Pınar — Full-Stack Developer Portfolio

Bağımsız kişisel portföy sitesi. Next.js (App Router) + TypeScript + Tailwind CSS + MDX ile kurulu.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **MDX** (`@next/mdx`, `next-mdx-remote`) — her proje `content/projects/*.mdx`
- `next/image` ile görseller
- `next/font/google`: Archivo (display), Inter (body), IBM Plex Mono (etiket/kod)
- Deploy hedefi: **Vercel**

## Geliştirme

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # production sunucu
npm run lint
```

## İçerik modeli

Her proje `content/projects/<slug>.mdx` dosyasında tutulur. Frontmatter alanları:

```yaml
title: OTOOTAĞ
slug: otootag
role: "Founder & Full-stack — SaaS / ERP"
color: "#2946D8"
url: "https://otootag.com"
github: ""
tags: ["Next.js", "Flutter", "Go", "Neon"]
images: ["/projects/otootag/01.png", "/projects/otootag/02.png", "/projects/otootag/03.png"]
labels: ["...", "...", "..."]
prjCode: "PRJ-01"
urlLabel: "otootag.com"
summary: "..."
steps:
  - label: "01 · PROBLEM"
    title: "..."
    body: "..."
```

MDX gövdesi problem/yaklaşım/sonuç anlatısını içerir ve `/work/[slug]` sayfasında render edilir. Ana sayfadaki proje index satırları (`src/components/ProjectsSection.tsx`) aynı dosyalardan üretilir (`src/lib/projects.ts`).

Yeni proje eklemek için: `content/projects/` altına yeni bir `.mdx` dosyası + `public/projects/<slug>/01..03` altına görseller eklemek yeterli — `src/lib/projects.ts` içindeki `order` dizisine slug eklenirse sıralama garanti edilir, eklenmezse dosya listesinin sonuna eklenir.

## Görseller

`public/projects/<slug>/01.png..03.png` gerçek proje ekran görüntüleridir (tarayıcıyla siteye girip alınmıştır). Dosya adları ve boyut oranı (16:10) aynı kalırsa galeri otomatik uyar. Bir görsel eksik/bozuksa galeri otomatik olarak zarif bir gradient placeholder gösterir (bkz. `src/components/Gallery.tsx`).

`public/cv-pinar.pdf` gerçek CV dosyasıdır.

## Tasarım referansı

`reference/portfolio-light.html` — statik HTML/CSS tasarım prototipi, tüm renk/tipografi/animasyon kararlarının birebir kaynağı. Tasarım sistemi `src/app/globals.css` içine taşınmıştır.

## Klasör yapısı

```
content/projects/       MDX proje içerikleri
public/projects/<slug>/ Proje görselleri
src/app/                Next.js App Router sayfaları
src/components/         React component'leri
src/lib/projects.ts     MDX okuma/parse mantığı
reference/               Statik tasarım referansı (HTML)
scripts/                 Yardımcı script'ler (placeholder üretimi)
```
