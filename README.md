# Front_reconocimiento_imagenes
Hi, trying to make a a web device for image managment c:

para el desarrollo del proyecto usaremos typescrypt, react y next.js
next que es el framework a usar basado en react 
las librerias que instalaremos 
node --version // node para el entorno qu usaremos para next.js
npm --version // sistema de gestion de pauqetes de node para instalar librerias de codigo de js

ña version de node tiene que ser medio actual ya que de no serlo tenemos que instalarlo

npx create-next-app@latest object-recognition-web // creacion de proyecto
npm run dev / ejecucion del proyecto

/////Next.js
- Local: http://localhost:3000 //// deberiamos ver algo asi en pantalla y lo ejecutamos en la web , si nos aparece la pantalla de node.js la instalacion es correcta
- 
librerias utilizadas:
npm install axios  // axios para la comunicacion de la API

npm install @tanstack/react-query // react query para consultas
npm install lucide-react

npm install uuid
npm install -D @types/uuid // pra identificadores o etiquetas


vamos a seccionar nuestro proyecto en diferentes carpetas para una mejor identificacion

src/
│
├── app/
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   ├── labeling/
│   │   └── page.tsx
│   │
│   ├── objects/
│   │   └── page.tsx
│   │
│   └── monitoring/
│       └── page.tsx
│
├── components/
│   ├── ui/
│   ├── dashboard/
│   ├── labeling/
│   ├── monitoring/
│   └── objects/
│
├── lib/
│   ├── api.ts
│   └── utils.ts
│
├── services/
│   ├── recognition.service.ts
│   ├── labeling.service.ts
│   └── objects.service.ts
│
├── types/
│   ├── api.ts
│   ├── recognition.ts
│   └── objects.ts
│
└── hooks/
    ├── useRecognition.ts
    ├── useObjects.ts
    └── useLabeling.ts
