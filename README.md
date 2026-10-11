# Konversi CSS ke SCSS — Tugas Rutin 4

## Cara menjalankan
```bash
npm install
npm run dev      # development (Vite, hot reload)
npm run build    # build produksi ke /dist
npm run sass     # compile langsung dengan Dart Sass -> dist/style.css
```

## Struktur (7-1 pattern)
```
src/scss/
├── abstracts/   _variables, _functions, _mixins, _index
├── vendors/     _index (kosong)
├── base/        _root, _reset, _base, _typography
├── layout/      _header (+nav), _grid, _footer
├── components/  _card, _button, _form
├── pages/       _home, _skills
├── themes/      _dark
└── main.scss    (entry point, @use)
```

## Checklist requirements
1. Konversi CSS existing -> SCSS ✔
2. Variables colors & spacing -> abstracts/_variables.scss ($colors, $spacing) ✔
3. Nesting maksimal 3 level ✔
4. Mixins reusable (5): flex-layout, card, respond-down, transition, form-control ✔
5. Struktur 7-1 pattern ✔
6. Memakai @use / @forward (tanpa @import) ✔
7. @each: generate :root vars (base/_root), dark mode (themes/_dark), grid-area (layout/_grid) ✔
8. Compile dengan Vite + Dart Sass ✔
